import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();
    if (req.method === "GET") {
      const db = client.db("taki-town");
      const collection = db.collection("posts");
      const data = await collection.findOne({ title: "test" });

      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Document not found" });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (client) {
      client.close();
    }
  }
}
