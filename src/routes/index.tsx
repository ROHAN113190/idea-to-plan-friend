import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, MessagesSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { courses } from "@/data/courses";
import { resultStats } from "@/data/results";
import { blogPosts } from "@/data/blog";
import { site } from "@/config/site";

const title = "Joshi's Academy | CBSE & ICSE Science Coaching, Kharadi Pune";
const description =
  "Joshi's Academy offers focused CBSE and ICSE Science coaching for Classes IX and X in Kharadi, Pune — small batches, concept-first teaching and regular assessment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Concept-first teaching",
    body: "Every topic starts with understanding, not formulas. Application follows naturally.",
  },
  {
    icon: Users,
    title: "Small batches",
    body: "Limited group sizes so questions get asked, heard and answered properly.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular assessment",
    body: "Chapter tests and full papers throughout the year, with individual feedback.",
  },
  {
    icon: MessagesSquare,
    title: "Parent communication",
    body: "Clear, specific updates on progress — no vague reassurance.",
  },
];

const journey = [
  { step: "01", title: "Enquiry", body: "Share your child's class and board." },
  { step: "02", title: "Counselling", body: "We discuss goals, gaps and the right batch." },
  { step: "03", title: "Learning", body: "Structured teaching with continuous doubt support." },
  { step: "04", title: "Assessment", body: "Regular testing and honest feedback." },
  { step: "05", title: "Board readiness", body: "Targeted revision and exam technique." },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        <div className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal className="is-visible">
            <p className="text-xs font-semibold tracking-[0.24em] text-accent-foreground uppercase">
              {site.locality} · CBSE & ICSE
            </p>
            <h1 className="mt-5 text-balance text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Science teaching that builds understanding, not just marks
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {site.name} prepares Class IX and X students for CBSE and ICSE Science with small
              batches, disciplined practice and consistent parent communication.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Book a counselling call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/courses">
                  Explore courses
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="is-visible">
            <div className="grid gap-4 rounded-2xl border border-border bg-card p-8">
              {resultStats.map((stat) => (
                <div key={stat.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <p className="font-display text-3xl text-card-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Why families choose us"
          title="A method that stays consistent through the year"
          description="The two board years reward steady work. Our structure is built to make that steadiness possible."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <pillar.icon aria-hidden="true" className="size-6 text-accent-foreground" />
                <h3 className="mt-4 text-lg">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Courses" title="Programs for Class IX and X" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {courses.slice(0, 2).map((course, i) => (
              <Reveal key={course.slug} delay={i * 60} className="h-full">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/courses">View all courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="The journey" title="From first enquiry to board exam" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((item, i) => (
            <Reveal key={item.step} delay={i * 60}>
              <li className="h-full rounded-xl border border-border bg-card p-6">
                <span className="font-display text-sm text-accent-foreground">{item.step}</span>
                <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-page pb-4">
        <SectionHeading eyebrow="From the blog" title="Guidance worth reading" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase">
                  {post.category}
                </p>
                <h3 className="mt-3 text-lg">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
