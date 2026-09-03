import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase">
        <span className="rounded-full bg-accent px-2.5 py-1 text-accent-foreground">
          {course.board}
        </span>
        <span className="text-muted-foreground">{course.className}</span>
      </div>

      <h3 className="mt-4 text-xl text-card-foreground">{course.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.summary}</p>

      <ul className="mt-5 space-y-2">
        {course.focusAreas.map((area) => (
          <li key={area} className="flex gap-2 text-sm text-muted-foreground">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
            <span>{area}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs text-muted-foreground">{course.assessment}</p>

      <div className="mt-6 pt-2">
        <Button asChild variant="outline" size="sm">
          <Link to="/contact">Enquire about this batch</Link>
        </Button>
      </div>
    </article>
  );
}
