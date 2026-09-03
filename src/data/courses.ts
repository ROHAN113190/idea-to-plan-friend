export interface Course {
  slug: string;
  board: "CBSE" | "ICSE";
  className: "Class IX" | "Class X";
  title: string;
  summary: string;
  focusAreas: string[];
  benefits: string[];
  assessment: string;
}

export const courses: Course[] = [
  {
    slug: "cbse-class-9",
    board: "CBSE",
    className: "Class IX",
    title: "CBSE Class IX Science",
    summary:
      "A foundation year taught with depth — concepts built slowly and correctly so Class X never feels rushed.",
    focusAreas: [
      "Matter, atoms and molecules",
      "Motion, force and laws of motion",
      "Cell structure and tissues",
      "Work, energy and sound",
    ],
    benefits: [
      "Concept-first teaching before problem solving",
      "Small batches with individual attention",
      "Regular doubt-clearing sessions",
    ],
    assessment: "Chapter tests, periodic revision tests and detailed feedback.",
  },
  {
    slug: "cbse-class-10",
    board: "CBSE",
    className: "Class X",
    title: "CBSE Class X Science",
    summary:
      "Board-focused preparation combining conceptual clarity with disciplined answer-writing and time management.",
    focusAreas: [
      "Chemical reactions, acids, bases and metals",
      "Light, electricity and magnetic effects",
      "Life processes, control and coordination",
      "Heredity and our environment",
    ],
    benefits: [
      "Board pattern practice throughout the year",
      "Numerical and diagram-based drilling",
      "Structured revision before board exams",
    ],
    assessment: "Chapter tests, full-syllabus mock papers and answer reviews.",
  },
  {
    slug: "icse-class-9",
    board: "ICSE",
    className: "Class IX",
    title: "ICSE Class IX Science",
    summary:
      "Physics, Chemistry and Biology handled as distinct disciplines, with the detail ICSE expects from day one.",
    focusAreas: [
      "Measurements, motion and pressure",
      "Language of chemistry and chemical changes",
      "Cell biology, tissues and plant physiology",
      "Practical and diagram-based skills",
    ],
    benefits: [
      "Subject-wise depth across PCB",
      "Emphasis on precise scientific language",
      "Practice aligned to ICSE question styles",
    ],
    assessment: "Topic tests, written practice and teacher feedback.",
  },
  {
    slug: "icse-class-10",
    board: "ICSE",
    className: "Class X",
    title: "ICSE Class X Science",
    summary:
      "Complete board preparation for Physics, Chemistry and Biology with rigorous writing and derivation practice.",
    focusAreas: [
      "Force, work, machines, light and sound",
      "Mole concept, electrolysis and organic chemistry",
      "Human physiology and genetics",
      "Board-style structured answers",
    ],
    benefits: [
      "Rigorous numerical and equation practice",
      "Frequent testing with marking-scheme feedback",
      "Targeted revision plans per student",
    ],
    assessment: "Unit tests, prelims-style papers and one-to-one review.",
  },
];
