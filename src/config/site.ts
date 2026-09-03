/**
 * Single source of truth for editable business information.
 * Placeholder values are intentionally obvious and are never rendered as
 * live tel:/mailto:/map links until real values are supplied.
 */

export const PLACEHOLDER_PREFIX = "[";

export const site = {
  name: "Joshi's Academy",
  tagline: "Gyan Ki Varsha",
  shortDescription:
    "CBSE & ICSE Science coaching for Classes IX & X in Kharadi, Pune.",
  locality: "Kharadi, Pune",
  region: "Maharashtra",
  country: "India",
  url: "https://joshisacademy.example",
  phone: "+91 XXXXX XXXXX",
  email: "info@REPLACE-WITH-OFFICIAL-EMAIL.com",
  whatsapp: "[WHATSAPP NUMBER TO BE ADDED]",
  address: "Kharadi, Pune, Maharashtra, India — [FULL ADDRESS TO BE ADDED]",
  mapsUrl: "[GOOGLE MAPS LINK TO BE ADDED]",
  social: {
    instagram: "[OFFICIAL SOCIAL LINKS TO BE ADDED]",
    facebook: "[OFFICIAL SOCIAL LINKS TO BE ADDED]",
    youtube: "[OFFICIAL SOCIAL LINKS TO BE ADDED]",
  },
  /** Enquiry webhook endpoint. */
  enquiryWebhookUrl: "https://automate.nirosha.org/webhook/joshisacademy",
} as const;

/** True when a config value is still an unfilled placeholder. */
export function isPlaceholder(value: string): boolean {
  return (
    value.includes("[") ||
    value.includes("XXXX") ||
    value.includes("REPLACE-WITH")
  );
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
