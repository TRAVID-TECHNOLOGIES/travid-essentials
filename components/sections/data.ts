export type ServiceDetail = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  detailIntro: string;
  highlights: string[];
  deliverables: ServiceDetail[];
};

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    description:
      "Full-cycle design and development for SaaS platforms, internal tools, and revenue-driving apps.",
    detailIntro:
      "We build digital products from roadmap to production with clear architecture, measurable outcomes, and fast release cycles.",
    highlights: [
      "Discovery workshops to align product goals and technical feasibility",
      "Frontend and backend delivery with reusable design systems",
      "Release planning focused on value, speed, and maintainability",
    ],
    deliverables: [
      {
        title: "Product Architecture",
        description:
          "Domain models, module boundaries, and API contracts that keep delivery predictable.",
      },
      {
        title: "Feature Delivery",
        description:
          "Production-ready features shipped in milestones with QA, observability, and rollout controls.",
      },
      {
        title: "Team Enablement",
        description:
          "Documentation and engineering handover so your internal team can scale independently.",
      },
    ],
  },
  {
    slug: "backend-apis",
    title: "Backend & APIs",
    description:
      "High-throughput services, event-driven architecture, and secure data layers built for scale.",
    detailIntro:
      "Our backend teams design resilient service foundations that support complex business workflows and high concurrency.",
    highlights: [
      "REST and event-driven systems with clear service ownership",
      "Database modeling for reliability, performance, and growth",
      "Security controls for auth, rate limiting, and audit trails",
    ],
    deliverables: [
      {
        title: "Service Design",
        description:
          "Modular backend architecture with fault tolerance and clear scaling paths.",
      },
      {
        title: "API Platform",
        description:
          "Versioned, documented APIs with testing pipelines and contract validation.",
      },
      {
        title: "Data Reliability",
        description:
          "Replication, backups, and migration strategies that protect critical data.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Reliable, cost-aware cloud infrastructure with CI/CD, observability, and zero-downtime releases.",
    detailIntro:
      "We engineer cloud environments that are secure, observable, and tuned for dependable delivery velocity.",
    highlights: [
      "Automated CI/CD pipelines with quality gates",
      "Monitoring, alerting, and incident response playbooks",
      "Infrastructure cost optimization without compromising resilience",
    ],
    deliverables: [
      {
        title: "Cloud Foundation",
        description:
          "Production-grade cloud architecture with networking, IAM, and workload isolation.",
      },
      {
        title: "DevOps Automation",
        description:
          "Deployment automation, environment parity, and rollback-safe release patterns.",
      },
      {
        title: "Operational Excellence",
        description:
          "SLI/SLO dashboards, runbooks, and reliability reviews for sustained uptime.",
      },
    ],
  },
  {
    slug: "data-ai-systems",
    title: "Data & AI Systems",
    description:
      "Analytics pipelines, automation layers, and AI integrations that unlock faster decisions.",
    detailIntro:
      "We connect data engineering with practical AI capabilities to reduce manual workload and improve decision quality.",
    highlights: [
      "ETL/ELT workflows for clean, trusted analytics data",
      "AI-assisted workflows integrated into existing products",
      "Governance patterns for model outputs and data privacy",
    ],
    deliverables: [
      {
        title: "Data Pipelines",
        description:
          "Ingestion, transformation, and warehouse pipelines designed for consistent reporting.",
      },
      {
        title: "AI Integrations",
        description:
          "Use-case-driven automation and LLM integrations with guardrails and monitoring.",
      },
      {
        title: "Decision Systems",
        description:
          "Dashboards and insight layers that turn operational data into action.",
      },
    ],
  },
  {
    slug: "enterprise-modernization",
    title: "Enterprise Modernization",
    description:
      "Legacy platform upgrades, performance tuning, and risk-managed migrations.",
    detailIntro:
      "Our modernization programs reduce operational risk while progressively upgrading business-critical systems.",
    highlights: [
      "Incremental migration strategy to minimize downtime",
      "Performance and reliability hardening for legacy workloads",
      "Structured delivery plans aligned with business continuity",
    ],
    deliverables: [
      {
        title: "Assessment & Roadmap",
        description:
          "Technical due diligence and phased modernization plan with milestones.",
      },
      {
        title: "Migration Execution",
        description:
          "Controlled data and workload migration with compatibility validation.",
      },
      {
        title: "Performance Tuning",
        description:
          "Profiling and optimization to improve throughput, response time, and stability.",
      },
    ],
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    description:
      "Threat modeling, SOC2-ready workflows, and secure-by-default architecture.",
    detailIntro:
      "We embed security into architecture and delivery so compliance and resilience become part of day-to-day engineering.",
    highlights: [
      "Threat modeling and risk prioritization for core systems",
      "Security controls integrated into CI/CD and runtime",
      "Audit-ready practices for enterprise compliance programs",
    ],
    deliverables: [
      {
        title: "Security Baseline",
        description:
          "Identity, secrets, encryption, and network policies aligned to best practices.",
      },
      {
        title: "Compliance Workflow",
        description:
          "Evidence capture, policy mapping, and controls for SOC2 and similar frameworks.",
      },
      {
        title: "Continuous Assurance",
        description:
          "Ongoing vulnerability management, monitoring, and response readiness.",
      },
    ],
  },
];

export const whyUs = [
  {
    title: "Architecture-led delivery",
    description:
      "Every engagement starts with system design, ensuring scalability, reliability, and clarity before build.",
  },
  {
    title: "Senior-only teams",
    description:
      "You work with experienced engineers who have shipped enterprise systems and know how to de-risk delivery.",
  },
  {
    title: "Outcome-focused",
    description:
      "We measure success by business impact: automation gains, revenue lift, and time-to-market.",
  },
  {
    title: "Transparency by default",
    description:
      "Weekly demos, live roadmaps, and clear reporting keep every stakeholder aligned.",
  },
];

export const testimonials = [
  {
    quote:
      "Travid helped us launch Adala Badali from idea to production with a stable booking flow and real-time rental availability.",
    name: "Neha R.",
    title: "Product Lead, Adala Badali",
  },
  {
    quote:
      "Dropbazaar scaled faster after Travid rebuilt our order sync and vendor automation. Manual operations were reduced significantly.",
    name: "Karan S.",
    title: "Operations Head, Dropbazaar",
  },
  {
    quote:
      "They designed a clean architecture for our internal platform and gave our team a roadmap we could execute with confidence.",
    name: "Mitali P.",
    title: "Founder, OrbitNest Systems",
  },
];

export const stats = [
  { label: "Production systems launched", value: "120+" },
  { label: "Average performance lift", value: "3.6x" },
  { label: "Senior engineering experience", value: "4-6 yrs" },
];

export const techStack = [
  { name: "Angular", file: "/tech/angular.svg" },
  { name: "Next.js", file: "/tech/nextjs.svg" },
  { name: "React", file: "/tech/react.svg" },
  { name: "TypeScript", file: "/tech/typescript.svg" },
  { name: "Spring Boot", file: "/tech/spring-boot.svg" },
  { name: "Node.js", file: "/tech/node.svg" },
  { name: "AWS", file: "/tech/aws.svg" },
  { name: "PostgreSQL", file: "/tech/postgres.svg" },
  { name: "Kubernetes", file: "/tech/kubernetes.svg" },
];

export const clientLogos = ["Adala Badali", "Dropbazaar", "OrbitNest Systems"];
