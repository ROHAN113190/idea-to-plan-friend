export interface ResultStat {
  value: string;
  label: string;
  note: string;
}

export const academicYear = "2024–25";

export const resultStats: ResultStat[] = [
  {
    value: "25+",
    label: "Students guided",
    note: `Academic year ${academicYear}`,
  },
  {
    value: "90%+",
    label: "Scored above 90%",
    note: `Academic year ${academicYear}`,
  },
  {
    value: academicYear,
    label: "Latest academic year",
    note: "Results are reported per academic year",
  },
];
