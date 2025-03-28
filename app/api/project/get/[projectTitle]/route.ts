import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ projectTitle: string }> }
) {
  let client;
  try {
    client = await connectDatabase();

    const { projectTitle } = await params;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("projects");
    const data = await collection.findOne({ title: projectTitle });

    if (!data) {
      return NextResponse.json(
        { message: "Document not found" },
        { status: 404 }
      );
    }

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
