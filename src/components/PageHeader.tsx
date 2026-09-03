import type { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="container-page py-16 sm:py-20">
        <SectionHeading
          as="h1"
          {...(eyebrow ? { eyebrow } : {})}
          title={title}
          {...(description ? { description } : {})}
        />
      </div>
    </section>
  );
}
