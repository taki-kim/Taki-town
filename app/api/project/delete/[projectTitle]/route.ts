import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ projectTitle: string }> }
) {
  let client;
  try {
    client = await connectDatabase();

    const { projectTitle } = await params;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("projects");
    const result = await collection.deleteOne({ title: projectTitle });

    if (result) {
      return NextResponse.json(
        {
          message: "Data is sucessfully deleted",
        },
        {
          status: 200,
        }
      );
    } else {
      throw new Error("Failed to delete the post.");
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
