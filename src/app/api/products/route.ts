import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("minta");
  const products = await db.collection("products").find().toArray();
  return NextResponse.json({ products });
}

export async function POST(req: Request) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("minta");
  const result = await db.collection("products").insertOne(body);
  return NextResponse.json({ insertedId: result.insertedId });
}
