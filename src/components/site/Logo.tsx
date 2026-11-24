import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <img
      src={light ? "/images/pointview-logo-light.png" : "/images/pointview-logo-header.png"}
      alt="PointView"
      width={light ? 910 : 886}
      height={light ? 109 : 82}
      className={cn("h-6 w-auto max-w-full sm:h-7", className)}
    />
  );
}
