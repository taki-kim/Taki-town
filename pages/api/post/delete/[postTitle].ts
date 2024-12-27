import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();
    if (req.method === "DELETE") {
      const { postTitle } = req.query;
      const db = client.db(process.env.DB_NAME);
      const postsCollection = db.collection("posts");
      const counterCollection = db.collection("counter");

      const postCategory = req.body;

      // update post-counter
      await counterCollection.bulkWrite([
        {
          updateOne: {
            filter: { postCategory: postCategory },
            update: { $inc: { count: -1 } },
          },
        },
        {
          updateOne: {
            filter: { postCategory: "all" },
            update: { $inc: { count: -1 } },
          },
        },
      ]);

      const updatedCounter = await counterCollection.findOne({
        postCategory: postCategory,
      });

      if (!updatedCounter) {
        throw new Error("Failed to fetch updated counter.");
      }

      const result = await postsCollection.deleteOne({ title: postTitle });

      if (result) {
        res.status(200).json({ message: "Data is sucessfully deleted" });
      } else {
        res.status(404).json({ message: "Error ouccured" });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (client) client.close();
  }
}
