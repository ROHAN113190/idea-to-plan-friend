import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/blog";

const title = "Blog | Study Guidance from Joshi's Academy";
const description =
  "Articles on board exam preparation, study skills, CBSE vs ICSE Science and how parents can support students in Classes IX and X.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Guidance for students and parents"
        description="Practical writing on preparation, study habits and the realities of Classes IX and X."
      />

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase">
                  {post.category}
                </p>
                <h2 className="mt-3 text-xl">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="transition-colors hover:text-accent-foreground"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{post.readingTime}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  Read article
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
