import connectDB from "@/app/lib/mongodb";
import User from "@/app/model/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, task } = await req.json();
    await connectDB();
    await User.create({ title,task });
    return NextResponse.status(200).json({ title,task });
}

export async function GET(req) {
    await connectDB();
    const userss = await User.find()
    return NextResponse.json({userss})
}

export async function DELETE(req){
  
  const id = req.nextUrl.searchParams.get('id');
  await connectDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({status: 200});
}
