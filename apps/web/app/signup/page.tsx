"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const router = useRouter();

  return (
    <div className="container max-w-md py-16">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <p className="text-muted-foreground mt-1">Use a username, email, and password.</p>

        {!ok ? (
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
              });
              if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                setError(j?.error ?? "Registration failed");
                return;
              }
              setOk(true);
              setTimeout(() => router.push("/login"), 800);
            }}
          >
            <div>
              <Label>Username</Label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="ghosd" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@ghosd.com" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            {error && <p className="text-sm text-red-500">{String(error)}</p>}
            <Button type="submit" className="w-full">Create account</Button>
          </form>
        ) : (
          <p className="mt-6 text-sm">Account created. Redirecting to login…</p>
        )}
      </Card>
    </div>
  );
}
