import Resume from './components/PDFViewer/Jacob_Wu_Chen_Resume_10.21.26_.pdf';
import SGAImage from './pages/Projects/Images/sga.png';
import NEUDormImage from './pages/Projects/Images/neudorm.png';
import ReversiImage from './pages/Projects/Images/reversi.png';

export const RESUME_URL = Resume;

export const LINKS = {
  email: 'wu-chen.j@northeastern.edu',
  github: 'https://github.com/jakewc12',
  linkedin: 'https://www.linkedin.com/in/jacob-wu-chen-7339a624a/',
};

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proviras', href: '#proviras' },
  { label: 'Contact', href: '#contact' },
];

export const FACTS = [
  { k: 'focus', v: 'full-stack · AI/ML' },
  { k: 'languages', v: 'Python · TS · Java' },
  { k: 'education', v: 'B.S. CS (AI) · 3.8 GPA' },
  { k: 'based in', v: 'Boston · DC · Seattle' },
  { k: 'off the clock', v: 'golf · climbing · piano' },
];

export const PROVIRAS = {
  tag: 'Co-founder & CTO · currently building',
  name: 'Proviras',
  role: 'Cost optimization for AI agents',
  paragraphs: [
    'Agent teams often send every step of a workflow to the most expensive frontier model, even when a smaller, cheaper model could do the job just as well.',
    'Proviras plugs into a LangGraph agent through an SDK, captures every LLM call, and shadow-tests cheaper models against real production traffic. Teams get measured downgrade recommendations instead of guesses. I built the TypeScript SDK, which is published on npm and streams calls to an analysis dashboard.',
  ],
  stack: ['TypeScript', 'Python', 'LangGraph', 'Next.js', 'PostgreSQL'],
  links: [
    { label: 'Website', href: 'https://proviras.info/' },
    { label: 'npm SDK', href: 'https://www.npmjs.com/package/proviras-sdk' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/proviras/' },
  ],
};

export type Project = {
  kind: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    kind: 'team lead · full-stack platform',
    title: 'SGA Senate Nomination System',
    description:
      'The platform Northeastern students use to nominate and apply to become SGA senators. I led a team of 5 engineers building it, and it now has 300+ active users. Role-based access gives admins a dashboard for reviewing submissions, and Docker pipelines deploy it consistently across environments.',
    stack: ['TypeScript', 'React', 'NestJS', 'Supabase', 'Docker'],
    image: SGAImage,
    links: [],
  },
  {
    kind: 'production app · CI/CD',
    title: 'Senate Attendance Manager',
    description:
      'A Next.js app that tracks senate attendance for about 50 active users, with separate dev, staging, and production environments. I built the CI/CD pipeline that deploys to production automatically, runs database migrations, and runs integration tests.',
    stack: ['TypeScript', 'Next.js', 'Supabase', 'Vercel'],
    links: [],
  },
  {
    kind: 'machine learning · web app',
    title: 'Health Disease Detector',
    description:
      'Machine learning models that estimate how likely someone is to have heart disease or diabetes from personal health information, reaching 95% precision and accuracy. A React frontend calls RESTful Flask endpoints, and the app points users to resources from the NIH and CDC.',
    stack: ['Python', 'React', 'Flask', 'scikit-learn'],
    links: [{ label: 'Repo', href: 'https://github.com/jakewc12/Medipredictor-AI' }],
  },
  {
    kind: 'full-stack · deployed',
    title: 'NEUDorms',
    description:
      'A site where Northeastern students review on-campus housing so others can judge it fairly. It runs on a Flask REST API backed by MySQL on AWS RDS, and it collected dozens of real user reviews while it was live.',
    stack: ['Python', 'Flask', 'MySQL', 'AWS RDS'],
    image: NEUDormImage,
    links: [{ label: 'Live site', href: 'https://neudorms.com/' }],
  },
  {
    kind: 'object-oriented design',
    title: 'Reversi',
    description:
      'A two-player Reversi game packaged as a runnable JAR. It is built around Model-View-Controller and abstraction, and a thorough JUnit test suite covers it.',
    stack: ['Java', 'Swing', 'JUnit 5', 'MVC'],
    image: ReversiImage,
    links: [{ label: 'Repo', href: 'https://github.com/jakewc12/Reversi' }],
  },
];

export const EXPERIENCE = [
  {
    when: 'Jun 2026 – present',
    role: 'Full-Stack Engineer Co-op',
    company: 'MORSE Corp',
    desc: 'Built and maintained full-stack applications and services addressing operational challenges across the U.S. national security ecosystem}',
    stack: ['Python', 'FastAPI', 'React', 'Docker'],
  },
  {
    when: 'Mar 2026 – present',
    role: 'Co-founder & CTO',
    company: 'Proviras',
    desc: 'Co-founded a platform that helps AI agent teams cut LLM costs by shadow-testing cheaper models against production traffic. Built the TypeScript SDK (npm) that hooks into LangGraph flows and streams LLM calls to a dashboard.',
    stack: ['TypeScript', 'LangGraph', 'Next.js'],
  },
  {
    when: 'Jul 2025 – Dec 2025',
    role: 'Full-Stack Engineer Co-op',
    company: 'MORSE Corp',
    desc: 'Built and extended FastAPI endpoints for new full-stack features, shipped 5+ frontend features, and fixed 10+ bugs. Wrote a shell script that automates Docker production deployments so they no longer depend on a person running them.',
    stack: ['Python', 'FastAPI', 'React', 'Docker'],
  },
  {
    when: 'Jan 2024 – May 2026',
    role: 'Tech Lead & Software Developer',
    company: 'Northeastern SGA',
    desc: 'Led a team of 5 engineers building a senator nomination platform with 300+ active users. Owned the design and the Docker-based deployment.',
    stack: ['TypeScript', 'React', 'NestJS', 'Supabase'],
  },
  {
    when: 'Aug 2024 – Dec 2024',
    role: 'ML & Computer Vision Co-op',
    company: 'Air Force Research Laboratory',
    desc: 'Built a model that separates in-distribution from out-of-distribution data with 86% accuracy, using CNNs and Vision Transformers. Researched state-of-the-art segmentation and classification models.',
    stack: ['Python', 'PyTorch', 'ViT', 'CNNs'],
  },
];

export const SKILLS = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'Java', 'Kotlin', 'SQL', 'C', 'HTML/CSS'] },
  {
    group: 'Frameworks',
    items: ['React', 'Next.js', 'FastAPI', 'Flask', 'NestJS', 'PyTorch', 'NumPy', 'Playwright', 'Vitest', 'PyTest'],
  },
  { group: 'Tools', items: ['Git', 'AWS (EC2, Lambda)', 'Docker', 'Supabase', 'Vercel', 'Conda', 'Linux'] },
];
