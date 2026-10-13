
import { featuredProjects, type Project } from "./data";

const username = "jnkarim";
const refreshSeconds = 6 * 60 * 60;

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  default_branch: string;
  language: string | null;
  topics?: string[];
  has_pages: boolean;
  fork: boolean;
  archived: boolean;
};

const deployHosts = [
  "vercel.app",
  "netlify.app",
  "github.io",
  "streamlit.app",
  "pages.dev",
  "web.app",
  "firebaseapp.com",
  "onrender.com",
  "railway.app",
  "fly.dev",
  "surge.sh",
  "hf.space",
  "render.com",
  "replit.app",
];

function normalizeSite(
  value: string | null | undefined
): string | null {
  if (!value?.trim()) return null;

  try {
    const raw = value.trim();

    const url = new URL(
      /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
    );

    if (!["http:", "https:"].includes(url.protocol)) {
      return null;
    }

    if (url.username || url.password) {
      return null;
    }

    if (
      [
        "github.com",
        "www.github.com",
        "youtube.com",
        "linkedin.com",
        "localhost",
      ].includes(url.hostname)
    ) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

function sameUrl(value: string): string {
  return value.replace(/\/+$/, "").toLowerCase();
}

function normalizeName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Repositories excluded from the portfolio.
const excludedRepoNames = new Set([
  "cozylivingroom",
  "handsonvolunteeringplatform",
  "faceidassistant",
  "julkernayeenkarimportfolio",
  "jnkarimportfolio",
  "safeguardvision",
  "quickhire",
  "quickehire",
  "markflowfrontend",
  "markflow",
]);

function isExcludedRepoName(value: string): boolean {
  return excludedRepoNames.has(normalizeName(value));
}

// Image paths for GitHub-discovered projects.
const repoCovers: Record<string, string> = {
  deadlockzombieshooter: "/projects/deadlock.png",
  deadlock: "/projects/deadlock.png",
  campusgrid: "/projects/campusgrid.png",
};

// Filter excluded featured projects and apply image mapping.
function visibleFeaturedProjects(): Project[] {
  return featuredProjects
    .filter(
      (project) =>
        ![
          project.id,
          project.name,
          project.sourceRepo ?? "",
        ].some(isExcludedRepoName)
    )
    .map((project) => {
      const imageKey = [
        project.sourceRepo,
        project.id,
        project.name,
      ]
        .filter((value): value is string => Boolean(value))
        .map(normalizeName)
        .find((key) => repoCovers[key]);

      return imageKey
        ? {
            ...project,
            cover: repoCovers[imageKey],
          }
        : project;
    });
}

function isKnownDeployHost(link: string): boolean {
  try {
    const host = new URL(link).hostname.toLowerCase();

    return deployHosts.some(
      (suffix) =>
        host === suffix || host.endsWith(`.${suffix}`)
    );
  } catch {
    return false;
  }
}

function liveUrlFromReadme(text: string): string | null {
  const candidates: {
    url: string;
    score: number;
  }[] = [];

  for (const line of text.split(/\r?\n/)) {
    if (
      /\b(localhost|your-project|your-app|example\.com|template|placeholder)\b/i.test(
        line
      )
    ) {
      continue;
    }

    const goodContext =
      /\b(live|demo|deployed|visit site|website|try it|frontend|preview)\b/i.test(
        line
      );

    const badContext =
      /\b(backend|api endpoint|documentation|docs|tutorial|badge|deploy to|how to deploy)\b/i.test(
        line
      );

    const matches =
      line.match(/https?:\/\/[^\s<>"'`\])}]+/gi) ?? [];

    for (const value of matches) {
      const candidate = normalizeSite(
        value.replace(/[.,;:]+$/, "")
      );

      if (!candidate) continue;

      const recognized = isKnownDeployHost(candidate);

      if (!recognized && !goodContext) continue;

      const score =
        (goodContext ? 5 : 0) +
        (recognized ? 2 : 0) -
        (badContext ? 8 : 0);

      if (score > 0) {
        candidates.push({
          url: candidate,
          score,
        });
      }
    }
  }

  candidates.sort((a, b) => b.score - a.score);

  return candidates[0]?.url ?? null;
}

async function getRepoWebsite(
  repo: GitHubRepo
): Promise<string | null> {

  // CampusGrid live deployment
  if (normalizeName(repo.name) === "campusgrid") {
    return "https://campusgrid-git-feat-landing-page-jnkarims-projects.vercel.app/";
  }

  const homepage = normalizeSite(repo.homepage);

  if (homepage) return homepage;

  // Rest of your existing code...
}

// Convert GitHub repository into a project card.
function dynamicCard(
  repo: GitHubRepo,
  demo: string
): Project {
  const normalizedRepo = normalizeName(repo.name);

  return {
    id: `github-${normalizedRepo}`,

    name: repo.name.replace(/[-_]+/g, " "),

    tag: "Deployed GitHub Project",

    cover: repoCovers[normalizedRepo],

    price: repo.language ?? "LIVE",

    blurb:
      repo.description?.trim() ||
      "A publicly deployed project from my GitHub repositories.",

    stack: [
      repo.language,
      ...(repo.topics ?? []),
    ]
      .filter(
        (value): value is string => Boolean(value)
      )
      .slice(0, 6),

    points: [],

    links: [
      {
        label: "Live Demo",
        href: demo,
      },
      {
        label: "GitHub",
        href: repo.html_url,
      },
    ],
  };
}

// Fetch and combine portfolio projects.
export async function getPortfolioProjects(): Promise<Project[]> {
  const visibleFeatured = visibleFeaturedProjects();

  let repos: GitHubRepo[];

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization =
        `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
      {
        headers,
        next: {
          revalidate: refreshSeconds,
        },
        signal: AbortSignal.timeout(6500),
      }
    );

    if (!response.ok) {
      return visibleFeatured;
    }

    const result: unknown = await response.json();

    if (!Array.isArray(result)) {
      return visibleFeatured;
    }

    repos = result.filter(
      (item): item is GitHubRepo =>
        Boolean(
          item &&
          typeof item === "object" &&
          typeof item.name === "string" &&
          typeof item.html_url === "string"
        )
    );
  } catch {
    return visibleFeatured;
  }

  // Exclude unwanted GitHub repositories.
  const allowedRepos = repos.filter(
    (repo) => !isExcludedRepoName(repo.name)
  );

  const found = await Promise.all(
    allowedRepos.map(async (repo) => ({
      repo,

      demo: repo.fork
        ? normalizeSite(repo.homepage) ||
          (repo.has_pages
            ? `https://${username}.github.io/${repo.name}/`
            : null)
        : await getRepoWebsite(repo),
    }))
  );

  const projects = visibleFeatured.map((project) => ({
    ...project,
    links: [...project.links],
  }));

  const knownNames = new Set(
    projects.flatMap((project) => [
      normalizeName(project.id),
      normalizeName(project.sourceRepo ?? ""),
    ])
  );

  const knownWebsites = new Set(
    projects.flatMap((project) =>
      project.links
        .filter((link) => link.label === "Live Demo")
        .map((link) => sameUrl(link.href))
    )
  );

  for (const { repo, demo } of found) {
    if (!demo || isExcludedRepoName(repo.name)) {
      continue;
    }

    const index = projects.findIndex(
      (project) =>
        normalizeName(project.id) ===
          normalizeName(repo.name) ||
        normalizeName(project.sourceRepo ?? "") ===
          normalizeName(repo.name) ||
        project.links.some(
          (link) =>
            link.label === "Live Demo" &&
            sameUrl(link.href) === sameUrl(demo)
        )
    );

    if (index >= 0) {
      const existing = projects[index];

      projects[index] = {
        ...existing,

        links: [
          ...existing.links.filter(
            (link) => link.label !== "GitHub"
          ),
          {
            label: "GitHub",
            href: repo.html_url,
          },
        ],
      };

      continue;
    }

    const repoName = normalizeName(repo.name);

    if (
      knownNames.has(repoName) ||
      knownWebsites.has(sameUrl(demo))
    ) {
      continue;
    }

    projects.push(dynamicCard(repo, demo));

    knownNames.add(repoName);
    knownWebsites.add(sameUrl(demo));
  }

  return projects;
}
