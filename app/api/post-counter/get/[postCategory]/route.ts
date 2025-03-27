import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ postCategory: string }> }
) {
  let client;
  try {
    client = await connectDatabase();

    const { postCategory } = await params;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("counter");
    const data = await collection.findOne({ postCategory: postCategory });

    if (data) {
      return NextResponse.json(data);
    } else {
      throw new Error("Error occured");
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
