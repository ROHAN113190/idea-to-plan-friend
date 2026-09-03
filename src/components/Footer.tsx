import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/BrandMark";
import { ContactValue } from "@/components/ContactValue";
import { navLinks, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.shortDescription}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-foreground">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <ContactValue type="phone" />
            </li>
            <li>
              <ContactValue type="email" />
            </li>
            <li>
              <ContactValue type="whatsapp" />
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="container-page py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
