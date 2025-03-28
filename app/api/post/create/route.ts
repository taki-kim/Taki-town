import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";

export async function POST(req: NextRequest, res: NextResponse) {
  let client;
  try {
    client = await connectDatabase();

    const db = client.db(process.env.DB_NAME);
    const postsCollection = db.collection("posts");
    const counterCollection = db.collection("counter");

    const { category, ...postData } = await req.json();

    // update post-counter
    await counterCollection.bulkWrite([
      {
        updateOne: {
          filter: { postCategory: category as string },
          update: { $inc: { count: 1 } },
        },
      },
      {
        updateOne: {
          filter: { postCategory: "all" },
          update: { $inc: { count: 1 } },
        },
      },
    ]);

    const updatedCounter = await counterCollection.findOne({
      postCategory: category,
    });

    if (!updatedCounter) {
      throw new Error("Failed to fetch updated counter.");
    }

    // Add post number to the new post data
    const postNumber = updatedCounter.count;
    const newPost = { ...postData, category, postNumber };

    const insertResult = await postsCollection.insertOne(newPost);

    if (!insertResult) {
      throw new Error("Failed to insert the new post.");
    }

    return NextResponse.json(
      { message: "Post successfully inserted." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (client) client.close();
  }
}
