/**
 * Portfolio projects — edit this file to add your work.
 *
 * Optional fields:
 * - href: link to demo, GitHub, or write-up
 * - featured: show with stronger styling in the grid
 */
export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  /** Reserved rows for “coming soon” — replace with a real project when ready */
  isPlaceholder?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "learning-kpi",
    title: "Learning analytics KPI dashboard",
    description:
      "KPI layer for learner performance and engagement with dashboards for trends and segmentation.",
    tags: ["Tableau", "Power BI", "SQL"],
    featured: true,
  },
  {
    id: "etl-reporting",
    title: "ETL for analysis-ready reporting tables",
    description:
      "Repeatable transforms to cut manual spreadsheet work and standardize metrics.",
    tags: ["Python", "Pandas", "Snowflake"],
    featured: true,
  },
  {
    id: "voip-revenue",
    title: "VoIP revenue opportunity analysis",
    description:
      "Usage and call-pattern analysis to surface revenue opportunities and priorities.",
    tags: ["SQL", "Excel", "Analytics"],
  },
  {
    id: "sql-perf",
    title: "SQL query performance optimization",
    description:
      "Refactored high-impact queries for faster, more reliable downstream reporting.",
    tags: ["SQL", "BigQuery", "Snowflake"],
  },
  {
    id: "placeholder-1",
    title: "Your project",
    description:
      "Add a title, one-line impact, stack tags, and an optional link in portfolioProjects.ts.",
    tags: [],
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    title: "Another project",
    description:
      "Duplicate a project object above, set isPlaceholder to false, and fill in details.",
    tags: [],
    isPlaceholder: true,
  },
];
