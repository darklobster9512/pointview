import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight", light ? "text-dark-foreground" : "text-dark", className)}>
      <span className="relative inline-flex size-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary" />
        <span className="relative size-3 rounded-full bg-background" />
      </span>
      POINTVIEW
    </span>
  );
}
