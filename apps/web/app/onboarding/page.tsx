"use client";

import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

const schema = z.object({
  name: z.string().min(3, "Name too short"),
  slug: z.string().min(3, "Slug too short").regex(/^[a-z0-9-]+$/, "Use a-z, 0-9 and -"),
});

export default function OnboardingPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  async function submit(formData: FormData) {
    const data = {
      name: String(formData.get("name") || ""),
      slug: String(formData.get("slug") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const m: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (m[i.path[0] as string] = i.message));
      setErrors(m);
      return;
    }

    const res = await fetch("/api/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setErrors({ slug: j?.error || "Failed to create team" });
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="container max-w-lg py-16">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Create your startup</h1>
        <p className="text-muted-foreground mt-1">Choose a name and a unique URL slug.</p>
        <form action={submit} className="mt-6 grid gap-4">
          <div>
            <Label>Startup name</Label>
            <Input name="name" placeholder="Ghostseed Labs" />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label>Slug</Label>
            <Input name="slug" placeholder="ghostseed-labs" />
            {errors.slug && <p className="text-sm text-red-500 mt-1">{errors.slug}</p>}
          </div>
          <div className="flex justify-end">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
