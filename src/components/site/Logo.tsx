import logoDark from "@/assets/pointview-logo.png.asset.json";
import logoLight from "@/assets/pointview-logo-light.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <img
      src={light ? logoLight.url : logoDark.url}
      alt="PointView"
      width={910}
      height={109}
      className={cn("h-6 w-auto max-w-full sm:h-7", className)}
    />
  );
}
