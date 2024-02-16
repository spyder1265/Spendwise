import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, firstname, lastname, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const userCheck = await prisma.user.findFirst({ where: { email } });
  const name = firstname + " " + lastname;

  if (!userCheck) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role: email.includes("@admin.com") ? "ADMIN" : "USER",
      },
    });
    return NextResponse.json(user);
  } else {
    return NextResponse.json("user already exists", { status: 409 });
  }
}

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const id = params.get("id") || "";
    const email = params.get("email") || "";

    let user;

    if (email) {
      user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
    }

    if (id) {
      user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    }

    if (!user) {
      return new Response(JSON.stringify({ msg: "user does not exist" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing request", {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
