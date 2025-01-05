import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "@/utils/db";
import { genSalt, hash } from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  let salt = await genSalt(10);
  let hashedPassword = await hash(req.body.password, salt);
  req.body.password = hashedPassword;

  try {
    if (req.method === "POST") {
      client = await connectDatabase();
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("comments");
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
