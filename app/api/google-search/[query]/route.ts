import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ query: string }> }
) {
  const { query } = await params;
  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        query as string
      )}&key=${process.env.GOOGLE_API_SECRET}&cx=${
        process.env.SEARCH_ENGINE_ID
      }&num=10&dateRestrict=y3`
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          message: `Error ${response.status} - ${response.statusText}`,
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
