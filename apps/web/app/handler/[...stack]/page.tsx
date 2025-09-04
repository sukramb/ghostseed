import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function Handler() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Auth handler</h1>
      <p className="text-sm text-muted-foreground">Auth provider not configured yet.</p>
    </div>
  );
}
