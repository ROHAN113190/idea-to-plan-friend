export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

/** Intentionally empty: no invented feedback. */
export const testimonials: Testimonial[] = [];

export const testimonialPlaceholder =
  "Student and parent feedback will be featured here.";
