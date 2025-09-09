import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (creds) => {
        if (!creds?.identifier || !creds?.password) return null;
        const identifier = String(creds.identifier).toLowerCase();
        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: identifier },
              { username: identifier },
            ],
          },
        });
        if (!user?.passwordHash) return null;
        const ok = await bcrypt.compare(String(creds.password), user.passwordHash);
        if (!ok) return null;
        return { id: user.id, name: user.name ?? user.username ?? undefined, email: user.email ?? undefined } as any;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) (session.user as any).id = user.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
