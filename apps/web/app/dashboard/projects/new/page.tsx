"use client";

import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

const schema = z.object({
  name: z.string().min(3, "Name is too short"),
  description: z.string().min(10, "Please add a short description"),
  isStealth: z.boolean().default(false),
  sharePrice: z.coerce.number().min(1, "Min €1"),
  maxShares: z.coerce.number().int().min(1, "Min 1"),
  revenueSharePct: z.coerce.number().min(0.1).max(50),
});

export default function NewProjectPage() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(formData: FormData) {
    const raw = {
      name: String(formData.get("name") || ""),
      description: String(formData.get("description") || ""),
      isStealth: Boolean(formData.get("isStealth")),
      sharePrice: formData.get("sharePrice"),
      maxShares: formData.get("maxShares"),
      revenueSharePct: formData.get("revenueSharePct"),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const m: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (m[i.path[0] as string] = i.message));
      setErrors(m);
      return;
    }
    // TODO: submit to API when backend exists
    router.push("/dashboard");
  }

  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-2xl font-semibold">Create a new project</h1>
      <p className="text-muted-foreground mt-1">Define your Ghostseed Shares and revenue‑share terms.</p>

      <Card className="p-6 mt-8">
        <form
          action={handleSubmit}
          className="grid grid-cols-1 gap-6"
        >
          <div>
            <Label>Name</Label>
            <Input name="name" placeholder="Startup name" />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label>Description</Label>
            <Input name="description" placeholder="What are you building?" />
            {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Share price (€)</Label>
              <Input name="sharePrice" type="number" step="0.01" placeholder="200" />
              {errors.sharePrice && <p className="text-sm text-red-500 mt-1">{errors.sharePrice}</p>}
            </div>
            <div>
              <Label>Max shares</Label>
              <Input name="maxShares" type="number" placeholder="1000" />
              {errors.maxShares && <p className="text-sm text-red-500 mt-1">{errors.maxShares}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Revenue share %</Label>
              <Input name="revenueSharePct" type="number" step="0.1" placeholder="5" />
              {errors.revenueSharePct && <p className="text-sm text-red-500 mt-1">{errors.revenueSharePct}</p>}
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <input type="checkbox" name="isStealth" className="h-4 w-4" />
                Stealth project
              </Label>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="secondary" onClick={() => router.back()}>Cancel</Button>
            <Button type="submit">Create project</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
