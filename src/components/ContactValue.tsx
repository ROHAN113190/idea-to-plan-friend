import { isPlaceholder, site } from "@/config/site";
import { cn } from "@/lib/utils";

type ContactType = "phone" | "email" | "whatsapp" | "maps";

const config: Record<ContactType, { value: string; href: (v: string) => string; label: string }> = {
  phone: {
    value: site.phone,
    href: (v) => `tel:${v.replace(/\s/g, "")}`,
    label: "Phone",
  },
  email: { value: site.email, href: (v) => `mailto:${v}`, label: "Email" },
  whatsapp: {
    value: site.whatsapp,
    href: (v) => `https://wa.me/${v.replace(/\D/g, "")}`,
    label: "WhatsApp",
  },
  maps: { value: site.mapsUrl, href: (v) => v, label: "Google Maps" },
};

/**
 * Renders a contact detail. Placeholder values are shown as plain text so
 * nothing is ever presented as a working link.
 */
export function ContactValue({
  type,
  className,
}: {
  type: ContactType;
  className?: string;
}) {
  const entry = config[type];
  if (isPlaceholder(entry.value)) {
    return (
      <span className={cn("text-muted-foreground", className)} title="Awaiting official details">
        {entry.value}
      </span>
    );
  }
  return (
    <a
      href={entry.href(entry.value)}
      className={cn("underline-offset-4 transition-colors hover:text-foreground hover:underline", className)}
    >
      {entry.value}
    </a>
  );
}
