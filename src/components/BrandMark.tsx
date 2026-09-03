import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/60 bg-primary font-display text-lg font-semibold text-primary-foreground"
      >
        J
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-semibold text-foreground">
          {site.name}
        </span>
        {showTagline ? (
          <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {site.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
