import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function GET(req: Request) {
  let client;
  try {
    client = await connectDatabase();

    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("projects");
    const data = await collection.find().toArray();

    if (!data) {
      return NextResponse.json(
        {
          message: "Document not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
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
