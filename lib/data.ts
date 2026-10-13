export const profile = {
  name: "Julker Nayeen Karim",
  role: "Software Developer",
  tagline:
    "Full-stack developer building dependable web applications, thoughtful user experiences, and AI-powered tools.",
  location: "Dhaka, Bangladesh",
  email: "julkernkarim@gmail.com",
  github: "https://github.com/jnkarim",
  linkedin: "https://www.linkedin.com/in/jnkarim/",
  university: "Ahsanullah University of Science and Technology",
  degree: "B.Sc. in Computer Science and Engineering",
  eduRange: "Sep 2022 - Expected Nov 2026",
  cgpa: "3.60 / 4.00",
  cv: "/Julker_Nayeen_Karim_CV.pdf",
};

export const summary =
  "Final-year CSE student at AUST with one year of professional software development experience. I build production web applications with React, Next.js, TypeScript, and Express.js, and enjoy designing APIs, working with databases, and integrating AI into useful products.";

export const experience = [
  {
    role: "Software Developer",
    org: "EZ Simple Consulting",
    location: "Remote, USA-based startup",
    period: "May 2025 - Apr 2026",
    points: [
      "Developed and maintained production web applications for a gaming platform and an online voting system.",
      "Built responsive, reusable interfaces using Next.js, React, and TypeScript.",
      "Collaborated with a distributed team to maintain consistent code quality and shared architecture.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tag: string;
  price: string;
  blurb: string;
  cover?: string;
  stack: string[];
  points: string[];
  links: { label: "Live Demo" | "GitHub"; href: string }[];
  badge?: string;
  sourceRepo?: string;
};

export const featuredProjects: Project[] = [
  {
    id: "fixmydhaka",
    name: "FixMyDhaka",
    tag: "Civic Tech + AI",
    price: "LangGraph",
    cover: "/projects/fixmydhaka.png",
    blurb:
      "AI-assisted civic reporting platform with location-based submissions, interactive maps, and issue tracking.",
    stack: ["React", "FastAPI", "LangGraph", "Gemini", "SQLite", "Leaflet"],
    points: [
      "Built map-based reports with image uploads and persistent issue tracking.",
      "Integrated Gemini classification, RAG, and jurisdiction resolution for relevant authorities.",
      "Created geospatial analytics and AI-generated complaint drafts.",
    ],
    links: [
      { label: "Live Demo", href: "https://fixmydhaka.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jnkarim/FixMyDhaka" },
    ],
    sourceRepo: "FixMyDhaka",
    badge: "FEATURED",
  },
  {
    id: "dhakateslapool",
    name: "Dhaka Tesla Pool",
    tag: "Full-stack Platform",
    price: "Next.js",
    cover: "/projects/dhakateslapool.png",
    blurb:
      "Ride-pooling platform with separate passenger and driver experiences, route matching, and seat management.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Docker"],
    points: [
      "Designed passenger and driver authentication with role-specific dashboards.",
      "Enforced seat capacity and fare calculation through transaction-backed operations.",
      "Built REST APIs with JWT, authorization checks, and ride lifecycle transitions.",
    ],
    links: [
      { label: "Live Demo", href: "https://dhaka-tesla-pool-dun.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jnkarim/Dhaka-Tesla-Pool" },
    ],
    sourceRepo: "Dhaka-Tesla-Pool",
    badge: "FEATURED",
  },
  {
    id: "aerosight",
    name: "AeroSight",
    tag: "Drone Vision",
    price: "YOLO11",
    cover: "/projects/aerosight.png",
    blurb:
      "Drone-based aerial vision system for human and vehicle detection, counting, and trajectory visualization.",
    stack: ["YOLO11", "FastAPI", "Next.js", "TypeScript", "PyTorch", "OpenCV", "ByteTrack"],
    points: [
      "Fine-tuned YOLO11n on a custom two-class VisDrone dataset.",
      "Built an upload and inference experience with object counts and confidence controls.",
      "Used ByteTrack for multi-object tracking and trajectory visualization.",
    ],
    links: [
      { label: "Live Demo", href: "https://aero-sight.vercel.app/" },
    ],
    sourceRepo: "AeroSight",
  },
  {
    id: "bookcycle",
    name: "BookCycle",
    tag: "Community Exchange",
    price: "MERN",
    cover: "/projects/bookcycle.jpg",
    blurb:
      "Community-powered book exchange platform connecting people who want to share, donate, and discover books.",
    stack: ["React", "Tailwind CSS", "Express", "MongoDB", "Cloudinary", "Socket.IO"],
    points: [
      "Built book listings, exchange requests, and chat for coordinating handoffs.",
      "Added JWT authentication and an AI-assisted book discovery experience.",
    ],
    links: [
      { label: "Live Demo", href: "https://book-cycle-cxry.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jnkarim/BookCycle" },
    ],
    sourceRepo: "BookCycle",
  },
  {
    id: "pokedex",
    name: "Pokédex App",
    tag: "Interactive Web App",
    price: "Next.js",
    cover: "/projects/pokedex.png",
    blurb:
      "Retro-inspired Pokédex with live PokéAPI data, interactive filtering, sorting, and responsive layouts.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PokéAPI"],
    points: [
      "Includes artwork, type badges, generation filters, and Pokémon details.",
      "Uses responsive loading and lightweight transitions for a smooth browsing experience.",
    ],
    links: [
      { label: "Live Demo", href: "https://pokedex-eta-kohl.vercel.app/" },
      { label: "GitHub", href: "https://github.com/jnkarim/Pokedex" },
    ],
    sourceRepo: "Pokedex",
  },
];

export const skills = {
  Languages: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
  Frameworks: ["React", "Next.js", "FastAPI", "Express.js", "Node.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  "AI / ML": ["PyTorch", "YOLO", "LangChain", "LangGraph", "RAG"],
  Tools: ["Git", "GitHub", "Postman", "Vercel", "Render", "Docker"],
};

export const awards = [
  {
    title: "7th Place (Honourable Mention) - Bangladesh Blockchain Olympiad 2026",
    org: "International Round Nominee, Hong Kong",
  },
  {
    title: "Champion - Programming Contest",
    org: "Cefalo AUST CSE Carnival 2.0",
  },
  {
    title: "Runner-up - Software Exhibition",
    org: "AUST CSE Carnival 4.0",
  },
  {
    title: "National Selection - Innovation Zone",
    org: "Digital Device & Innovation Expo 2026 (ICT Division, Bangladesh)",
  },
  {
    title: "Top 15 - Impact Dhaka 2026",
    org: "CognisorAI & BUET IEEE Hackathon",
  },
];