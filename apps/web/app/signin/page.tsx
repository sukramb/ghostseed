"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="container max-w-md py-16">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-muted-foreground mt-1">Continue with a magic link sent to your email.</p>

        {!sent ? (
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              await signIn("email", { email, redirect: true });
              setSent(true);
            }}
          >
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@startup.com" />
            </div>
            <Button type="submit" className="w-full">Send magic link</Button>
          </form>
        ) : (
          <p className="mt-6 text-sm">Check your inbox. We’ve sent you a sign-in link.</p>
        )}
      </Card>
    </div>
  );
}
