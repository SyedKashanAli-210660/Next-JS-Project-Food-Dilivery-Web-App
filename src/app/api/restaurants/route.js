import mongoose from "mongoose";
import { connectionStr } from "../../lib/db";
import Restaurant from "../../lib/restaurantsModel";
import { NextResponse } from "next/server";

console.log("MongoDB Connection String:", connectionStr);

export async function GET() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(connectionStr);
        console.log("Connected to MongoDB");

        const data = await Restaurant.find();
        console.log("Data fetched from MongoDB:", data);

        return NextResponse.json({ result: data });
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        return NextResponse.json({ error: 'Failed to fetch data!'/br,'Check DataVase Status' }, { status: 500 });
    } finally {
        await mongoose.connection.close(); // Ensure connection is closed
        console.log("MongoDB connection closed");
    }
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload);
    return  NextResponse.json({result:payload})
}
