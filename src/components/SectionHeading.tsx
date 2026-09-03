import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: As = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent-foreground/70 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <As
        className={cn(
          "text-balance text-foreground",
          As === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </As>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
