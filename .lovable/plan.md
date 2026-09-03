# Joshi's Academy — Premium Website Implementation Plan (Revised)

A complete, multi-page marketing website for Joshi's Academy (Kharadi, Pune) — CBSE & ICSE Science coaching for Classes IX & X. Conversion-focused, SEO-ready, zero invented facts.

## Note on the tech stack request

Next.js cannot be used here — this platform builds only on its React/TypeScript full-stack framework (TanStack Start with file-based routing), and swapping the framework would break the project. Everything you asked Next.js for is delivered with direct equivalents:

| Your requirement | How it's delivered |
| --- | --- |
| App Router routes | File-based routes: `/`, `/courses`, `/about`, `/results`, `/gallery`, `/news`, `/blog`, `/blog/$slug`, `/contact` — each directly URL-accessible |
| Server Components by default | Server-side rendering by default; interactivity isolated to small client components |
| Metadata API | Per-route `head()` with title, description, canonical, OG, Twitter, JSON-LD |
| `next/image` | Responsive `<img>` with width/height, `loading="lazy"`, `decoding="async"` on below-fold imagery |
| Custom `not-found` page | Dedicated branded 404 (not a homepage redirect) |
| Deploy independently | Standard Vite + React + TypeScript project, no Lovable-specific runtime; secrets via env vars |

TypeScript, Tailwind CSS, shadcn/ui, and Lucide React are all used exactly as requested.

## Design system

- Semantic tokens in `src/styles.css`: deep navy/midnight primary, warm gold accent (sparing — stats, key CTAs, rules), soft ivory and white backgrounds, light blue and soft gray supports. No hardcoded colors in components.
- Typography: elegant serif headings + clean humanist sans body, loaded via a font `<link>` in the root route.
- Motion: subtle scroll reveal, gentle hover lift, restrained shadows and gradients. No bounce, no decoration overload.
- Text-based BrandMark ("Joshi's Academy" / "Gyan Ki Varsha") as a swappable component for the future official logo.
- Imagery: abstract academic visuals, books, geometric motifs, tasteful placeholders — never captioned as real academy photos. Gallery items visibly marked as demo placeholders.

## Pages

1. **`/` Home** — sticky nav + Enquire Now; hero ("Where Strong Fundamentals Shape Exceptional Futures.") with dual CTAs and three trust ticks; trust strip; About intro; Why Joshi's (4 feature cards); Programs (4 course cards); Results (25+ / 90%+ / 2024–25 with academic-year note); Learning Journey (Learn → Understand → Practice → Test → Improve → Excel); Testimonials placeholder ("Student/Parent feedback will be featured here."); Gallery preview; final conversion CTA; premium footer.
2. **`/courses`** — CBSE IX/X, ICSE IX/X with focus areas, benefits, assessment approach, per-program enquiry CTA.
3. **`/about`** — philosophy, how we teach, why small batches matter, our commitment; elegant placeholder block for founder/faculty/history (no invented names).
4. **`/results`** — the verified 2024–25 information only, presented professionally and clearly tied to the academic year; structure ready for future years.
5. **`/gallery`** — category-filtered grid (Classroom Moments, Learning Sessions, Student Activities, Academy Events, Academic Achievements), data-driven, placeholders labelled.
6. **`/news`** — announcement cards clearly labelled as demo content, easy to update.
7. **`/blog` + `/blog/$slug`** — index plus 5 original full articles (Class 10 board prep, building science fundamentals, CBSE vs ICSE, how regular tests help, how parents can support during exams). Each: unique SEO title, meta description, slug, canonical, OG metadata, BlogPosting JSON-LD, single H1 with proper H2/H3 hierarchy, intro, detailed sections, practical tips, conclusion, category, date, featured-image placeholder, related articles, enquiry CTA. Educational content only — no claims about the academy.
8. **`/contact`** — "Let's Begin Your Child's Academic Journey.", contact info block, enquiry form.
9. **404** — branded not-found page with friendly heading, explanation, Home button, and contact CTA.

Global: floating WhatsApp + Call buttons (disabled/clearly-placeholder until real numbers exist).

## Contact placeholders (no fake data)

`src/config/site.ts` holds every editable business value:

- Phone: `+91 XXXXX XXXXX`
- Email: `info@REPLACE-WITH-OFFICIAL-EMAIL.com`
- WhatsApp: `[WHATSAPP NUMBER TO BE ADDED]`
- Address: `Kharadi, Pune, Maharashtra, India — [FULL ADDRESS TO BE ADDED]`
- Google Maps: `[GOOGLE MAPS LINK TO BE ADDED]`
- Social links: `[OFFICIAL SOCIAL LINKS TO BE ADDED]`
- Enquiry webhook URL/key reference

Placeholder values render as visibly unfinished text, never as live `tel:`/`mailto:`/map links, so nothing is presented as real business information.

## Enquiry form behaviour

Fields: Student Name, Parent Name, Mobile, Email, Class, Board, Program Interested In, Message. Client-side validation (required fields, Indian mobile format, email format) with accessible, `aria-describedby`-linked messages; submit disabled with a loading state while sending.

Submission POSTs to the configurable webhook. Success state shows **only** after a confirmed successful response. On failure or when no webhook is configured, it shows: "Unable to submit your enquiry right now. Please try contacting Joshi's Academy by phone or WhatsApp." Until you supply the real endpoint the form is clearly development-ready and never claims delivery. The webhook secret is read from an environment variable server-side, never embedded in client code.

## Data architecture

Content lives apart from UI in `src/data/`: `courses.ts`, `results.ts`, `testimonials.ts`, `gallery.ts`, `news.ts`, `blog.ts`, all typed with explicit interfaces. Components consume this data; no content duplicated inside pages.

## Components

Navbar, Footer, BrandMark, SectionHeading, FeatureCard, CourseCard, ResultStat, LearningJourney, TestimonialCard, GalleryGrid, CTASection, ContactForm, FloatingContactButtons, Reveal.

## SEO

- Unique title, meta description, canonical, og:title/og:description/og:url, Twitter card per route; `og:type: article` on posts.
- Structured data: EducationalOrganization + LocalBusiness at root (only verified fields — no phone, ratings, reviews, or aggregate ratings), BlogPosting per article.
- `public/robots.txt` and `public/sitemap.xml` covering all public routes.
- Natural keyword usage (CBSE/ICSE coaching in Kharadi, Class 9 & 10 coaching in Pune, Science tuition, board exam preparation) — no stuffing.
- Semantic HTML, one H1 per page, descriptive alt text, clean URLs.

## Performance & accessibility

SSR-first with minimal client JS, lazy-loaded below-fold images with explicit dimensions, optimized font loading, lightweight CSS-driven animation, no heavy dependencies. Keyboard navigation, visible focus rings, accessible mobile menu and form labels, adequate contrast, ARIA only where needed. Mobile-first layouts designed per breakpoint, not shrunken desktop.

## QA before completion

Every route and nav link loads; all CTAs work; no TypeScript, console, or import errors; no missing images; no horizontal overflow on mobile; form validation and success/error states behave correctly; blog article routes resolve; metadata present on every page; 404 works; no fake business information, testimonials, reviews, or unsupported claims anywhere.

## Out of scope for now

Real photos, official logo, founder/faculty details, real testimonials, Google reviews, live phone/email/maps — all placeholdered and swap-ready.
