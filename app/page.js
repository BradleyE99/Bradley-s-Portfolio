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
  ArrowRight,
  ArrowLeft,
  Moon,
  Sun,
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
    layout: "right-images",
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
  const [hanoiIdx, setHanoiIdx] = useState(0);
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

  const nextImg = (len) => setHanoiIdx((i) => (i + 1) % len);
  const prevImg = (len) => setHanoiIdx((i) => (i - 1 + len) % len);
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

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${
        isDark ? "from-slate-950 to-slate-900 text-slate-100" : "from-blue-50 to-white text-slate-800"
      }`}
    >
      <header
        className={`sticky top-0 z-30 backdrop-blur border-b shadow-[0_1px_0_0_rgba(255,255,255,0.06)] ${
          isDark ? "bg-slate-950/95 border-slate-800" : "bg-blue-900/95 border-blue-800"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-white">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Code2 className="h-5 w-5 text-white" /> {PROFILE.name}
          </a>
          <div className="flex items-center gap-2">
            <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href} className={isDark ? "hover:text-slate-300" : "hover:text-blue-200"}>
                  {label}
                </a>
              ))}
              <a
                {...RESUME_LINK_PROPS}
                className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/30 bg-white/10 hover:bg-white/20"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </nav>
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border transition-colors ${
                isDark
                  ? "border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700"
                  : "border-white/30 bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
            </button>
            <button
              type="button"
              className="md:hidden p-2 text-white"
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
            className={`md:hidden border-t text-white ${
              isDark ? "border-slate-800 bg-slate-950/98" : "border-blue-800 bg-blue-900/98"
            }`}
          >
            <div className="px-4 py-2 flex flex-col gap-2">
              {NAV_LINKS.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`py-2 ${isDark ? "hover:text-slate-300" : "hover:text-blue-200"}`}
                >
                  {label}
                </a>
              ))}
              <a
                {...RESUME_LINK_PROPS}
                onClick={() => setOpen(false)}
                className={`py-2 inline-flex items-center gap-2 ${isDark ? "hover:text-slate-300" : "hover:text-blue-200"}`}
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </nav>
        )}
      </header>

      <section id="home" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1 flex justify-center">
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className={`w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border shadow-sm ${
                isDark ? "border-slate-700" : "border-blue-100"
              }`}
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-wider font-semibold">
              <span className={isDark ? "text-slate-200" : "text-[#232D4B]"}>{PROFILE.role}</span>{" "}
              <span className={isDark ? "text-amber-400" : "text-[#E57200]"}>@ UVA</span>
            </p>
            <h1 className={`mt-1 text-4xl md:text-5xl font-extrabold leading-tight ${isDark ? "text-slate-100" : "text-blue-900"}`}>
              {PROFILE.name}
            </h1>
            <p className={`mt-4 leading-relaxed max-w-prose ${isDark ? "text-slate-300" : "text-slate-700"}`}>{PROFILE.aboutIntro}</p>
            <ul className={`mt-3 grid gap-2 max-w-prose list-disc pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              {PROFILE.aboutBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-800/70" : "border-blue-100 bg-white/70"}`}>
                <h2 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-blue-900"}`}>Objectives</h2>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{PROFILE.objectives[0]}</p>
              </div>
              <div className={`rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-800/70" : "border-blue-100 bg-white/70"}`}>
                <h2 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-blue-900"}`}>Education</h2>
                <p className={`mt-2 font-semibold ${isDark ? "text-slate-100" : "text-blue-900"}`}>{PROFILE.education.school}</p>
                <p className={`text-xs ${isDark ? "text-slate-400" : "text-blue-700/70"}`}>{PROFILE.education.location}</p>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{PROFILE.education.degrees}</p>
                <p className={`mt-1 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{PROFILE.education.status}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border text-white ${
                  isDark ? "border-slate-700 bg-slate-700 hover:bg-slate-600" : "border-white/50 bg-blue-900 hover:bg-blue-800"
                }`}
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                  isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
                }`}
              >
                <Github className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                  isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
                }`}
              >
                <Linkedin className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> LinkedIn
              </a>
              <a
                {...RESUME_LINK_PROPS}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                  isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
                }`}
              >
                <Download className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`w-full border-y ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-blue-100"}`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-blue-900"}`}>Projects</h2>
          <div className="mt-6 flex flex-col gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className={`w-full rounded-3xl border p-6 shadow-sm transition-all transform-gpu hover:-translate-y-1 hover:shadow-2xl ${
                  isDark ? "border-slate-700 bg-slate-800 hover:border-slate-500" : "border-blue-100 bg-white hover:border-blue-300"
                }`}
              >
                {p.layout === "right-images" ? (
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className={`text-lg font-semibold ${isDark ? "text-slate-100" : "text-blue-900"}`}>{p.title}</h3>
                          <p className={`text-xs ${isDark ? "text-slate-400" : "text-blue-700/70"}`}>{p.period}</p>
                        </div>
                      </div>
                      <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{p.blurb}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className={`text-xs border rounded-xl px-2 py-1 ${
                              isDark ? "border-slate-600 bg-slate-700 text-slate-100" : "border-blue-200 bg-blue-50 text-blue-800"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ul className={`mt-3 list-disc pl-5 text-sm space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {p.highlights
                          .filter((h) => h.trim() !== "")
                          .map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                      </ul>
                      {p.repo && (
                        <a href={p.repo} className="mt-3 inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                          <Github className="h-4 w-4" /> Repo
                        </a>
                      )}
                    </div>

                    <div className="md:col-span-1">
                      {p.images && p.images.length >= 2 && (
                        <div className="flex flex-col items-center">
                          <div className={`relative w-64 md:w-72 aspect-square overflow-hidden rounded-2xl border ${isDark ? "border-slate-700" : "border-blue-100"}`}>
                            {p.images.map((src, i) => (
                              <img
                                key={src}
                                src={src}
                                alt={`${p.title} image ${i + 1}`}
                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                                  i === hanoiIdx ? "opacity-100" : "opacity-0"
                                }`}
                              />
                            ))}
                            <button
                              type="button"
                              onClick={() => prevImg(p.images.length)}
                              className={`absolute left-2 top-1/2 -translate-y-1/2 border rounded-full p-1 shadow-md ${
                                isDark ? "bg-slate-800/90 hover:bg-slate-700 text-slate-100 border-slate-600" : "bg-white/70 hover:bg-white text-blue-700 border-blue-200"
                              }`}
                              aria-label="Show previous image"
                            >
                              <ArrowLeft className="h-5 w-5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => nextImg(p.images.length)}
                              className={`absolute right-2 top-1/2 -translate-y-1/2 border rounded-full p-1 shadow-md ${
                                isDark ? "bg-slate-800/90 hover:bg-slate-700 text-slate-100 border-slate-600" : "bg-white/70 hover:bg-white text-blue-700 border-blue-200"
                              }`}
                              aria-label="Show next image"
                            >
                              <ArrowRight className="h-5 w-5 arrow-slide" />
                            </button>
                          </div>
                          <div className="mt-2 flex gap-1.5">
                            {p.images.map((_, i) => (
                              <span
                                key={i}
                                className={`h-1.5 w-1.5 rounded-full ${
                                  i === hanoiIdx ? (isDark ? "bg-slate-200" : "bg-blue-700") : isDark ? "bg-slate-600" : "bg-blue-200"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className={`text-lg font-semibold ${isDark ? "text-slate-100" : "text-blue-900"}`}>{p.title}</h3>
                        <p className={`text-xs ${isDark ? "text-slate-400" : "text-blue-700/70"}`}>{p.period}</p>
                      </div>
                    </div>
                    <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{p.blurb}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className={`text-xs border rounded-xl px-2 py-1 ${
                            isDark ? "border-slate-600 bg-slate-700 text-slate-100" : "border-blue-200 bg-blue-50 text-blue-800"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className={`mt-3 list-disc pl-5 text-sm space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {p.highlights
                        .filter((h) => h.trim() !== "")
                        .map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                    </ul>
                    <div className="mt-4 flex flex-col gap-3">
                      {(p.demoSources?.length || (p.demo && /\.mp4($|\?)/i.test(p.demo))) && !videoLoadError[p.title] ? (
                        <video
                          className={`w-full aspect-video rounded-2xl border object-contain ${isDark ? "border-slate-700 bg-slate-900" : "border-blue-100 bg-slate-100"}`}
                          controls
                          playsInline
                          preload="metadata"
                          poster={p.poster}
                          onLoadedData={() => clearVideoError(p.title)}
                        >
                          {(p.demoSources || [p.demo]).map((src) => (
                            <source
                              key={src}
                              src={src}
                              type={getVideoMimeType(src)}
                              onError={() => handleVideoSourceError(p.title, (p.demoSources || [p.demo]).filter(Boolean).length)}
                            />
                          ))}
                          Your browser does not support the video tag.
                        </video>
                      ) : (p.demoSources?.length || (p.demo && /\.mp4($|\?)/i.test(p.demo))) && videoLoadError[p.title] ? (
                          <div
                            className={`rounded-2xl border p-3 text-sm ${
                              isDark ? "border-slate-700 bg-slate-900 text-slate-300" : "border-blue-100 bg-slate-50 text-slate-700"
                            }`}
                          >
                            Demo video is unavailable right now.
                          </div>
                      ) : p.demo ? (
                        <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      ) : null}
                      {p.repo && (
                        <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                          <Github className="h-4 w-4" /> Repo
                        </a>
                      )}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className={`w-full border-y ${isDark ? "bg-slate-950/70 border-slate-800" : "bg-blue-50/70 border-blue-100"}`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${isDark ? "text-slate-100" : "text-blue-900"}`}>
            <Briefcase className={`h-5 w-5 ${isDark ? "text-slate-300" : "text-blue-800"}`} /> Experience
          </h2>
          <div className="mt-6 grid gap-6">
            {JOBS.map((j) => (
              <article
                key={`${j.company}-${j.role}`}
                className={`rounded-3xl border p-5 shadow-sm transition-all transform-gpu hover:-translate-y-1 hover:shadow-2xl ${
                  isDark ? "border-slate-700 bg-slate-800 hover:border-slate-500" : "border-blue-100 bg-white hover:border-blue-300"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? "text-slate-100" : "text-blue-900"}`}>
                      {j.role} - {j.company}
                    </h3>
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-blue-700/70"}`}>
                      {j.period}
                      {j.location && ` · ${j.location}`}
                    </p>
                  </div>
                  {j.link && (
                    <a href={j.link} className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                      <ExternalLink className="h-4 w-4" /> View
                    </a>
                  )}
                </div>
                {j.summary && <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{j.summary}</p>}
                <ul className={`mt-3 list-disc pl-5 text-sm space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {j.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className={`flex flex-wrap gap-2 ${j.tech.length ? "mt-3" : ""}`}>
                  {j.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs border rounded-xl px-2 py-1 ${
                        isDark ? "border-slate-600 bg-slate-700 text-slate-100" : "border-blue-200 bg-blue-50 text-blue-800"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={`w-full border-y ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-blue-100"}`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-blue-900"}`}>Skills</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div
                key={cat}
                className={`rounded-3xl border p-5 shadow-sm transition-all transform-gpu hover:-translate-y-1 hover:shadow-2xl ${
                  isDark ? "border-slate-700 bg-slate-800 hover:border-slate-500" : "border-blue-100 bg-white hover:border-blue-300"
                }`}
              >
                <h3 className={`font-semibold ${isDark ? "text-slate-100" : "text-blue-900"}`}>{cat}</h3>
                <ul className={`mt-3 space-y-2 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {items.map(({ name, source }) => (
                    <li key={name} className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span>- {name}</span>
                      {source && (
                        <span className={`text-xs italic ${isDark ? "text-slate-400" : "text-slate-500"}`}>({source})</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`w-full border-y ${isDark ? "bg-slate-950/70 border-slate-800" : "bg-blue-50/70 border-blue-100"}`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-blue-900"}`}>Contact</h2>
          <p className={`mt-2 max-w-prose ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Seeking Summer 2027 internships in {TARGET_ROLES}. Email is the best way to reach me.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className={`inline-flex min-w-0 max-w-full items-center gap-2 rounded-2xl px-4 py-2 border break-all ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Mail className={`h-4 w-4 shrink-0 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-w-0 max-w-full items-center gap-2 rounded-2xl px-4 py-2 border break-all ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Github className={`h-4 w-4 shrink-0 ${isDark ? "text-slate-200" : "text-blue-700"}`} />{" "}
              {PROFILE.github.replace(/^https?:\/\//, "").replace(/\?.*$/, "")}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-w-0 max-w-full items-center gap-2 rounded-2xl px-4 py-2 border break-all ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Linkedin className={`h-4 w-4 shrink-0 ${isDark ? "text-slate-200" : "text-blue-700"}`} />{" "}
              {PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
            <a
              {...RESUME_LINK_PROPS}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Download className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      <footer className={`py-10 text-center text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        (c) {new Date().getFullYear()} {PROFILE.name}
      </footer>

      <style jsx>{`
        @keyframes arrowSlideX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(12px);
          }
        }
        .arrow-slide {
          animation: arrowSlideX 0.9s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
