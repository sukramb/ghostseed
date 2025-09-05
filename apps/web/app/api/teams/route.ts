import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/src/auth";
import { prisma } from "@/src/db";

const bodySchema = z.object({ name: z.string().min(3, "Name too short"), slug: z.string().min(3).regex(/^[a-z0-9-]+$/) });

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email || !(session as any).user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await req.json().catch(() => ({}));
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { name, slug } = parsed.data;

  const existing = await prisma.team.findUnique({ where: { slug } });
  if (existing) return NextResponse.json({ error: "Slug taken" }, { status: 409 });

  const team = await prisma.team.create({
    data: {
      name,
      slug,
      createdById: (session as any).user.id as string,
      members: {
        create: {
          userId: (session as any).user.id as string,
          role: "founder",
        },
      },
    },
  });

  return NextResponse.json({ team });
}
