"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function PageClient() {
  const router = useRouter();
  const [teamDisplayName, setTeamDisplayName] = React.useState("");

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-center text-2xl font-semibold">Dashboard</h1>
        <p className="text-center text-gray-500">Choose an action to get started</p>

        <div className="grid gap-3">
          <Link href="/dashboard/projects/new">
            <Button className="w-full">Create a new project</Button>
          </Link>
          <Button variant="secondary" className="w-full" onClick={() => router.push('/')}>Back to home</Button>
        </div>
      </div>
    </div>
  );
}
