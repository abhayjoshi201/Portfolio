// ─────────────────────────────────────────────
// Portfolio Data — Abhay Joshi
// ─────────────────────────────────────────────

export const Bio = {
  name: "Abhay Joshi",
  roles: [
    "Backend & Infrastructure Engineer",
    "Distributed Systems Engineer",
    "Cloud-Native Architect",
    "ML Systems Engineer",
  ],
  description:
    "Backend and infrastructure engineer experienced in distributed systems, AWS, Kubernetes, Terraform, and ML/LLM deployment pipelines. Owns production systems end-to-end — from architecture design and CI/CD to monitoring, reliability, and performance optimization.",
  github: "https://github.com/abhayjoshi201",
  resume:
    "https://drive.google.com/file/d/1y4LqXuTjg9UAlmSRyZekdzuc4y5W77Py/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/abhay-joshi-/",
  twitter: "https://x.com/abhayjoshi1104",
  email: "abhayjoshisensie@gmail.com",
  medium: "https://medium.com/@abhayjoshi201",
  title: "Founding / Backend & Infrastructure Engineer",
  headline: "Building and operating production-grade distributed systems.",
  subheading:
    "I design scalable backend architectures, manage cloud-native infrastructure, and deploy ML systems from prototype to production.",
};

export const skills = [
  {
    title: "Backend & Systems",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "REST APIs", icon: "https://img.icons8.com/nolan/64/api-settings.png" },
      { name: "Distributed Systems", icon: "https://img.icons8.com/nolan/64/cloud-sync--v1.png" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes (CKA)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Helm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Azure (AZ-104)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
    ],
  },
  {
    title: "Data & Caching",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "ML Systems",
    skills: [
      { name: "RAG Pipelines", icon: "https://img.icons8.com/nolan/64/artificial-intelligence.png" },
      { name: "LLM Serving", icon: "https://img.icons8.com/nolan/64/brain.png" },
      { name: "AWS Bedrock", icon: "https://img.icons8.com/nolan/64/amazon-web-services.png" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Software Engineer",
    company: "CloudKeeper",
    date: "Jan 2025 – Present",
    location: "Noida, India",
    desc: "Owning production infrastructure and backend systems. Building GPU-based ML inference workloads on AWS EKS and designing scalable backend services.",
    points: [
      "Ran GPU-based ML inference workloads on AWS EKS using KAI and HAMi — managed GPU node groups, container resource limits, and service scaling under load",
      "Designed scalable backend systems using Python (Django) and REST APIs",
      "Owned production infrastructure, monitoring, deployments, and incident recovery",
      "Built disaster recovery automation using Go, Redis, and EFS — reduced RTO from 2 hours to 15 minutes",
      "Designed and deployed AI-powered RAG pipelines using AWS Bedrock integrated with Zendesk",
      "Took systems from prototype to production in collaboration with stakeholders",
    ],
    skills: ["AWS EKS", "Python", "Django", "Go", "Redis", "AWS Bedrock", "Docker", "Kubernetes"],
  },
  {
    id: 1,
    role: "Open Source Contributor",
    company: "AfterQuery (YC-backed)",
    date: "May 2024 – Jan 2025",
    location: "Remote",
    desc: "Provisioned infrastructure and built CI/CD pipelines for a YC-backed startup. Ensured reproducible, production-ready environments.",
    points: [
      "Provisioned AWS infrastructure using Terraform (Infrastructure as Code)",
      "Built CI/CD pipelines with GitLab, Jenkins, and ArgoCD",
      "Deployed Dockerized services on Kubernetes with rollback-safe releases",
      "Ensured reproducible and production-ready deployment environments",
    ],
    skills: ["Terraform", "AWS", "GitLab CI", "Jenkins", "ArgoCD", "Docker", "Kubernetes"],
  },
];

export const projects = [
  {
    id: 0,
    title: "CodeRoom",
    subtitle: "Distributed Real-Time Coding Platform",
    description:
      "Real-time distributed system under concurrency pressure. Built a collaborative coding platform using MERN + WebRTC with backend services optimized for low-latency communication.",
    tags: ["MERN", "WebRTC", "Docker", "AWS EKS", "CI/CD"],
    highlights: [
      "Built distributed real-time collaboration with WebRTC",
      "Dockerized and deployed on AWS EKS with CI/CD pipelines",
      "30% latency reduction through backend optimizations",
    ],
    github: "https://github.com/abhayjoshi201",
    category: "distributed-systems",
  },
  {
    id: 1,
    title: "Live Solve",
    subtitle: "ML Inference & Backend Systems",
    description:
      "System for solving hand-drawn math problems using OpenCV + Gemini Pro. Low-latency Flask/FastAPI services deployed on AWS ECS (Fargate) with streaming input.",
    tags: ["OpenCV", "Gemini Pro", "FastAPI", "AWS ECS", "Fargate"],
    highlights: [
      "Low-latency Flask/FastAPI inference services",
      "Deployed on AWS ECS (Fargate) with streaming input",
      "85%+ accuracy under real-time workloads",
    ],
    github: "https://github.com/abhayjoshi201",
    category: "ml-systems",
  },
  {
    id: 2,
    title: "Detector.ai",
    subtitle: "ML Model Serving",
    description:
      "Scalable model-serving pipeline for image classification and NLP inference. Containerized ML models handling 10K+ samples with 90%+ accuracy.",
    tags: ["ML", "Docker", "NLP", "Image Classification", "Model Serving"],
    highlights: [
      "Containerized ML models for classification & NLP",
      "Handled 10K+ samples with 90%+ accuracy",
      "Designed scalable model-serving pipeline",
    ],
    github: "https://github.com/abhayjoshi201",
    category: "ml-systems",
  },
];

export const achievements = [
  {
    title: "ICPC 2024 Regionalist",
    detail: "AIR 333 (Qualifiers) · AIR 96 (Regionals)",
    icon: "🏆",
  },
  {
    title: "LeetCode Knight",
    detail: "Top 1% · Max Rating 2068",
    icon: "⚔️",
  },
  {
    title: "Amazon ML Summer School",
    detail: "Cleared 2023 & 2024 cohorts",
    icon: "🎓",
  },
  {
    title: "FreeCAD Open Source",
    detail: "Active contributor — C++ core components",
    icon: "🔧",
  },
];

export const education = [
  {
    school: "Graphic Era Hill University",
    degree: "B.Tech in Computer Science & Engineering",
    date: "2021 – 2025",
    grade: "81.2%",
  },
];

export const philosophy = [
  { principle: "Reliability over hype", icon: "🛡️" },
  { principle: "Measure everything", icon: "📊" },
  { principle: "Automate recovery", icon: "🔄" },
  { principle: "Design for failure", icon: "⚠️" },
  { principle: "Ship fast, stabilize faster", icon: "🚀" },
];

export const systemsArchitecture = [
  { label: "Clients", sub: "Web / Mobile / API" },
  { label: "API Gateway", sub: "Load Balancer · Rate Limiting" },
  { label: "Backend Services", sub: "Django · FastAPI · Go" },
  { label: "Kubernetes", sub: "EKS · Helm · ArgoCD" },
  { label: "AWS Cloud", sub: "EC2 · ECS · S3 · RDS" },
  { label: "Monitoring", sub: "CloudWatch · Prometheus" },
  { label: "ML Inference", sub: "Bedrock · GPU Nodes · RAG" },
];
