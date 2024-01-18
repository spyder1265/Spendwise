import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

// noinspection JSUnusedGlobalSymbols
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
      },
    });
    return NextResponse.json(user);
  } else {
    return NextResponse.json("user already exists", { status: 409 });
  }
}
