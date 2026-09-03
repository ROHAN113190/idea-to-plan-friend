import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const title = "Gallery | Joshi's Academy, Kharadi Pune";
const description =
  "Classroom moments, learning sessions, student activities and events at Joshi's Academy in Kharadi, Pune.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...galleryCategories];
  const items =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the academy"
        description="Photographs will be replaced with real images from the academy. The layout below shows how they will be presented."
      />

      <section className="container-page py-16">
        <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              role="tab"
              type="button"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                active === filter
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 50}>
              <figure className="overflow-hidden rounded-xl border border-border bg-secondary/60">
                <div className="grid aspect-[4/3] place-items-center text-muted-foreground">
                  <ImageIcon aria-hidden="true" className="size-8" />
                </div>
                <figcaption className="border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
