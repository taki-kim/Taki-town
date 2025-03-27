import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { genSalt, hash } from "bcryptjs";

export async function POST(req: Request) {
  let client;
  const body = await req.json();
  let salt = await genSalt(10);
  let hashedPassword = await hash(body.password, salt);
  body.password = hashedPassword;

  try {
    client = await connectDatabase();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("comments");
    const response = await collection.insertOne(body);

    if (!response) {
      throw new Error("Failed to fetch updated counter");
    }

    return NextResponse.json(
      {
        message: "Comment successfully inserted",
      },
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
