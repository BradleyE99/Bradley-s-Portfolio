"use client";

import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Menu,
  X,
  ExternalLink,
  Code2,
  Briefcase,
  Moon,
  Sun,
  Accessibility,
  Bot,
} from "lucide-react";

const PROJECTS = [
  {
    title: "Generative Charities",
    period: "Summer 2025",
    stack: ["Python", "Django", "PostgreSQL", "AWS EC2", "AWS EB", "RDS", "S3", "OAuth2"],
    blurb:
      "A full-stack web platform that gives underfunded U.S. charities a public-facing space to showcase their mission, programs, and impact data to donors, enabling more personalized, one-on-one engagement.",
    demoSources: ["/gc-demo.mp4"],
    poster: "/gc-poster.jpg",
    highlights: [
      "Built the dashboard, search functionality, and authentication system (login/logout) using Python, Django, and HTML",
      "Architected the AWS infrastructure: PostgreSQL on RDS for persistent storage, Elastic Beanstalk for deployment, and EC2 for hosting, enabling scalable delivery without dedicated DevOps support",
      "Implemented Epic OAuth2 authentication and integrated FHIR APIs to fetch patient medical observation data",
      "Aggregated analytics into CSV files stored in Amazon S3",
    ],
  },
  {
    title: "ADA Digital Accessibility Case Study",
    period: "2025 · SYS 2001: Systems Engineering Concepts",
    stack: ["Systems Analysis", "Requirements Engineering", "Decision Analysis"],
    blurb:
      "A systems engineering study of UVA's WCAG 2.1 A/AA compliance gap affecting ~2,400 faculty across 12 schools. Our group was selected as the top group to present to the class.",
    placeholderIcon: Accessibility,
    highlights: [
      "Ran a full systems engineering lifecycle: stakeholder analysis, requirements, decision analysis, and recommendation",
      "Applied decision analysis to recommend a two-tier opt-in workflow over fixed-cadence emails: faculty who have started receive monthly reminders, and reminders stop once they complete, using frequency as the behavioral lever",
    ],
  },
  {
    title: "NASA Lunabotics Robot (MARS)",
    period: "2025 – Present · Mechatronics and Robotics Society",
    stack: ["Python", "C++", "GitHub", "Systems Analysis"],
    blurb:
      "Member of the Computer and Systems Engineering subteams building a robot for the NASA Lunabotics competition.",
    placeholderIcon: Bot,
    highlights: [
      "Apply systems analysis to design and integrate the robot, using Python, C++, and GitHub to connect all subsystems",
    ],
  },
  {
    title: "VR Towers of Hanoi Research",
    period: "Spring 2025",
    stack: ["Unity", "C#", "NUI"],
    blurb:
      "Interactive VR study on gesture-based learning and peer-to-peer teaching.",
    repo: "",
    demo: "",
    highlights: [
      "Researched the impact of gesture-based interaction on student learning outcomes within VR environments",
      "Analyzed prior studies on Natural User Interfaces (NUI) and their role in education and peer-to-peer teaching",
      "Developed an interactive Towers of Hanoi game in Unity (C#) to study gesture-based interaction",
    ],
    images: ["/hanoi-1.jpg", "/hanoi-2.jpg"],
  },
];

const TARGET_ROLES = "AI Engineering, Software Engineering, and Forward Deployed Engineering";

const PROFILE = {
  name: "Bradley Elder",
  role: "Systems Engineering & Computer Science",
  headshot: "/headshot.jpg",
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/BradleyE99?tab=repositories",
  linkedin: "https://www.linkedin.com/in/bradleyjelder21",
  resume: "/Resume_Elder_Bradley.pdf",
  aboutIntro: `Third-year student at the University of Virginia, double majoring in Systems Engineering and Computer Science. I'm pursuing ${TARGET_ROLES} roles: work where I can learn what users actually need and build software that solves it.`,
  aboutBullets: [
    "Currently a Software Engineering Intern at Idemia Public Security, building a Boomi integration pipeline and a Microsoft Copilot Studio IT support agent",
    "Previously built and deployed a full-stack Django platform on AWS for Generative Charities",
    "Hands-on with Python, Java, SQL, Groovy, JavaScript, Django, AWS, and Boomi",
    "From Fairfax, VA",
  ],
  objectives: [
    `Seeking a Summer 2027 internship in ${TARGET_ROLES}, applying software development, systems analysis, and hands-on experience with integrations and AI agents to turn user needs into working technical solutions.`,
  ],
  education: {
    school: "University of Virginia",
    location: "Charlottesville, VA",
    degrees: "B.S. Computer Science · B.S. Systems and Information Engineering",
    status: "Third-year student · Graduating May 2028",
  },
};

const JOBS = [
  {
    role: "Software Engineering Intern",
    company: "Idemia Public Security",
    period: "Summer 2026 – December 2026",
    location: "Reston, VA",
    summary:
      "Building data integrations and an AI support agent for Idemia's Public Security department. Retained beyond the standard internship term through December 2026 based on performance, continuing to lead data integration and AI chatbot initiatives.",
    bullets: [
      "Engineered a REST API integration pipeline in Groovy and JavaScript on Boomi (iPaaS) that transforms and caches ADP employee records to sync with Salesforce, automating real-time identity provisioning and deprovisioning tied to employment status and replacing manual onboarding/offboarding for the entire 5,000+ person Public Security department.",
      "Built an internal IT support agent using Microsoft Copilot Studio, Power Automate, and Dataverse that handles common Tier 1/2 helpdesk requests without human involvement, freeing IT staff for higher-priority work.",
      "Designed Power Automate escalation flows for manager approval and authored the agent's instruction set and knowledge base to ground its responses.",
    ],
    tech: ["Groovy", "JavaScript", "Boomi", "REST APIs", "Salesforce", "Copilot Studio", "Power Automate", "Dataverse"],
    link: "",
  },
  {
    role: "Software Engineer Intern",
    company: "Generative Charities",
    period: "Summer 2025",
    location: "Centreville, VA",
    summary:
      "Applied both technical and analytical skills to support a nonprofit startup focused on empowering smaller U.S. charities.",
    bullets: [
      "Built a full-stack web platform using Django and Python that gives underfunded U.S. charities a public-facing space to showcase their mission, programs, and impact data to donors.",
      "Architected the cloud infrastructure on AWS: PostgreSQL (RDS) for persistent storage, Elastic Beanstalk for deployment, and EC2 for hosting, enabling scalable delivery without dedicated DevOps support.",
      "Conducted systems analysis to identify strategies that help local charities expand their reach and provide more personalized support to people in need.",
      "Utilized open.epic to pull medical data using APIs.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "AWS EC2", "AWS EB", "RDS", "S3", "GitHub"],
    link: "",
  },
  {
    role: "State and Competitive Travel Soccer Referee",
    company: "Metro DC-VA",
    period: "2019 – Present",
    location: "",
    summary: "",
    bullets: [
      "Responsible for the safety of all players and spectators for the duration of each game.",
      "Enforce FIFA rules and regulations so everyone can play fair and have fun.",
    ],
    tech: [],
    link: "",
  },
];

const SKILLS = {
  Languages: [
    { name: "Python", source: "Generative Charities, MARS" },
    { name: "Java", source: "UVA Coursework" },
    { name: "SQL", source: "Generative Charities" },
    { name: "Groovy", source: "Idemia" },
    { name: "JavaScript", source: "Idemia" },
    { name: "C#", source: "VR Towers of Hanoi Research" },
    { name: "C++", source: "MARS" },
    { name: "C" },
    { name: "Assembly" },
  ],
  "Frameworks & Tools": [
    { name: "Django", source: "Generative Charities" },
    { name: "React", source: "Portfolio Website" },
    { name: "Next.js", source: "Portfolio Website" },
    { name: "Unity", source: "VR Towers of Hanoi Research" },
    { name: "Git/GitHub", source: "Generative Charities, MARS" },
  ],
  "AI & Automation": [
    { name: "Microsoft Copilot Studio", source: "Idemia" },
    { name: "Power Automate", source: "Idemia" },
    { name: "Dataverse", source: "Idemia" },
  ],
  "Integration & APIs": [
    { name: "Boomi (iPaaS)", source: "Idemia" },
    { name: "REST APIs", source: "Idemia" },
    { name: "Salesforce", source: "Idemia" },
    { name: "Epic FHIR APIs", source: "Generative Charities" },
  ],
  "Cloud & Data": [
    { name: "AWS EC2", source: "Generative Charities" },
    { name: "AWS Elastic Beanstalk", source: "Generative Charities" },
    { name: "Amazon RDS", source: "Generative Charities" },
    { name: "Amazon S3", source: "Generative Charities" },
    { name: "PostgreSQL", source: "Generative Charities" },
  ],
  Methodologies: [
    { name: "Systems Analysis", source: "SYS 2001, MARS" },
    { name: "Requirements Engineering", source: "SYS 2001" },
    { name: "Decision Analysis", source: "SYS 2001" },
  ],
};

const NAV_LINKS = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const RESUME_LINK_PROPS = {
  href: PROFILE.resume,
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": "Resume (PDF, opens in a new tab)",
};

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [videoLoadError, setVideoLoadError] = useState({});
  const [videoSourceErrorCount, setVideoSourceErrorCount] = useState({});
  const isDark = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const getVideoMimeType = (src) => {
    if (src.endsWith(".webm")) return "video/webm";
    if (src.endsWith(".mov")) return "video/quicktime";
    return "video/mp4";
  };
  const clearVideoError = (title) => {
    setVideoLoadError((prev) => (prev[title] ? { ...prev, [title]: false } : prev));
    setVideoSourceErrorCount((prev) => (prev[title] ? { ...prev, [title]: 0 } : prev));
  };
  const handleVideoSourceError = (title, totalSources) => {
    if (!totalSources) return;
    setVideoSourceErrorCount((prev) => {
      const nextCount = (prev[title] || 0) + 1;
      if (nextCount >= totalSources) {
        setVideoLoadError((prevLoadError) => ({
          ...prevLoadError,
          [title]: true,
        }));
      }
      return {
        ...prev,
        [title]: nextCount,
      };
    });
  };

  // Shared theme-aware class names, so every section uses the same UVA palette.
  const ui = {
    heading: isDark ? "text-slate-100" : "text-uva-navy",
    body: isDark ? "text-slate-300" : "text-slate-700",
    meta: isDark ? "text-slate-400" : "text-slate-600",
    icon: isDark ? "text-uva-orange-300" : "text-uva-navy",
    card: `rounded-3xl border shadow-sm transition-all motion-safe:transform-gpu motion-safe:hover:-translate-y-1 hover:shadow-xl hover:border-uva-orange focus-within:border-uva-orange ${
      isDark ? "border-uva-navy-700 bg-uva-navy-800" : "border-uva-navy-100 bg-white"
    }`,
    chip: `text-xs border rounded-xl px-2 py-1 ${
      isDark ? "border-uva-navy-600 bg-uva-navy-700 text-slate-100" : "border-uva-navy-100 bg-uva-navy-50 text-uva-navy"
    }`,
    button: `inline-flex items-center gap-2 rounded-2xl px-4 py-2 border transition-colors ${
      isDark
        ? "border-uva-navy-600 bg-uva-navy-800 text-slate-100 hover:border-uva-orange hover:bg-uva-navy-700"
        : "border-uva-navy-200 bg-white text-uva-navy hover:border-uva-orange hover:bg-uva-orange-50"
    }`,
    buttonPrimary: `inline-flex items-center gap-2 rounded-2xl px-4 py-2 border text-white transition-colors ${
      isDark
        ? "border-uva-orange bg-uva-navy-600 hover:bg-uva-navy-700"
        : "border-uva-navy bg-uva-navy hover:bg-uva-navy-700 hover:border-uva-orange"
    }`,
    link: `inline-flex items-center gap-1 text-sm font-medium underline decoration-uva-orange decoration-2 underline-offset-4 hover:no-underline ${
      isDark ? "text-uva-orange-300" : "text-uva-navy"
    }`,
    navLink: "rounded-md text-white/90 hover:text-white underline-offset-8 decoration-2 decoration-uva-orange hover:underline",
  };

  const sectionHeading = (label, Icon) => (
    <h2 className={`text-2xl font-bold flex items-center gap-2 ${ui.heading}`}>
      {Icon && <Icon className={`h-5 w-5 ${ui.icon}`} aria-hidden="true" />}
      <span className="border-b-4 border-uva-orange pb-1">{label}</span>
    </h2>
  );

  const renderProjectMedia = (p) => {
    const videoSources = p.demoSources || (p.demo && /\.mp4($|\?)/i.test(p.demo) ? [p.demo] : []);

    if (videoSources.length && !videoLoadError[p.title]) {
      return (
        <video
          className="h-full w-full object-contain bg-uva-navy-950"
          controls
          playsInline
          preload="metadata"
          poster={p.poster}
          aria-label={`${p.title} demo video`}
          onLoadedData={() => clearVideoError(p.title)}
        >
          {videoSources.map((src) => (
            <source
              key={src}
              src={src}
              type={getVideoMimeType(src)}
              onError={() => handleVideoSourceError(p.title, videoSources.length)}
            />
          ))}
          Your browser does not support the video tag.
        </video>
      );
    }

    if (videoSources.length) {
      return (
        <div className="relative h-full w-full bg-uva-navy-950">
          {p.poster && <img src={p.poster} alt="" className="h-full w-full object-contain opacity-40" />}
          <p className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-white">
            Demo video is unavailable right now.
          </p>
        </div>
      );
    }

    if (p.images?.length) {
      // The screenshots are roughly square, so showing them side by side fills the 16:9 frame
      // without cropping any of the game board.
      return (
        <div
          className={`grid h-full w-full gap-2 p-2 ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} ${
            isDark ? "bg-uva-navy-900" : "bg-uva-navy-50"
          }`}
        >
          {p.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${p.title} screenshot ${i + 1}`}
              className="h-full w-full min-h-0 object-contain"
            />
          ))}
        </div>
      );
    }

    const Icon = p.placeholderIcon || Code2;
    return (
      <div
        aria-hidden="true"
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-uva-navy to-uva-navy-600"
      >
        <Icon className="h-16 w-16 text-uva-orange" strokeWidth={1.5} />
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${
        isDark ? "from-uva-navy-950 to-uva-navy-900 text-slate-100" : "from-uva-navy-50 to-white text-slate-800"
      }`}
    >
      <header
        className={`sticky top-0 z-30 backdrop-blur border-b-2 border-uva-orange ${
          isDark ? "bg-uva-navy-950/95" : "bg-uva-navy/95"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-white">
          <a href="#home" className="flex items-center gap-2 font-semibold rounded-md">
            <Code2 className="h-5 w-5 text-uva-orange" aria-hidden="true" /> {PROFILE.name}
          </a>
          <div className="flex items-center gap-2">
            <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href} className={ui.navLink}>
                  {label}
                </a>
              ))}
              <a
                {...RESUME_LINK_PROPS}
                className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-uva-orange text-white hover:bg-uva-orange/20 transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Resume
              </a>
            </nav>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/30 bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
            </button>
            <button
              type="button"
              className="md:hidden p-2 text-white rounded-md"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className={`md:hidden border-t border-white/10 text-white ${isDark ? "bg-uva-navy-950" : "bg-uva-navy"}`}
          >
            <div className="px-4 py-2 flex flex-col gap-2">
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className={`py-2 ${ui.navLink}`}>
                  {label}
                </a>
              ))}
              <a
                {...RESUME_LINK_PROPS}
                onClick={() => setOpen(false)}
                className={`py-2 inline-flex items-center gap-2 ${ui.navLink}`}
              >
                <Download className="h-4 w-4 text-uva-orange" aria-hidden="true" /> Resume
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1 flex justify-center">
              <img
                src={PROFILE.headshot}
                alt={`${PROFILE.name} headshot`}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-uva-orange shadow-md"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-sm uppercase tracking-wider font-semibold">
                <span className={isDark ? "text-slate-200" : "text-uva-navy"}>{PROFILE.role}</span>{" "}
                <span className={isDark ? "text-uva-orange-300" : "text-uva-orange-700"}>@ UVA</span>
              </p>
              <h1 className={`mt-1 text-4xl md:text-5xl font-extrabold leading-tight ${ui.heading}`}>{PROFILE.name}</h1>
              <p className={`mt-4 leading-relaxed max-w-prose ${ui.body}`}>{PROFILE.aboutIntro}</p>
              <ul className={`mt-3 grid gap-2 max-w-prose list-disc pl-5 marker:text-uva-orange ${ui.body}`}>
                {PROFILE.aboutBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {[
                  [
                    "Objectives",
                    <p key="o" className={`mt-2 ${ui.body}`}>
                      {PROFILE.objectives[0]}
                    </p>,
                  ],
                  [
                    "Education",
                    <div key="e">
                      <p className={`mt-2 font-semibold ${ui.heading}`}>{PROFILE.education.school}</p>
                      <p className={`text-xs ${ui.meta}`}>{PROFILE.education.location}</p>
                      <p className={`mt-2 ${ui.body}`}>{PROFILE.education.degrees}</p>
                      <p className={`mt-1 text-sm ${ui.body}`}>{PROFILE.education.status}</p>
                    </div>,
                  ],
                ].map(([label, content]) => (
                  <div
                    key={label}
                    className={`rounded-2xl border border-l-4 border-l-uva-orange p-4 ${
                      isDark ? "border-uva-navy-700 bg-uva-navy-800/70" : "border-uva-navy-100 bg-white/80"
                    }`}
                  >
                    <h2 className={`text-sm font-semibold uppercase tracking-wider ${ui.heading}`}>{label}</h2>
                    {content}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={`mailto:${PROFILE.email}`} className={ui.buttonPrimary}>
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={ui.button}>
                  <Github className={`h-4 w-4 ${ui.icon}`} aria-hidden="true" /> GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={ui.button}>
                  <Linkedin className={`h-4 w-4 ${ui.icon}`} aria-hidden="true" /> LinkedIn
                </a>
                <a {...RESUME_LINK_PROPS} className={ui.button}>
                  <Download className={`h-4 w-4 ${ui.icon}`} aria-hidden="true" /> Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`w-full border-y ${isDark ? "bg-uva-navy-900 border-uva-navy-800" : "bg-white border-uva-navy-100"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            {sectionHeading("Projects")}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article key={p.title} className={`flex h-full flex-col overflow-hidden ${ui.card}`}>
                  <div
                    className={`aspect-video w-full overflow-hidden border-b-2 border-uva-orange ${
                      isDark ? "bg-uva-navy-950" : "bg-uva-navy-50"
                    }`}
                  >
                    {renderProjectMedia(p)}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={`text-lg font-semibold ${ui.heading}`}>{p.title}</h3>
                    <p className={`text-xs ${ui.meta}`}>{p.period}</p>
                    <p className={`mt-3 text-sm ${ui.body}`}>{p.blurb}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className={ui.chip}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className={`mt-3 list-disc pl-5 text-sm space-y-1 marker:text-uva-orange ${ui.body}`}>
                      {p.highlights
                        .filter((h) => h.trim() !== "")
                        .map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                    </ul>
                    {(p.repo || (p.demo && !/\.mp4($|\?)/i.test(p.demo))) && (
                      <div className="mt-auto flex flex-wrap gap-4 pt-4">
                        {p.repo && (
                          <a href={p.repo} target="_blank" rel="noopener noreferrer" className={ui.link}>
                            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                          </a>
                        )}
                        {p.demo && !/\.mp4($|\?)/i.test(p.demo) && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className={ui.link}>
                            <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={`w-full border-y ${isDark ? "bg-uva-navy-950/70 border-uva-navy-800" : "bg-uva-navy-50 border-uva-navy-100"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            {sectionHeading("Experience", Briefcase)}
            <div className="mt-8 grid gap-6">
              {JOBS.map((j) => (
                <article key={`${j.company}-${j.role}`} className={`p-5 ${ui.card}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className={`text-lg font-semibold ${ui.heading}`}>
                        {j.role} - {j.company}
                      </h3>
                      <p className={`text-xs ${ui.meta}`}>
                        {j.period}
                        {j.location && ` · ${j.location}`}
                      </p>
                    </div>
                    {j.link && (
                      <a href={j.link} className={ui.link}>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" /> View
                      </a>
                    )}
                  </div>
                  {j.summary && <p className={`mt-3 text-sm ${ui.body}`}>{j.summary}</p>}
                  <ul className={`mt-3 list-disc pl-5 text-sm space-y-1 marker:text-uva-orange ${ui.body}`}>
                    {j.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-2 ${j.tech.length ? "mt-3" : ""}`}>
                    {j.tech.map((t) => (
                      <span key={t} className={ui.chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`w-full border-y ${isDark ? "bg-uva-navy-900 border-uva-navy-800" : "bg-white border-uva-navy-100"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            {sectionHeading("Skills")}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} className={`p-5 ${ui.card}`}>
                  <h3 className={`font-semibold ${ui.heading}`}>{cat}</h3>
                  <ul className={`mt-3 space-y-2 text-sm ${ui.body}`}>
                    {items.map(({ name, source }) => (
                      <li key={name} className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <span>
                          <span className="text-uva-orange" aria-hidden="true">
                            -
                          </span>{" "}
                          {name}
                        </span>
                        {source && <span className={`text-xs italic ${ui.meta}`}>({source})</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`w-full border-y ${isDark ? "bg-uva-navy-950/70 border-uva-navy-800" : "bg-uva-navy-50 border-uva-navy-100"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            {sectionHeading("Contact")}
            <p className={`mt-4 max-w-prose ${ui.body}`}>
              Seeking Summer 2027 internships in {TARGET_ROLES}. Email is the best way to reach me.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} className={`min-w-0 max-w-full break-all ${ui.button}`}>
                <Mail className={`h-4 w-4 shrink-0 ${ui.icon}`} aria-hidden="true" /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-w-0 max-w-full break-all ${ui.button}`}
              >
                <Github className={`h-4 w-4 shrink-0 ${ui.icon}`} aria-hidden="true" />{" "}
                {PROFILE.github.replace(/^https?:\/\//, "").replace(/\?.*$/, "")}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-w-0 max-w-full break-all ${ui.button}`}
              >
                <Linkedin className={`h-4 w-4 shrink-0 ${ui.icon}`} aria-hidden="true" />{" "}
                {PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
              <a {...RESUME_LINK_PROPS} className={ui.buttonPrimary}>
                <Download className="h-4 w-4" aria-hidden="true" /> Resume (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t-2 border-uva-orange py-10 text-center text-xs ${isDark ? "bg-uva-navy-950 text-slate-400" : "bg-uva-navy text-white/80"}`}>
        (c) {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}
