import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";
import { tagsToArray } from "@/utils/postPage";

export async function PATCH(
  req: Request,
  { params }: { params: { postTitle: string } }
) {
  let client;
  try {
    client = await connectDatabase();

    const { _id, title, summary, category, tags, content, imageLink } =
      await req.json();

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
            tags: tagsToArray(tags),
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
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  } finally {
    if (client) client.close();
  }
}
