import { MongoClient } from "mongodb";

let db;

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.MONGO_DB);

  db = client.db("events");

  return client;
}

export async function insertDocument(collection, document) {
  return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(collection, sort, filter = {}) {
  return await db.collection(collection).find(filter).sort(sort).toArray();
}
