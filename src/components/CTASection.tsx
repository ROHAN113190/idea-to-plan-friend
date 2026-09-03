import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function CTASection({
  title = "Ready to plan your child's Class IX–X journey?",
  description = "Speak with us about batches, boards and the right starting point. We'll walk you through how we teach before you commit.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page my-24">
      <Reveal className="overflow-hidden rounded-2xl border border-border bg-primary px-8 py-14 text-center text-primary-foreground sm:px-14">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Book a counselling call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/courses">Explore courses</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
