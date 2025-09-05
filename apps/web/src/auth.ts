import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  providers: [
    EmailProvider({
      sendVerificationRequest: async ({ identifier, url }) => {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const from = process.env.RESEND_FROM || "Ghostseed <noreply@ghostseed.app>";
        await resend.emails.send({
          from,
          to: identifier,
          subject: "Your sign-in link",
          html: `<p>Sign in to Ghostseed: <a href="${url}">Click here</a></p>`,
        });
      },
    }),
  ],
  pages: {
    signIn: "/signup",
    verifyRequest: "/verify",
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) (session.user as any).id = user.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
