import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  let { commentId } = req.query;

  try {
    if (req.method === "PATCH") {
      const { recomment } = req.body;

      client = await connectDatabase();
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("comments");
      const result = await collection.updateOne(
        {
          _id: new ObjectId(commentId as string),
        },
        {
          $set: {
            recomment,
          },
        }
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    res.status(201).json({ message: "your post is inserted" });
    if (client) client.close();
  }
}
