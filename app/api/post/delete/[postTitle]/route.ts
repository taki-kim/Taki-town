import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { postTitle: string } }
) {
  let client;
  try {
    client = await connectDatabase();

    const { postTitle } = params;
    const db = client.db(process.env.DB_NAME);
    const postsCollection = db.collection("posts");
    const counterCollection = db.collection("counter");

    const postCategory = await req.json();

    // update post-counter
    await counterCollection.bulkWrite([
      {
        updateOne: {
          filter: { postCategory: postCategory },
          update: { $inc: { count: -1 } },
        },
      },
      {
        updateOne: {
          filter: { postCategory: "all" },
          update: { $inc: { count: -1 } },
        },
      },
    ]);

    const updatedCounter = await counterCollection.findOne({
      postCategory: postCategory,
    });

    if (!updatedCounter) {
      throw new Error("Failed to fetch updated counter.");
    }

    const result = await postsCollection.deleteOne({ title: postTitle });

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
