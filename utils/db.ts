import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = MongoClient.connect(process.env.DB_URI as string);

  return client;
}

export async function readDocument(client: any, collection: any) {
  const db = client.db(process.env.DB_NAME);

  await db.collection(collection).find();
}
