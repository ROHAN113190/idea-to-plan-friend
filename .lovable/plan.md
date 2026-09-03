# Joshi's Academy — Premium Website Implementation Plan

A complete, multi-page marketing website for Joshi's Academy (Kharadi, Pune) — CBSE & ICSE Science coaching for Classes IX & X. Conversion-focused, SEO-ready, no invented facts.

## Design direction

- Palette: deep navy/midnight primary, warm gold accent (used sparingly for stats, key CTAs, dividers), soft ivory / warm off-white backgrounds, light blue and soft gray supports. All defined as semantic tokens in the design system, not hardcoded in components.
- Typography: an elegant serif for headings (confident, academic) paired with a clean humanist sans for body. Loaded via a font `<link>` in the root route.
- Motion: subtle scroll-reveal, gentle hover lifts on cards, smooth section transitions. No bounce, no heavy animation.
- Text-based brand mark ("Joshi's Academy" + "Gyan Ki Varsha"), built as a swappable component so the official logo drops in later.
- Imagery: abstract/premium academic visuals only, never captioned as real academy photos. Gallery and blog use clearly replaceable placeholders.

## Pages

1. **Home** — sticky nav + Enquire Now CTA; hero ("Where Strong Fundamentals Shape Exceptional Futures.") with dual CTAs and three trust ticks; trust strip; About intro; Why Joshi's (4 feature cards); Academic Programs (4 course cards); Results & Achievements (25+ / 90%+ / 2024–25 with academic-year note); Learning Journey (Learn → Understand → Practice → Test → Improve → Excel); Testimonials placeholder ("Student/Parent feedback will be featured here."); Gallery preview; final conversion CTA; premium footer.
2. **Courses** — CBSE IX/X and ICSE IX/X with focus areas, benefits, assessment approach, per-program enquiry CTA.
3. **About Us** — philosophy, how we teach, why small batches matter, commitment; elegant placeholder block for founder/faculty/history (no invented names).
4. **Results** — 2024–25 verified results presented professionally, structured for future year-wise additions.
5. **Gallery** — category-filtered grid (Classroom, Learning, Student Activities, Events, Achievements) driven by a data file, placeholders marked as such.
6. **News & Events** — announcement cards clearly labelled as demo content, easy to update.
7. **Blog** — index plus 5 full articles with their own pages, slugs, H1/H2/H3 structure, intro/sections/tips/conclusion, category, date, featured-image placeholder, related articles, and an enquiry CTA. Topics: Class 10 board prep, building strong science fundamentals, CBSE vs ICSE, how regular tests help, how parents can support during exams. Educational content only; no claims about the academy.
8. **Contact** — headline, contact info block, enquiry form (Student Name, Parent Name, Mobile, Email, Class, Board, Program, Message) with client-side validation and a professional success state.

Plus a global floating WhatsApp + Call button pair and a 404 already handled by the root route.

## Enquiry form behaviour

Submissions POST to a configurable webhook URL (with optional key) read from a single config constant — nothing is stored in a database. Until you supply the real endpoint, the form validates, posts to the placeholder URL, and always shows the success state gracefully if the request fails.

## Central configuration

One `src/config/site.ts` holding: academyName, tagline, phone (+91 9999999999), email (test@gmail.com), address (Kharadi, Pune, Maharashtra, India — [Full Address To Be Added]), whatsappNumber, googleMapsLink placeholder, socialLinks placeholders, webhook URL/key. All pages read from it so real details are a one-file change.

Content data files: `courses.ts`, `results.ts`, `testimonials.ts`, `gallery.ts`, `news.ts`, `blog.ts`.

## SEO

- Unique title, meta description, og:title/og:description, og:url, canonical per route; article JSON-LD on blog posts; EducationalOrganization / LocalBusiness JSON-LD at root with no fake ratings, reviews, or numbers.
- Natural keyword usage: CBSE/ICSE coaching in Kharadi, Class 9 & 10 coaching in Pune, Science tuition, board exam preparation — no stuffing.
- Semantic HTML, single H1 per page, alt text, keyboard focus states, accessible mobile menu, lazy-loaded imagery.

## Technical notes

- TanStack Start + React + TypeScript + Tailwind v4 tokens in `src/styles.css`; shadcn components for form, accordion, tabs, dialog.
- Reusable components: Navbar, Footer, BrandMark, SectionHeading, FeatureCard, CourseCard, ResultStat, LearningJourney, TestimonialCard, GalleryGrid, CTASection, ContactForm, FloatingContactButtons, Reveal (scroll animation wrapper).
- Route files per page under `src/routes/`, with `blog.$slug.tsx` for articles; home replaces the placeholder index.
- No backend/database is enabled for this build.

## Out of scope for now

Real photos, logo, founder/faculty details, real testimonials, Google reviews, live phone/email/maps — all placeholdered and swap-ready.
