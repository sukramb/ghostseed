"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="container max-w-md py-16">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Log in</h1>
        <p className="text-muted-foreground mt-1">Use your email/username and password.</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            const res = await signIn("credentials", {
              identifier,
              password,
              redirect: true,
              callbackUrl: "/dashboard",
            });
            // next-auth handles redirect; if it returns, error
            if (res?.error) setError(res.error);
          }}
        >
          <div>
            <Label>Email or Username</Label>
            <Input value={identifier} onChange={(e) => setIdentifier(e.target.value)} required placeholder="you@ghosd.com or ghosd" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
          </div>
          {error && <p className="text-sm text-red-500">{String(error)}</p>}
          <Button type="submit" className="w-full">Log in</Button>
        </form>
      </Card>
    </div>
  );
}
