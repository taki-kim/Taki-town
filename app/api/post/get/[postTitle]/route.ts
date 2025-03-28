import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function GET(
  req: Request,
  { params }: { params: { postTitle: string } }
) {
  let client;
  try {
    client = await connectDatabase();

    const { postTitle } = params;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("posts");
    const data = await collection.findOne({ title: postTitle });

    return NextResponse.json(data);
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
