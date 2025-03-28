import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ projectTitle: string }> }
) {
  let client;
  try {
    client = await connectDatabase();

    const { _id, title, summary, content, imageLink } = await req.json();

    if (req.method === "PATCH") {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("projects");

      const result = await collection.updateOne(
        { _id: new ObjectId(_id as string) },
        {
          $set: {
            title,
            summary,
            content,
            imageLink,
          },
        }
      );

      if (result) {
        return NextResponse.json(
          { message: "Document is updated" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "Document not found" },
          { status: 404 }
        );
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (client) client.close();
  }
}
