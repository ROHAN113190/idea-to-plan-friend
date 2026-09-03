export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "class-10-board-exam-preparation-guide",
    title: "A Practical Guide to Class 10 Board Exam Preparation",
    seoTitle: "Class 10 Board Exam Preparation: A Practical Study Guide",
    description:
      "A step-by-step approach to preparing for Class 10 board exams — planning, revision cycles, answer writing and exam-week routines.",
    category: "Exam Preparation",
    date: "2025-01-12",
    readingTime: "7 min read",
    intro:
      "Class 10 is the first board examination most students face, and the pressure often comes less from the syllabus than from not knowing how to approach it. A calm, structured plan beats long unfocused hours every time.",
    sections: [
      {
        heading: "Start with a syllabus map, not a timetable",
        paragraphs: [
          "Before planning study hours, list every chapter in every subject and mark each one as strong, shaky or untouched. This single page becomes the reference for the whole year and prevents the common mistake of revising what already feels comfortable.",
          "Revisit the map every month. Chapters move between categories as understanding improves, and seeing that movement is genuinely motivating.",
        ],
      },
      {
        heading: "Build revision in cycles",
        paragraphs: [
          "A chapter studied once is rarely retained until March. Plan three passes: a learning pass, a practice pass roughly two weeks later, and a rapid recall pass closer to the exams.",
        ],
        bullets: [
          "Pass 1: understand concepts and derivations",
          "Pass 2: solve questions without notes",
          "Pass 3: skim summaries, formulae and diagrams",
        ],
      },
      {
        heading: "Practise answer writing, not just problem solving",
        paragraphs: [
          "Boards reward presentation. Writing full answers under timed conditions teaches students to allocate time, structure points, label diagrams and finish the paper — skills that reading alone never develops.",
        ],
      },
      {
        heading: "Protect the basics in exam week",
        paragraphs: [
          "Sleep, meals and short breaks are part of preparation. Students who maintain a steady routine in the final week consistently recall more than those who attempt overnight marathons.",
        ],
      },
    ],
    conclusion:
      "Board preparation is a year of small consistent decisions. Map the syllabus, revise in cycles, write real answers, and keep the routine humane — the marks follow the method.",
  },
  {
    slug: "building-strong-science-fundamentals",
    title: "Why Strong Science Fundamentals Matter More Than Marks",
    seoTitle: "Building Strong Science Fundamentals in Classes 9 and 10",
    description:
      "How conceptual clarity in Class 9 and 10 Science shapes later academic performance, and practical ways to build it.",
    category: "Study Skills",
    date: "2025-02-03",
    readingTime: "6 min read",
    intro:
      "Science rewards understanding far more than memory. A student who understands why a reaction happens can answer a question they have never seen; a student who memorised the answer cannot.",
    sections: [
      {
        heading: "Fundamentals compound",
        paragraphs: [
          "Class 9 concepts reappear in Class 10, then again in higher classes and competitive examinations. Gaps do not stay small — they widen quietly until an entire chapter feels impossible.",
        ],
      },
      {
        heading: "Ask 'why' before 'how'",
        paragraphs: [
          "Encourage students to explain a concept aloud in plain language before solving problems on it. If the explanation stalls, the gap is conceptual, not procedural.",
        ],
        bullets: [
          "Explain the idea without notes",
          "Draw the process or diagram from memory",
          "Then attempt numericals or applications",
        ],
      },
      {
        heading: "Connect science to what students already see",
        paragraphs: [
          "Pressure, reflection, chemical change and life processes all appear in daily life. Anchoring an abstract definition to a familiar observation makes recall almost automatic.",
        ],
      },
    ],
    conclusion:
      "Marks are a by-product. Build understanding first and the scores become a natural consequence rather than a struggle.",
  },
  {
    slug: "cbse-vs-icse-science-what-differs",
    title: "CBSE vs ICSE Science: What Actually Differs for Students",
    seoTitle: "CBSE vs ICSE Science: Key Differences for Class 9 and 10",
    description:
      "A clear comparison of how CBSE and ICSE approach Science in Classes 9 and 10, and what each demands from students.",
    category: "Boards",
    date: "2025-02-20",
    readingTime: "6 min read",
    intro:
      "Both boards prepare students well, but they ask for different things. Knowing the difference helps students study in the way their board actually assesses.",
    sections: [
      {
        heading: "Structure of the subject",
        paragraphs: [
          "CBSE presents Science as a single integrated subject, while ICSE treats Physics, Chemistry and Biology as separate papers with individual depth and marking.",
        ],
      },
      {
        heading: "Depth and language",
        paragraphs: [
          "ICSE generally expects more detailed, precisely worded answers and greater emphasis on derivations and terminology. CBSE tends to favour concise, application-oriented responses aligned to a defined marking scheme.",
        ],
        bullets: [
          "CBSE: application and clarity within a defined scheme",
          "ICSE: detail, precision and subject-wise depth",
        ],
      },
      {
        heading: "How preparation should change",
        paragraphs: [
          "CBSE students benefit from repeated practice against the marking scheme. ICSE students benefit from writing longer answers and drilling terminology and diagrams until they are exact.",
        ],
      },
    ],
    conclusion:
      "Neither board is harder in absolute terms. The students who do well are the ones who prepare in the shape their board expects.",
  },
  {
    slug: "how-regular-tests-improve-performance",
    title: "How Regular Tests Quietly Improve Performance",
    seoTitle: "How Regular Tests Improve Student Performance",
    description:
      "Why frequent low-stakes testing improves retention, exposes gaps early and reduces exam anxiety for Class 9 and 10 students.",
    category: "Study Skills",
    date: "2025-03-08",
    readingTime: "5 min read",
    intro:
      "Tests are usually treated as measurement. They are actually one of the most effective learning tools available, provided they happen often and carry low stakes.",
    sections: [
      {
        heading: "Retrieval strengthens memory",
        paragraphs: [
          "Recalling information is a stronger learning act than re-reading it. Every short test forces retrieval, and retrieval is what makes knowledge durable.",
        ],
      },
      {
        heading: "Gaps surface early",
        paragraphs: [
          "A weak chapter discovered in September is a manageable problem. The same gap discovered in February is a crisis. Regular testing changes the timing of the discovery.",
        ],
      },
      {
        heading: "Familiarity lowers anxiety",
        paragraphs: [
          "Students who write papers all year find the board exam familiar rather than intimidating. The format, the clock and the silence stop being new variables.",
        ],
        bullets: [
          "Short chapter tests after each topic",
          "Periodic multi-chapter tests",
          "Full-length papers before the boards",
        ],
      },
    ],
    conclusion:
      "Frequent, honest, low-pressure testing turns exam day into just another practice session with a different heading.",
  },
  {
    slug: "how-parents-can-support-during-exams",
    title: "How Parents Can Support Their Child During Exams",
    seoTitle: "How Parents Can Support Children During Board Exams",
    description:
      "Practical, non-intrusive ways parents can help Class 9 and 10 students stay steady and focused through exam season.",
    category: "For Parents",
    date: "2025-03-25",
    readingTime: "5 min read",
    intro:
      "Parents influence exam outcomes far more through atmosphere than through supervision. A calm home is a measurable academic advantage.",
    sections: [
      {
        heading: "Manage the environment, not the syllabus",
        paragraphs: [
          "A quiet study space, predictable meals and consistent sleep timings remove friction. These are the areas where parental effort produces the clearest return.",
        ],
      },
      {
        heading: "Replace comparison with encouragement",
        paragraphs: [
          "Comparisons with siblings, cousins or classmates raise anxiety without raising performance. Progress against the student's own earlier attempts is the only useful benchmark.",
        ],
        bullets: [
          "Ask what was studied, not how much",
          "Acknowledge effort and consistency",
          "Keep exam talk out of meal times",
        ],
      },
      {
        heading: "Watch for genuine strain",
        paragraphs: [
          "Persistent sleeplessness, loss of appetite or withdrawal deserve attention and conversation. Reassurance early prevents a difficult exam week later.",
        ],
      },
    ],
    conclusion:
      "Steady support, realistic expectations and a calm household give students the stability they need to perform at their best.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
