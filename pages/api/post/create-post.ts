import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../utils/db";
import { PostCountProps } from "@/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();
    if (req.method === "POST") {
      const db = client.db(process.env.DB_NAME);
      const postsCollection = db.collection("posts");
      const counterCollection = db.collection("counter");

      const { category, ...postData } = req.body;

      // update post-counter
      await counterCollection.bulkWrite([
        {
          updateOne: {
            filter: { postCategory: category },
            update: { $inc: { count: 1 } },
          },
        },
        {
          updateOne: {
            filter: { postCategory: "all" },
            update: { $inc: { count: 1 } },
          },
        },
      ]);

      const updatedCounter = await counterCollection.findOne({
        postCategory: category,
      });

      if (!updatedCounter) {
        throw new Error("Failed to fetch updated counter.");
      }

      // Add post number to the new post data
      const postNumber = updatedCounter.count;
      const newPost = { ...postData, category, postNumber };

      const insertResult = await postsCollection.insertOne(newPost);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    res.status(201).json({ message: "your post is inserted" });
    if (client) client.close();
  }
}
