export const profile = {
  name: "Shubham Gaikwad",
  fullName: "Shubham Ananta Gaikwad",
  location: "Fairfax, VA",
  phone: "(571) 682-9506",
  phoneHref: "tel:+15716829506",
  email: "sgaikwa4@gmu.edu",
  linkedin: "https://linkedin.com/in/shubham-gaikwad07",
  linkedinDisplay: "linkedin.com/in/shubham-gaikwad07",
  photoSrc: "/shubham-gaikwad.png",
  resumeSrc: "/assets/documents/resume/shubham-gaikwad-resume.pdf",
  headlineRoles: [
    "Civil & Infrastructure Engineer",
    "Project Manager",
    "Structural Designer",
    "Bridge Engineer",
  ],
  openTo:
    "Open to entry-level Structural Engineer, Bridge Engineer, and Civil Infrastructure roles. FE Civil candidate (2026).",
  about: {
    headline: "Structural design, analysis, and construction coordination for steel and concrete infrastructure.",
    lines: [
      "Structural Engineering graduate from George Mason University with 3+ years of experience in structural design, analysis, and construction coordination for steel and reinforced concrete infrastructure.",
      "Applied structural modeling and analysis using RAM Structural System, SAP2000, STAAD.Pro, ETABS, MIDAS Civil, Revit, AutoCAD, and LARSA 4D in accordance with AISC 360, ASCE 7-22, AASHTO LRFD, IBC 2021, and ACI standards.",
      "Experienced in large-scale infrastructure projects exceeding $100M through structural analysis, field execution, technical documentation, and coordination with architects, consultants, contractors, and clients.",
    ],
  },
  education: [
    {
      school: "George Mason University",
      degree: "M.S. Civil & Infrastructure Engineering",
      meta: "Fairfax, VA · Aug 2024 – May 2026",
    },
    {
      school: "University of Mumbai",
      degree: "B.E. Civil Engineering",
      meta: "Mumbai, India · Aug 2019 – May 2022",
    },
  ],
} as const;

/**
 * Academic Records / Transcripts
 *
 * Place your PDF files here (paths are relative to `public/`):
 *   public/assets/documents/transcripts/gmu-transcript.pdf
 *   public/assets/documents/transcripts/bachelors-transcript.pdf
 *
 * Update `href` below if you use different filenames.
 */
export const transcripts = [
  {
    label: "View GMU Transcript",
    href: "/assets/documents/transcripts/gmu-transcript.pdf", // placeholder
  },
  {
    label: "View Bachelor's Transcript",
    href: "/assets/documents/transcripts/bachelors-transcript.pdf", // placeholder
  },
] as const;

export const kpis = [
  { label: "Project Value", value: 100, suffix: "M+", note: "" },
  { label: "Sq. Ft. Delivered", value: 850, suffix: "K+", note: "" },
  { label: "Defect Reduction", value: 15, suffix: "%", note: "" },
  { label: "Weeks Ahead of Schedule", value: 4, suffix: "", note: "" },
] as const;

export const skillGroups = [
  {
    title: "Engineering Expertise",
    items: [
      "Structural Design",
      "Bridge Substructure Design",
      "Seismic Analysis",
      "Soil-Structure Interaction",
      "Bridge Load Analysis",
      "Prestressed Concrete Design",
      "Steel Member Sizing",
      "Buckling Analysis",
      "Finite Element Analysis",
      "Foundation Design",
      "Structural Calculations",
      "Construction Documentation",
    ],
  },
  {
    title: "Software & Tools",
    items: [
      "RAM Structural System",
      "SAP2000",
      "STAAD.Pro",
      "ETABS",
      "MIDAS Civil",
      "Revit",
      "AutoCAD",
      "LARSA 4D",
      "Primavera P6",
      "Microsoft Project",
      "Microsoft Excel",
      "Microsoft Outlook",
      "QGIS",
    ],
  },
  {
    title: "Project Management",
    items: [
      "Construction Scheduling",
      "WBS Development",
      "Critical Path Method (CPM)",
      "Project Coordination",
      "Site Inspections",
      "QA/QC",
      "RFIs",
      "Submittals",
      "Cost Estimation",
      "Risk Assessment",
      "Infrastructure Scheduling",
      "Scheduling & Sequencing",
      "Project Tracking",
      "Resource Coordination",
    ],
  },
  {
    title: "Codes & Standards",
    items: [
      "AISC 360",
      "ASCE 7-22",
      "AASHTO LRFD",
      "IBC 2021",
      "ACI 209R",
      "Seismic Design Standards",
      "Bridge Design Codes",
    ],
  },
] as const;

export const experience = [
  {
    company: "Big City Project Pvt. Ltd.",
    role: "Jr. Site Engineer",
    dates: "Jun 2022 – Aug 2024",
    bullets: [
      "Managed execution of a $100M+ infrastructure project covering 850,000 sq. ft., delivering 4 weeks ahead of schedule.",
      "Directed quality control for 15+ subcontractors, achieving a 15% reduction in defects against specifications.",
      "Facilitated field implementation of reinforced concrete and steel structural components per approved drawings.",
      "Liaised with architects, consultants, contractors, and clients to align construction with design intent and regulations.",
    ],
  },
  {
    company: "Big City Project Pvt. Ltd.",
    role: "Intern",
    dates: "Nov 2021 – May 2022",
    bullets: [
      "Improved coordination accuracy by 15% through material testing and surveying of structural components.",
      "Resolved 20+ drawing and execution challenges by collaborating with contractors, consultants, and site engineers.",
      "Generated 50+ construction documents ensuring adherence to project specifications and coordination standards using AutoCAD.",
      "Assisted in preparation of site progress reports, quantity tracking, and project documentation to support construction coordination activities.",
      "Supported project engineers in reviewing drawings, monitoring contractor activities, and maintaining compliance with safety and quality standards.",
    ],
  },
] as const;

/**
 * Certifications
 *
 * Place certificate PDFs here (paths are relative to `public/`):
 *   public/assets/documents/certificates/general-superstructure-design-considerations.pdf
 *   public/assets/documents/certificates/lrfd-steel-i-girder-details-design.pdf
 *   public/assets/documents/certificates/prestressed-concrete-girder-topics.pdf
 *   public/assets/documents/certificates/lrfd-bridge-elements-decks-bearings.pdf
 *
 * To add more certificates, copy a card object below and set `pdfSrc` to your file path.
 */
export const certifications = [
  {
    title: "General Superstructure Design Considerations",
    issuer: "National Highway Institute (NHI)",
    meta: "Nov 2024",
    pdfSrc:"/assets/documents/certificates/general-superstructure-design-considerations.pdf", // placeholder
  },
  {
    title: "LRFD Steel I-Girder Details Design",
    issuer: "National Highway Institute (NHI)",
    meta: "Nov 2024",
    pdfSrc: "/assets/documents/certificates/lrfd-steel-i-girder-details-design.pdf", // placeholder
  },
  {
    title: "Prestressed Concrete Girder Topics",
    issuer: "National Highway Institute (NHI)",
    meta: "Dec 2024",
    pdfSrc: "/assets/documents/certificates/prestressed-concrete-girder-topics.pdf", // placeholder
  },
  {
    title: "LRFD Design of Common Bridge Elements: Decks and Bearing",
    issuer: "National Highway Institute (NHI)",
    meta: "Dec 2024",
    pdfSrc:
      "/assets/documents/certificates/lrfd-bridge-elements-decks-bearings.pdf", // placeholder
  },
] as const;

export type Project = {
  title: string;
  stack: string[];
  metric: string;
  description: string;
  hideViewDetails?: boolean;
};

export const projects: Project[] = [
  {
    title: "Steel Structure Design – STAAD.Pro",
    stack: ["STAAD.Pro", "AISC 360", "ASCE 7-22", "Steel Design", "Buckling Analysis"],
    metric: "10% Cost Savings",
    description:
      "Developed governing load combinations per ASCE 7 LRFD and verified member capacity. Evaluated structural stability and buckling behavior, optimizing steel member sizing.",
  },
  {
    title: "Prestressed Beam Design with Time Effects – LARSA 4D",
    stack: ["LARSA 4D", "Prestressed Concrete", "ACI 209R", "AASHTO LRFD"],
    metric: "Long-Term Serviceability",
    description:
      "Modeled prestressed concrete beams including creep, shrinkage, and relaxation effects per ACI 209R. Conducted staged construction analysis per ASCE 7 and AASHTO LRFD.",
  },
  {
    title: "4-Story Mixed-Use Building Design – RAM & Revit",
    stack: ["RAM Structural System", "Revit", "IBC 2021", "AISC 360", "ASCE 7-22"],
    metric: "IBC 2021 Compliant",
    description:
      "Designed steel-framed gravity and lateral systems using RAM Structural System and Revit. Analyzed wind and seismic lateral loads using ASCE 7 load combinations.",
  },
  {
    title: "Bridge Substructure Design – MIDAS Civil",
    stack: [
      "MIDAS Civil",
      "AASHTO LRFD",
      "Bridge Substructure",
      "Foundation Design",
      "Soil-Structure Interaction",
    ],
    metric: "12% Material Reduction",
    description:
      "Designed pile foundations and pier caps per AASHTO LRFD for axial and lateral load demands. Conducted soil-structure interaction modeling, optimizing pile layout.",
  },
  {
    title: "Urban Waterlogging & Drainage Remedial – QGIS",
    stack: ["QGIS", "Drainage Design", "Stormwater", "Spatial Analysis"],
    metric: "30% Flood Reduction",
    description:
      "Mapped and analyzed drainage patterns across 50+ sq. km flood-prone urban areas. Proposed sustainable stormwater solutions projected to reduce flood frequency.",
    hideViewDetails: true,
  },
];
