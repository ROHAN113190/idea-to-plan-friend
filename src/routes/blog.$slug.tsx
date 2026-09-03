import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { getPost } from "@/data/blog";
import { site } from "@/config/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.seoTitle} | ${site.name}` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: BlogPostPage,
});

function ArticleNotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl">Article not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This article may have been moved or removed.
      </p>
      <Link to="/blog" className="mt-6 inline-block text-sm font-medium underline">
        Back to the blog
      </Link>
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="container-page max-w-3xl py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All articles
        </Link>

        <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase">
          {post.category}
        </p>
        <h1 className="mt-3 text-balance text-4xl sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          {" · "}
          {post.readingTime}
        </p>

        <p className="mt-8 text-lg leading-relaxed text-foreground">{post.intro}</p>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 space-y-2 pl-5">
                {section.bullets.map((b) => (
                  <li key={b} className="list-disc text-base text-muted-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <p className="mt-10 border-l-2 border-accent pl-5 text-base leading-relaxed text-foreground">
          {post.conclusion}
        </p>
      </article>

      <CTASection />
    </>
  );
}
