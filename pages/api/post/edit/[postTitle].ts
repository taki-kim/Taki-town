import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();

    const { _id, title, summary, category, tags, content, imageLink } =
      req.body;

    if (req.method === "PATCH") {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("posts");

      const result = await collection.updateOne(
        { _id: new ObjectId(_id as string) },
        {
          $set: {
            title,
            summary,
            category,
            tags,
            content,
            imageLink,
          },
        }
      );

      if (result) {
        res.status(200).json("Document is updated");
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (client) client.close();
  }
}
