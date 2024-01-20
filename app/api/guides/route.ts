import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { SessionProvider, getSession } from "next-auth/react";
import {  } from "@/data/user";


export async function POST(
  req: Request,
) {
  try {
    const session = await auth()
    const {title} = await req.json();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId: session.user.id,
        title,
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}