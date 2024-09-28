import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();
    if (req.method === "GET") {
      const { postTitle } = req.query;
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("posts");
      const data = await collection.findOne({ title: postTitle });

      if (data) {
        res.status(200).json(data);
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
