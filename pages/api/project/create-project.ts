import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();
    if (req.method === "POST") {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("projects");
      await collection.insertOne(req.body);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    res.status(201).json({ message: "your post is inserted" });
    if (client) client.close();
  }
}
