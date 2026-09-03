export interface NewsItem {
  id: string;
  title: string;
  date: string;
  body: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "batch-schedule",
    title: "New batch schedule to be announced",
    date: "Demo content",
    body: "Upcoming batch timings for CBSE and ICSE Class IX & X will be published here.",
  },
  {
    id: "test-series",
    title: "Periodic test series information",
    date: "Demo content",
    body: "Details of the chapter-wise and full-syllabus test series will be shared on this page.",
  },
  {
    id: "parent-meet",
    title: "Parent interaction sessions",
    date: "Demo content",
    body: "Dates for parent-teacher interaction sessions will be announced here.",
  },
];
