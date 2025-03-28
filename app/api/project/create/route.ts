import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function POST(req: Request) {
  let client;
  const body = await req.json();
  try {
    client = await connectDatabase();

    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("projects");
    const response = await collection.insertOne(body);

    if (!response) {
      return NextResponse.json(
        { message: "failed to create data" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "document created" }, { status: 201 });
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
