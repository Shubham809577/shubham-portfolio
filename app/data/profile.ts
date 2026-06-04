export const profile = {
  name: "Jenish Patel",
  location: "Fairfax, VA",
  email: "jenishnitinpatel@gmail.com",
  linkedin: "https://linkedin.com/in/jenish-patel1183",
  linkedinDisplay: "linkedin.com/in/jenish-patel1183",
  // TODO: Replace with your real GitHub profile URL
  github: "https://github.com/jenishpatel11",
  githubDisplay: "github.com/jenishpatel11",
  photoSrc: "/jenish.jpg",
  resumeSrc: "/jenish-patel-resume.pdf",
  headlineRoles: [
    "Data Analyst",
    "Dashboard Builder",
    "SQL & Python Developer",
    "Storyteller with Data",
  ],
  openTo:
    "Open to Data Analyst, BI Analyst, Reporting Analyst, and Analytics roles.",
  about: {
    headline: "Turning messy data into clear business decisions.",
    lines: [
      "MS Computer Science student at George Mason University (May 2026), focused on Data Analytics, BI, SQL, Python, Power BI, Tableau, ETL pipelines, KPI reporting, and operational analytics.",
      "I enjoy building reliable datasets and dashboards that help teams move faster—with accuracy, refresh discipline, and metrics stakeholders can trust.",
      "What motivates me: taking raw, messy inputs and delivering insights that are simple, actionable, and tied to real outcomes.",
    ],
  },
  education: [
    {
      school: "George Mason University",
      degree: "MS Computer Science",
      meta: "GPA 3.4 · Expected May 2026",
      transcriptSrc: "/transcripts/gmu-transcript.pdf",
    },
    {
      school: "Silver Oak University",
      degree: "BTech Information Technology",
      meta: "GPA 3.7 · May 2024",
      transcriptSrc: "/transcripts/silver-oak-transcript.pdf",
    },
  ],
} as const;

export const kpis = [
  { label: "Records Analyzed", value: 80000, suffix: "+", note: "" },
  { label: "Data Points Processed", value: 500000, suffix: "+", note: "" },
  { label: "Queries Optimized", value: 50, suffix: "+", note: "" },
  { label: "Churn Reduced", value: 12, suffix: "%", note: "" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["SQL", "Python", "R"],
  },
  {
    title: "Visualization",
    items: [
      "Power BI (DAX, Power Query)",
      "Tableau",
      "Google Looker Studio",
      "Amazon QuickSight",
      "Excel (Pivot Tables, VLOOKUP, Power Query)",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL Pipelines",
      "Data Modeling",
      "Snowflake",
      "BigQuery",
      "AWS S3",
    ],
  },
  {
    title: "Libraries",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    title: "Data Analysis",
    items: [
      "KPI Reporting",
      "Operational Analytics",
      "Segmentation Analysis",
      "Predictive Modeling",
      "Data Validation",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "Agile"],
  },
] as const;

export const experience = [
  {
    company: "PlayPower Labs",
    companyUrl: "https://www.playpowerlabs.com/",
    role: "Data Analyst Intern",
    dates: "Sep 2023 – Apr 2024",
    bullets: [
      "Analyzed 80,000+ learner records using SQL and Python to uncover performance trends and strengthen reporting accuracy.",
      "Built Tableau and Power BI dashboards for KPI reporting across learning and operational metrics.",
      "Engineered ETL pipelines integrating 5+ data sources, improving data validation by 30%.",
    ],
  },
  {
    company: "Inextrix Technologies",
    companyUrl: "https://inextrix.com/",
    role: "Software Developer Intern",
    dates: "Sep 2022 – Aug 2023",
    bullets: [
      "Analyzed VoIP usage data to identify growth opportunities, increasing adoption by 15% and revenue by $50K.",
      "Optimized 50+ SQL queries, achieving 25% faster query execution for reporting workloads.",
      "Automated KPI reporting pipelines to improve consistency and reduce manual reporting effort.",
    ],
  },
] as const;

export type Project = {
  title: string;
  stack: string[];
  metric: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Sales & Customer Segmentation Dashboard",
    stack: ["Python", "SQL", "Power BI", "Excel"],
    metric: "500K+ Records",
    description:
      "RFM segmentation with revenue concentration insights; identified top 20% customers generating 68% of revenue.",
  },
  {
    title: "Customer Churn Prediction & Retention Dashboard",
    stack: ["Python", "SQL", "Power BI", "Scikit-learn"],
    metric: "12% Churn Reduction",
    description:
      "Prediction + retention KPI monitoring to prioritize interventions and track outcomes over time.",
  },
  {
    title: "Student Performance Prediction Dashboard",
    stack: ["Python", "SQL", "Power BI", "Scikit-learn"],
    metric: "82% Accuracy",
    description:
      "Logistic regression model with 7 key predictors highlighted for actionable academic insights.",
  },
];

