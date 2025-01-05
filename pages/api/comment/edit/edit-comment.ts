import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";
import { verifyPassword } from "@/utils/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = await connectDatabase();
    const { id, comment, password, passwordInput } = req.body;

    // password auth
    const authentication = await verifyPassword(passwordInput, password);

    if (req.method === "PATCH") {
      if (authentication) {
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection("comments");

        const result = await collection.updateOne(
          { _id: new ObjectId(id as string) },
          {
            $set: {
              comment,
            },
          }
        );

        if (result) {
          res.status(200).json("Document is updated");
        } else {
          res.status(404).json({ message: "Document not found" });
        }
      } else {
        res.status(401).json("password invaild");
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (client) client.close();
  }
}
