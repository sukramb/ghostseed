import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/src/db";

const schema = z.object({
  username: z.string().min(3).max(32).regex(/^[a-z0-9_\.\-]+$/i),
  email: z.string().email(),
  password: z.string().min(8).max(128),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { username, email, password } = parsed.data;
  const lowerEmail = email.toLowerCase();
  const lowerUsername = username.toLowerCase();

  const exists = await prisma.user.findFirst({ where: { OR: [{ email: lowerEmail }, { username: lowerUsername }] } });
  if (exists) return NextResponse.json({ error: "User already exists" }, { status: 409 });

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.create({ data: { username: lowerUsername, email: lowerEmail, passwordHash } });

  return NextResponse.json({ ok: true });
}
