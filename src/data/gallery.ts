export type GalleryCategory =
  | "Classroom Moments"
  | "Learning Sessions"
  | "Student Activities"
  | "Academy Events"
  | "Academic Achievements";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  caption: string;
}

export const galleryCategories: GalleryCategory[] = [
  "Classroom Moments",
  "Learning Sessions",
  "Student Activities",
  "Academy Events",
  "Academic Achievements",
];

export const galleryItems: GalleryItem[] = galleryCategories.flatMap(
  (category, ci) =>
    [1, 2, 3].map((n) => ({
      id: `${ci}-${n}`,
      category,
      caption: `${category} — placeholder ${n}`,
    })),
);
