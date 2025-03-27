import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ articleTitle: string }> }
) {
  let client;
  try {
    client = await connectDatabase();

    const { articleTitle } = await params;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("comments");
    const data = await collection
      .find({ articleTitle: articleTitle })
      .toArray();

    if (!data) {
      return NextResponse.json(
        { message: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
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
