import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export const revalidate = 3600;

export async function GET() {
  let client;
  try {
    client = await connectDatabase();

    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("posts");
    const data = await collection.find().toArray();

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
