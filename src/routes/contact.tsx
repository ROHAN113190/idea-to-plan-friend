import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { ContactValue } from "@/components/ContactValue";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

const title = "Contact & Enquiry | Joshi's Academy, Kharadi Pune";
const description =
  "Enquire about CBSE and ICSE Class IX–X Science batches at Joshi's Academy, Kharadi, Pune. Send an enquiry or book a counselling call.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us about the right batch"
        description="Share a few details and we'll get back with batch timings, availability and a counselling slot."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-7 sm:p-9">
            <h2 className="text-2xl">Enquiry form</h2>
            <p className="mt-2 mb-7 text-sm text-muted-foreground">
              All fields except the message are required.
            </p>
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={80} className="space-y-6">
          <div className="rounded-xl border border-border bg-secondary/50 p-7">
            <h2 className="text-xl">Reach the academy</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                <ContactValue type="phone" />
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                <ContactValue type="email" />
              </li>
              <li className="flex gap-3">
                <MessageCircle
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-accent-foreground"
                />
                <ContactValue type="whatsapp" />
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
                <span className="text-muted-foreground">{site.address}</span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Contact details shown as placeholders will be replaced with official information.
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-border p-7">
            <h2 className="text-base font-semibold">Location map</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              An embedded map will appear here once the official location link is available:{" "}
              {site.mapsUrl}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
