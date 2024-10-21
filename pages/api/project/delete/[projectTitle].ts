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
      const { projectTitle } = req.query;
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("projects");
      const result = await collection.deleteOne({ title: projectTitle });

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
