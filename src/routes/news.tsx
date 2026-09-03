import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { newsItems } from "@/data/news";

const title = "News & Events | Joshi's Academy, Kharadi Pune";
const description =
  "Announcements, batch schedules, test series updates and events from Joshi's Academy in Kharadi, Pune.";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & events"
        title="Announcements from the academy"
        description="Entries below are placeholders. Real announcements will appear here as they are published."
      />

      <section className="container-page py-16">
        <ul className="space-y-4">
          {newsItems.map((item, i) => (
            <li key={item.id}>
              <Reveal delay={i * 60}>
                <article className="rounded-xl border border-border bg-card p-6">
                  <p className="flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase">
                    <CalendarDays aria-hidden="true" className="size-4" />
                    {item.date}
                  </p>
                  <h2 className="mt-3 text-xl">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
