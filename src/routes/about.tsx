import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, HeartHandshake, Target } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

const title = "About Joshi's Academy | Science Coaching in Kharadi, Pune";
const description =
  "Joshi's Academy teaches CBSE and ICSE Science to Class IX and X students in Kharadi, Pune, with a concept-first, small-batch approach.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Clarity before speed",
    body: "We would rather spend an extra session on a concept than move ahead with a class that half understands it.",
  },
  {
    icon: HeartHandshake,
    title: "Individual attention",
    body: "Batches stay small so teaching can adapt to the students in the room rather than a fixed script.",
  },
  {
    icon: GraduationCap,
    title: "Exam readiness",
    body: "Board technique — structure, timing, presentation — is taught deliberately, not left to chance.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A focused academy for Class IX and X Science"
        description={`${site.name} works with a small number of students in ${site.locality}, concentrating on the two years that shape a student's academic confidence.`}
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl">Our approach</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Classes IX and X are where Science stops being descriptive and starts demanding
              reasoning. Students who build genuine understanding in these years carry it forward;
              students who memorise struggle later, regardless of their marks today.
            </p>
            <p>
              Our teaching follows a simple sequence — explain the idea, connect it to something the
              student already understands, then practise until application is automatic. Testing is
              frequent and low-pressure, so gaps appear early enough to fix.
            </p>
            <p>
              Parents receive honest, specific feedback. Not a grade in isolation, but what the
              student understands, what needs work, and what to do about it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="space-y-5">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border bg-card p-6">
              <value.icon aria-hidden="true" className="size-6 text-accent-foreground" />
              <h3 className="mt-3 text-lg">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container-page">
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <h2 className="text-xl">Faculty profiles</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Detailed faculty information will be published here once provided by the academy.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
