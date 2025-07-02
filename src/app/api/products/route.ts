import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("minta");
  const products = await db.collection("products").find().toArray();
  return NextResponse.json({ products });
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // এটা অ্যারে বা অবজেক্ট হতে পারে
    const client = await clientPromise;
    const db = client.db("minta");

    // যদি অ্যারে হয়, তাহলে insertMany, নইলে insertOne
    if (Array.isArray(body)) {
      const result = await db.collection("products").insertMany(body);
      return NextResponse.json({ insertedCount: result.insertedCount });
    } else {
      const result = await db.collection("products").insertOne(body);
      return NextResponse.json({ insertedId: result.insertedId });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Insert failed", detail: error },
      { status: 500 }
    );
  }
}
