import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ commentId: string }> }
) {
  let client;
  let { commentId } = await params;

  try {
    const { recomment } = await req.json();

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

    if (!result) {
      return NextResponse.json(
        { message: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "comment is successfully updated" },
      { status: 201 }
    );
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
