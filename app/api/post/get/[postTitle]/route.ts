import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { tagsArrayToString } from "@/utils/postPage";

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
    const responseData = {
      ...data,
      tags: Array.isArray(data?.tags)
        ? tagsArrayToString(data.tags)
        : data?.tags,
    };

    return NextResponse.json(responseData);
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
