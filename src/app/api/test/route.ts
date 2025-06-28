// src/app/api/test/route.ts
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("minta"); // ঠিকমতো নাম দিন
    const collections = await db.listCollections().toArray();
    const productDocs = await db.collection("products").find({}).toArray();

    return NextResponse.json({
      collections: collections.map((c) => c.name),
      count: productDocs.length,
      data: productDocs,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed", detail: error },
      { status: 500 }
    );
  }
}
