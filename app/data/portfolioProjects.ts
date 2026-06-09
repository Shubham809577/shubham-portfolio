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
    id: "steel-staad",
    title: "Steel structure design – STAAD.Pro",
    description:
      "Load combinations per ASCE 7 LRFD with optimized steel member sizing and buckling analysis.",
    tags: ["STAAD.Pro", "AISC 360", "ASCE 7-22"],
    featured: true,
  },
  {
    id: "prestressed-larsa",
    title: "Prestressed beam design – LARSA 4D",
    description:
      "Time-dependent effects modeling with staged construction analysis per ACI 209R and AASHTO LRFD.",
    tags: ["LARSA 4D", "Prestressed Concrete", "ACI 209R"],
    featured: true,
  },
  {
    id: "mixed-use-ram",
    title: "4-story mixed-use building – RAM & Revit",
    description:
      "Steel-framed gravity and lateral systems designed per IBC 2021 with wind and seismic load analysis.",
    tags: ["RAM Structural System", "Revit", "IBC 2021"],
  },
  {
    id: "bridge-midas",
    title: "Bridge substructure design – MIDAS Civil",
    description:
      "Pile foundations and pier caps with soil-structure interaction modeling per AASHTO LRFD.",
    tags: ["MIDAS Civil", "AASHTO LRFD", "Foundation Design"],
  },
  {
    id: "drainage-qgis",
    title: "Urban waterlogging remedial – QGIS",
    description:
      "Drainage pattern analysis and stormwater solutions for flood-prone urban areas.",
    tags: ["QGIS", "Drainage Design", "Stormwater"],
  },
];
