import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { academicYear, resultStats } from "@/data/results";
import { testimonialPlaceholder, testimonials } from "@/data/testimonials";

const title = "Student Results | Joshi's Academy, Kharadi Pune";
const description =
  "Academic results and performance highlights for Joshi's Academy students across CBSE and ICSE Class IX and X.";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Results"
        title="Performance we can stand behind"
        description={`Figures below relate to the ${academicYear} academic year. Detailed, verified results are added as each year concludes.`}
      />

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {resultStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <p className="font-display text-4xl text-card-foreground">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-border p-8 text-center">
          <h2 className="text-xl">Individual toppers</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Student names, scores and photographs will be published here once the academy shares
            verified details and consent.
          </p>
        </div>
      </section>

      <section className="container-page pb-8">
        <h2 className="text-2xl">What students and parents say</h2>
        {testimonials.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="rounded-xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-medium">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="mt-4 rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            {testimonialPlaceholder}
          </p>
        )}
      </section>

      <CTASection />
    </>
  );
}
