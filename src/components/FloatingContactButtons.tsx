import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { isPlaceholder, site } from "@/config/site";

export function FloatingContactButtons() {
  const phoneReady = !isPlaceholder(site.phone);
  const waReady = !isPlaceholder(site.whatsapp);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 print:hidden">
      {waReady ? (
        <a
          href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
          aria-label="Chat on WhatsApp"
          className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5" />
        </a>
      ) : null}
      {phoneReady ? (
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          aria-label="Call the academy"
          className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="size-5" />
        </a>
      ) : (
        <Link
          to="/contact"
          aria-label="Contact the academy"
          className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="size-5" />
        </Link>
      )}
    </div>
  );
}
