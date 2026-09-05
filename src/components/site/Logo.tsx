import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <img
      src={light ? "/images/pointview-logo-light.png" : "/images/pointview-logo.png"}
      alt="PointView"
      width={910}
      height={109}
      className={cn("h-6 w-auto max-w-full sm:h-7", className)}
    />
  );
}
