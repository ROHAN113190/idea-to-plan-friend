import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { courses } from "@/data/courses";

const title = "CBSE & ICSE Science Courses for Class IX–X | Joshi's Academy";
const description =
  "Structured CBSE and ICSE Science coaching for Classes IX and X in Kharadi, Pune — concept-first teaching, regular testing and board-focused practice.";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Programs built around the board your child studies"
        description="Every batch follows the same principle: understand the concept first, then practise until the exam feels routine."
      />

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 60} className="h-full">
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-4">
        <div className="rounded-xl border border-border bg-secondary/50 p-8">
          <h2 className="text-2xl">How our batches run</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Small batches",
                body: "Group sizes are kept limited so every student gets attention and their doubts are actually heard.",
              },
              {
                title: "Continuous assessment",
                body: "Chapter tests, periodic tests and full papers, each followed by individual feedback.",
              },
              {
                title: "Parent communication",
                body: "Regular updates on progress, attendance and areas that need work at home.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
