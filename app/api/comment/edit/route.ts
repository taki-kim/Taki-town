import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";
import { verifyPassword } from "@/utils/auth";

export async function PATCH(req: Request) {
  let client;
  try {
    client = await connectDatabase();

    const { id, comment, password, passwordInput } = await req.json();

    // password auth
    const authentication = await verifyPassword(passwordInput, password);

    if (authentication) {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("comments");

      const result = await collection.updateOne(
        { _id: new ObjectId(id as string) },
        {
          $set: {
            comment,
          },
        }
      );

      if (result) {
        return NextResponse.json(
          { message: "Document is updated" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "failed to edit the data" },
          { status: 404 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "password invaild" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (client) client.close();
  }
}
