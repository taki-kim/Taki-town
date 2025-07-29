import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { FETCH_POSTS_LIMIT } from "@/constant";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const offsetParam = searchParams.get("offset") || "0";
  const category = searchParams.get("category");
  const offset = parseInt(offsetParam, 10);

  let client;
  try {
    client = await connectDatabase();

    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("posts");

    const query: Record<string, any> = {};
    if (category) {
      query.category = category;
    }

    const data = await collection
      .find(query)
      .sort({ _id: -1 })
      .skip(offset)
      .limit(FETCH_POSTS_LIMIT)
      .toArray();

    const totalCount = category
      ? await collection.countDocuments({ category: category })
      : await collection.countDocuments();

    return NextResponse.json({
      data,
      hasMore: offset + FETCH_POSTS_LIMIT < totalCount,
    });
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
