"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  X,
  ExternalLink,
  Code2,
  Briefcase,
  Moon,
  Sun,
  Accessibility,
  Bot,
  BookOpen,
  Play,
} from "lucide-react";

// Featured projects appear as full cards; the rest go in the compact "More projects" list.
// `summary` and `impact` are always visible on the cover; `details` fills the open book.
const PROJECTS = [
  {
    title: "Generative Charities",
    featured: true,
    period: "Summer 2025 · Software Engineer Intern",
    tags: ["Python", "Django", "PostgreSQL", "AWS", "OAuth2"],
    stack: [
      "Python",
      "Django",
      "HTML",
      "PostgreSQL",
      "Amazon RDS",
      "AWS Elastic Beanstalk",
      "AWS EC2",
      "Amazon S3",
      "Epic OAuth2",
      "FHIR APIs",
    ],
    summary:
      "A full-stack web platform that gives underfunded U.S. charities a public-facing space to showcase their mission, programs, and impact data to donors, enabling more personalized, one-on-one engagement.",
    impact: {
      label: "My contribution",
      text: "Built the dashboard, search, and login in Django and architected the AWS deployment (RDS, Elastic Beanstalk, EC2).",
    },
    demoSources: ["/gc-demo.mp4"],
    poster: "/gc-poster.jpg",
    details: {
      problem:
        "Underfunded U.S. charities need a public-facing way to present their mission, programs, and impact data to donors and expand their reach, without dedicated DevOps support.",
      contribution: [
        "Built the dashboard, search functionality, and authentication system (login/logout) using Python, Django, and HTML",
        "Implemented Epic OAuth2 authentication and integrated FHIR APIs to fetch patient medical observation data",
        "Conducted systems analysis to identify strategies that help local charities expand their reach and provide more personalized support to people in need",
      ],
      decisions: [
        "PostgreSQL on Amazon RDS for persistent storage, Elastic Beanstalk for deployment, and EC2 for hosting, so the platform could scale without dedicated DevOps support",
        "Aggregated analytics into CSV files stored in Amazon S3",
      ],
      results:
        "Delivered a working platform on AWS with a dashboard, search, and authentication. The demo video shows it in use.",
    },
  },
  {
    title: "ADA Digital Accessibility Case Study",
    featured: true,
    period: "2025 · SYS 2001: Systems Engineering Concepts",
    tags: ["Systems Analysis", "Stakeholder Analysis", "Requirements Engineering", "Decision Analysis"],
    stack: ["Systems Analysis", "Stakeholder Analysis", "Requirements Engineering", "Decision Analysis"],
    summary:
      "A systems engineering study of UVA's WCAG 2.1 A/AA accessibility compliance gap affecting ~2,400 faculty across 12 schools, ending in a recommended faculty reminder workflow.",
    impact: {
      label: "Outcome",
      text: "Our group was selected as the top group to present to the class.",
    },
    placeholderIcon: Accessibility,
    details: {
      problem: "UVA has a WCAG 2.1 A/AA digital accessibility compliance gap affecting ~2,400 faculty across 12 schools.",
      contribution: [
        "Ran a full systems engineering lifecycle with my group: stakeholder analysis, requirements, decision analysis, and recommendation",
      ],
      decisions: [
        "Applied decision analysis to recommend a two-tier opt-in workflow over fixed-cadence emails: faculty who have started receive monthly reminders, and reminders stop once they complete, using frequency as the behavioral lever",
      ],
      results: "Our group was selected as the top group to present to the class.",
    },
  },
  {
    title: "VR Towers of Hanoi Research",
    featured: true,
    period: "Spring 2025",
    tags: ["Unity", "C#", "VR", "Natural User Interfaces"],
    stack: ["Unity", "C#", "VR", "Natural User Interfaces"],
    summary:
      "An interactive VR study of how gesture-based interaction affects student learning and peer-to-peer teaching, built around a Towers of Hanoi game in Unity.",
    impact: {
      label: "My contribution",
      text: "Developed the Towers of Hanoi game in Unity (C#) and analyzed prior research on Natural User Interfaces in education.",
    },
    repo: "",
    demo: "",
    images: ["/hanoi-1.jpg", "/hanoi-2.jpg"],
    details: {
      problem: "How does gesture-based interaction in VR affect student learning outcomes and peer-to-peer teaching?",
      contribution: [
        "Researched the impact of gesture-based interaction on student learning outcomes within VR environments",
        "Analyzed prior studies on Natural User Interfaces (NUI) and their role in education and peer-to-peer teaching",
        "Developed an interactive Towers of Hanoi game in Unity (C#) to study gesture-based interaction",
      ],
      decisions: [
        "Built the study around a hands-on Towers of Hanoi game so gesture-based interaction could be tested directly in VR",
      ],
      results: "Built an interactive, gesture-based Towers of Hanoi game in Unity, shown in the screenshots.",
    },
  },
  {
    title: "NASA Lunabotics Robot (MARS)",
    period: "2025 – Present · Mechatronics and Robotics Society",
    tags: ["Python", "C++", "GitHub", "Systems Analysis"],
    stack: ["Python", "C++", "GitHub", "Systems Analysis"],
    summary:
      "Member of the Computer and Systems Engineering subteams building a robot for the NASA Lunabotics competition.",
    impact: {
      label: "My role",
      text: "Apply systems analysis to design and integrate the robot, using Python, C++, and GitHub to connect all subsystems.",
    },
    placeholderIcon: Bot,
    details: {
      problem: "Build a competition robot for NASA Lunabotics whose subsystems work together reliably.",
      contribution: [
        "Apply systems analysis to design and integrate the robot, using Python, C++, and GitHub to connect all subsystems",
      ],
      results: "In progress (2025 – Present).",
    },
  },
];

const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
const MORE_PROJECTS = PROJECTS.filter((p) => !p.featured);

const PROFILE = {
  name: "Bradley Elder",
  headshot: "/headshot.jpg",
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/BradleyE99?tab=repositories",
  linkedin: "https://www.linkedin.com/in/bradleyjelder21",
  resume: "/Resume_Elder_Bradley.pdf",
  tagline: "Third-year UVA student • Systems Engineering & Computer Science",
  seeking: "Seeking AI Engineering, Software Engineering, and Forward Deployed Engineering opportunities.",
  about:
    "I like building software and exploring how AI can solve practical problems. I want to build integrations, AI agents, and software that start from what users actually need, and I'm seeking a Summer 2027 internship.",
  education:
    "University of Virginia, Charlottesville, VA · B.S. Computer Science and B.S. Systems and Information Engineering · Graduating May 2028",
  interests: "Playing soccer, supporting Chelsea FC, running, and working out.",
};

// One short row in the intro; every entry is backed by the resume and the work below.
const SKILLS = [
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "C++",
  "C#",
  "Django",
  "React / Next.js",
  "AWS",
  "PostgreSQL",
  "REST APIs",
  "Boomi",
  "Salesforce",
  "Copilot Studio",
  "Power Automate",
];

const JOBS = [
  {
    role: "Software Engineering Intern",
    company: "Idemia Public Security",
    period: "Summer 2026 – December 2026",
    location: "Reston, VA",
    wide: true,
    summary:
      "Building data integrations and an AI support agent for Idemia's Public Security department. Retained beyond the standard internship term through December 2026 based on performance, continuing to lead data integration and AI chatbot initiatives.",
    bullets: [
      "Engineered a REST API integration pipeline in Groovy and JavaScript on Boomi (iPaaS) that transforms and caches ADP employee records to sync with Salesforce, automating real-time identity provisioning and deprovisioning tied to employment status and replacing manual onboarding/offboarding for the entire 5,000+ person Public Security department.",
      "Built an internal IT support agent using Microsoft Copilot Studio, Power Automate, and Dataverse that handles common Tier 1/2 helpdesk requests without human involvement, freeing IT staff for higher-priority work.",
      "Designed Power Automate escalation flows for manager approval and authored the agent's instruction set and knowledge base to ground its responses.",
    ],
    tech: ["Groovy", "JavaScript", "Boomi", "REST APIs", "Salesforce", "Copilot Studio", "Power Automate", "Dataverse"],
  },
  {
    role: "Software Engineer Intern",
    company: "Generative Charities",
    period: "Summer 2025",
    location: "Centreville, VA",
    summary:
      "Applied both technical and analytical skills to support a nonprofit startup focused on empowering smaller U.S. charities: built its Django platform, architected its AWS infrastructure, and pulled medical data through open.epic APIs.",
    bullets: [],
    tech: [],
    project: "Generative Charities",
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
  },
];

const NAV_LINKS = [
  ["Projects", "#projects"],
  ["About", "#about"],
];

const RESUME_LINK_PROPS = {
  href: PROFILE.resume,
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": "Resume (PDF, opens in a new tab)",
};

const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" };

// Matches the CSS fold-away animation so the open book unmounts once it finishes.
const BOOK_CLOSE_MS = 160;

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const isVideoUrl = (url) => /\.mp4($|\?)/i.test(url);
const getVideoSources = (p) => p.demoSources || (p.demo && isVideoUrl(p.demo) ? [p.demo] : []);
const hasLiveDemo = (p) => p.demo && !isVideoUrl(p.demo);
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [videoLoadError, setVideoLoadError] = useState({});
  const [videoSourceErrorCount, setVideoSourceErrorCount] = useState({});
  // Only one project book is open at a time; `closing` keeps it mounted while it folds away.
  const [book, setBook] = useState({ title: null, closing: false });
  const [breakpoint, setBreakpoint] = useState("sm");
  const closeTimer = useRef(null);
  const focusBookOnOpen = useRef(false);
  const bookRef = useRef(null);
  const bookHeadingRef = useRef(null);
  const bookToggleRefs = useRef({});
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

  // The open book is inserted after the last cover in its row, so track the breakpoint
  // that sets how many covers share a row (mirrors the md: and lg: grid classes below).
  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");
    const update = () => setBreakpoint(lg.matches ? "lg" : md.matches ? "md" : "sm");
    update();
    lg.addEventListener("change", update);
    md.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      md.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!book.title || book.closing || !focusBookOnOpen.current) return;
    focusBookOnOpen.current = false;
    bookHeadingRef.current?.focus({ preventScroll: true });
    bookRef.current?.scrollIntoView({ block: "nearest", behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [book]);

  const openBook = (title) => {
    clearTimeout(closeTimer.current);
    focusBookOnOpen.current = true;
    setBook({ title, closing: false });
  };

  const closeBook = (returnFocus) => {
    if (!book.title || book.closing) return;
    const { title } = book;
    setBook({ title, closing: true });
    closeTimer.current = setTimeout(() => setBook({ title: null, closing: false }), BOOK_CLOSE_MS);
    if (returnFocus) bookToggleRefs.current[title]?.focus();
  };

  const toggleBook = (title) => {
    if (book.title === title && !book.closing) closeBook(false);
    else openBook(title);
  };

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

  // Shared theme-aware class names. Light mode uses the UVA palette; dark mode uses the
  // "Deep Blue Waters" palette (dbw-*) defined in globals.css.
  const ui = {
    heading: isDark ? "text-dbw-heading" : "text-uva-navy",
    body: isDark ? "text-dbw-text" : "text-slate-700",
    meta: isDark ? "text-dbw-muted" : "text-slate-600",
    icon: isDark ? "text-dbw-300" : "text-uva-navy",
    accentBorder: isDark ? "border-dbw-300" : "border-uva-orange",
    marker: isDark ? "marker:text-dbw-300" : "marker:text-uva-orange",
    divider: isDark ? "border-dbw-700" : "border-uva-navy-100",
    sectionAlt: isDark ? "bg-dbw-850 border-dbw-700" : "bg-white border-uva-navy-100",
    sectionBase: isDark ? "bg-dbw border-dbw-700" : "bg-uva-navy-50 border-uva-navy-100",
    panel: `rounded-3xl border ${isDark ? "border-dbw-700 bg-dbw-750" : "border-uva-navy-100 bg-white"}`,
    card: `rounded-2xl border shadow-sm transition-colors ${
      isDark
        ? "border-dbw-700 bg-dbw-750 hover:border-dbw-300 focus-within:border-dbw-300"
        : "border-uva-navy-100 bg-white hover:border-uva-orange focus-within:border-uva-orange"
    }`,
    chip: `text-xs border rounded-lg px-2 py-0.5 ${
      isDark ? "border-dbw-650 bg-dbw-700 text-dbw-text" : "border-uva-navy-100 bg-uva-navy-50 text-uva-navy"
    }`,
    button: `inline-flex items-center gap-2 rounded-xl px-3 py-1.5 border text-sm font-medium transition-colors ${
      isDark
        ? "border-dbw-650 bg-dbw-750 text-dbw-text hover:border-dbw-300 hover:bg-dbw-700"
        : "border-uva-navy-200 bg-white text-uva-navy hover:border-uva-orange hover:bg-uva-orange-50"
    }`,
    buttonPrimary: `inline-flex items-center gap-2 rounded-xl px-3 py-1.5 border text-sm font-semibold text-white transition-colors ${
      isDark
        ? "border-dbw-600 bg-dbw-600 hover:bg-dbw-650 hover:border-dbw-300"
        : "border-uva-navy bg-uva-navy hover:bg-uva-navy-700 hover:border-uva-orange"
    }`,
    link: `inline-flex items-center gap-1 text-sm font-medium underline decoration-2 underline-offset-4 hover:no-underline ${
      isDark ? "text-dbw-300 decoration-dbw-300" : "text-uva-navy decoration-uva-orange"
    }`,
    navLink: `rounded-md text-sm text-white/90 hover:text-white underline-offset-8 decoration-2 hover:underline ${
      isDark ? "decoration-dbw-300" : "decoration-uva-orange"
    }`,
  };

  const sectionHeading = (label, Icon, id) => (
    <h2 id={id} className={`text-2xl font-bold flex items-center gap-2 ${ui.heading}`}>
      {Icon && <Icon className={`h-5 w-5 ${ui.icon}`} aria-hidden="true" />}
      <span className={`border-b-4 pb-0.5 ${ui.accentBorder}`}>{label}</span>
    </h2>
  );

  const renderTags = (tags, className = "") => (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Technologies">
      {tags.map((t) => (
        <li key={t} className={ui.chip}>
          {t}
        </li>
      ))}
    </ul>
  );

  // Every project picture/video sits in the same bordered 16:9 frame on covers and open books.
  const mediaFrame = `aspect-video w-full overflow-hidden rounded-xl border-2 ${
    isDark ? "border-dbw-300 bg-dbw-900" : "border-uva-navy bg-uva-navy-50"
  }`;

  // Covers show the poster rather than a second <video>, so the only playable copy
  // (with its controls) lives inside the open book and nothing downloads until then.
  const renderProjectPreview = (p) => {
    if (getVideoSources(p).length && p.poster) {
      return (
        <div className={`relative h-full w-full ${isDark ? "bg-dbw-900" : "bg-uva-navy-950"}`}>
          <img src={p.poster} alt={`${p.title} demo preview`} className="h-full w-full object-contain" />
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-black/75 px-2 py-0.5 text-xs font-medium text-white">
            <Play className="h-3 w-3" aria-hidden="true" /> Video demo in Details
          </span>
        </div>
      );
    }
    return renderProjectMedia(p, false);
  };

  const renderProjectMedia = (p, inBook) => {
    const videoSources = getVideoSources(p);
    const videoBg = isDark ? "bg-dbw-900" : "bg-uva-navy-950";

    if (videoSources.length && !videoLoadError[p.title]) {
      return (
        <video
          className={`h-full w-full object-contain ${videoBg}`}
          controls
          playsInline
          preload="none"
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
        <div className={`relative h-full w-full ${videoBg}`}>
          {p.poster && <img src={p.poster} alt="" className="h-full w-full object-contain opacity-40" />}
          <p className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-white">
            Demo video is unavailable right now.
          </p>
        </div>
      );
    }

    if (p.images?.length) {
      // The screenshots are roughly square, so showing them side by side fills the 16:9 frame
      // without cropping any of the game board. In the open book each one links to full size.
      return (
        <div
          className={`grid h-full w-full gap-2 p-2 ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} ${
            isDark ? "bg-dbw-850" : "bg-uva-navy-50"
          }`}
        >
          {p.images.map((src, i) => {
            const img = (
              <img src={src} alt={`${p.title} screenshot ${i + 1}`} className="h-full w-full min-h-0 object-contain" />
            );
            return inBook ? (
              <a key={src} href={src} {...EXTERNAL_LINK_PROPS} className="block min-h-0" title="Open full size">
                {img}
                <span className="sr-only"> (open full size in a new tab)</span>
              </a>
            ) : (
              <Fragment key={src}>{img}</Fragment>
            );
          })}
        </div>
      );
    }

    const Icon = p.placeholderIcon || Code2;
    return (
      <div
        aria-hidden="true"
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
          isDark ? "from-dbw-900 to-dbw-700" : "from-uva-navy to-uva-navy-600"
        }`}
      >
        <Icon className={`h-12 w-12 ${isDark ? "text-dbw-300" : "text-uva-orange"}`} strokeWidth={1.5} />
      </div>
    );
  };

  const renderProjectLinks = (p) => (
    <>
      {p.repo && (
        <a href={p.repo} {...EXTERNAL_LINK_PROPS} aria-label={`GitHub: ${p.title}`} className={ui.link}>
          <Github className="h-4 w-4" aria-hidden="true" /> GitHub
        </a>
      )}
      {hasLiveDemo(p) && (
        <a href={p.demo} {...EXTERNAL_LINK_PROPS} aria-label={`Live Demo: ${p.title}`} className={ui.link}>
          <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo
        </a>
      )}
    </>
  );

  const renderDetailsToggle = (p, className = "") => {
    const isOpen = book.title === p.title && !book.closing;
    return (
      <button
        type="button"
        ref={(el) => {
          bookToggleRefs.current[p.title] = el;
        }}
        onClick={() => toggleBook(p.title)}
        aria-expanded={isOpen}
        aria-controls={isOpen ? `project-${slugify(p.title)}-details` : undefined}
        aria-label={`${isOpen ? "Close details" : "Details"}: ${p.title}`}
        className={`${isOpen ? ui.button : ui.buttonPrimary} ${className}`}
      >
        {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <BookOpen className="h-4 w-4" aria-hidden="true" />}
        {isOpen ? "Close details" : "Details"}
      </button>
    );
  };

  const coverBorder = (p) =>
    book.title === p.title && !book.closing
      ? isDark
        ? "border-dbw-300"
        : "border-uva-orange"
      : isDark
        ? "border-dbw-700 hover:border-dbw-300 focus-within:border-dbw-300"
        : "border-uva-navy-100 hover:border-uva-orange focus-within:border-uva-orange";

  const renderImpact = (p) => (
    <p className={`text-sm leading-relaxed ${ui.body}`}>
      <span className={`font-semibold ${ui.heading}`}>{p.impact.label}:</span> {p.impact.text}
    </p>
  );

  const renderFeaturedCover = (p) => (
    <article
      id={`project-${slugify(p.title)}`}
      className={`book-cover relative flex h-full flex-col rounded-l-md rounded-r-2xl border pl-3 transition-colors ${
        isDark ? "bg-dbw-750" : "bg-white"
      } ${coverBorder(p)}`}
    >
      <span className="book-spine" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-4">
        <div className={mediaFrame}>{renderProjectPreview(p)}</div>
        <h3 className={`mt-3 text-lg font-semibold leading-snug ${ui.heading}`}>{p.title}</h3>
        <p className={`text-xs ${ui.meta}`}>{p.period}</p>
        <p className={`mt-2 leading-relaxed ${ui.body}`}>{p.summary}</p>
        <div className="mt-2">{renderImpact(p)}</div>
        {renderTags(p.tags, "mt-3")}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          {renderDetailsToggle(p)}
          {renderProjectLinks(p)}
        </div>
      </div>
    </article>
  );

  const renderCompactCover = (p) => (
    <article
      id={`project-${slugify(p.title)}`}
      className={`book-cover relative flex h-full flex-col gap-4 rounded-l-md rounded-r-2xl border p-4 pl-7 sm:flex-row ${
        isDark ? "bg-dbw-750" : "bg-white"
      } ${coverBorder(p)}`}
    >
      <span className="book-spine" aria-hidden="true" />
      <div className={`sm:w-40 sm:shrink-0 sm:self-start ${mediaFrame}`}>{renderProjectPreview(p)}</div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h4 className={`font-semibold leading-snug ${ui.heading}`}>{p.title}</h4>
        <p className={`text-xs ${ui.meta}`}>{p.period}</p>
        <p className={`mt-1.5 text-sm leading-relaxed ${ui.body}`}>{p.summary}</p>
        <div className="mt-1.5">{renderImpact(p)}</div>
        {renderTags(p.tags, "mt-2")}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          {renderDetailsToggle(p)}
          {renderProjectLinks(p)}
        </div>
      </div>
    </article>
  );

  const renderOpenBook = (p) => {
    const slug = slugify(p.title);
    const { problem, contribution = [], decisions = [], results } = p.details;
    const pageColors = isDark ? "border-dbw-600 bg-dbw-750" : "border-uva-navy-200 bg-white";
    const subheading = `text-xs font-semibold uppercase tracking-wider ${ui.heading}`;
    const list = `mt-1.5 list-disc pl-5 text-sm space-y-1 ${ui.marker} ${ui.body}`;

    return (
      <div
        ref={bookRef}
        id={`project-${slug}-details`}
        role="region"
        aria-labelledby={`project-${slug}-heading`}
        data-state={book.closing ? "closing" : "open"}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
            closeBook(true);
          }
        }}
        className="book-open col-span-full"
      >
        <div className="grid md:grid-cols-2">
          <div
            className={`book-page-left rounded-t-2xl border border-b-0 p-5 shadow-lg md:rounded-l-2xl md:rounded-tr-none md:border-b md:border-r-0 md:p-6 ${pageColors}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3
                  id={`project-${slug}-heading`}
                  ref={bookHeadingRef}
                  tabIndex={-1}
                  className={`text-xl font-bold leading-tight ${ui.heading}`}
                >
                  {p.title}
                </h3>
                <p className={`mt-0.5 text-sm ${ui.meta}`}>{p.period}</p>
              </div>
              <button
                type="button"
                onClick={() => closeBook(true)}
                aria-label={`Close ${p.title} details`}
                className={`shrink-0 ${ui.button}`}
              >
                <X className={`h-4 w-4 ${ui.icon}`} aria-hidden="true" /> Close
              </button>
            </div>
            <div className={`mt-4 ${mediaFrame}`}>{renderProjectMedia(p, true)}</div>
            <h4 className={`mt-4 ${subheading}`}>Technologies</h4>
            {renderTags(p.stack, "mt-1.5")}
            {(p.repo || hasLiveDemo(p)) && (
              <div className="mt-4 flex flex-wrap gap-4">{renderProjectLinks(p)}</div>
            )}
          </div>
          <div
            className={`book-page-right space-y-4 rounded-b-2xl border p-5 shadow-lg md:rounded-r-2xl md:rounded-bl-none md:p-6 ${pageColors}`}
          >
            {problem && (
              <div>
                <h4 className={subheading}>Problem</h4>
                <p className={`mt-1.5 text-sm leading-relaxed ${ui.body}`}>{problem}</p>
              </div>
            )}
            {contribution.length > 0 && (
              <div>
                <h4 className={subheading}>My Contribution</h4>
                <ul className={list}>
                  {contribution.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {decisions.length > 0 && (
              <div>
                <h4 className={subheading}>Technical Decisions</h4>
                <ul className={list}>
                  {decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
            {results && (
              <div>
                <h4 className={subheading}>Results</h4>
                <p className={`mt-1.5 text-sm leading-relaxed ${ui.body}`}>{results}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Renders a grid of covers with the open book (if it belongs to this grid) inserted
  // after the last cover in its row, so it spans the full width right below it.
  const renderBookGrid = (projects, columns, className, renderCover) => {
    const openIndex = projects.findIndex((p) => p.title === book.title);
    const bookAfterIndex =
      openIndex < 0 ? -1 : Math.min(Math.ceil((openIndex + 1) / columns) * columns, projects.length) - 1;
    return (
      <div className={className}>
        {projects.map((p, i) => (
          <Fragment key={p.title}>
            {renderCover(p)}
            {i === bookAfterIndex && renderOpenBook(projects[openIndex])}
          </Fragment>
        ))}
      </div>
    );
  };

  const contactLinks = [
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: PROFILE.github, label: "GitHub", Icon: Github, external: true },
  ];

  return (
    <div
      className={
        isDark ? "min-h-screen bg-dbw text-dbw-text" : "min-h-screen bg-gradient-to-b from-uva-navy-50 to-white text-slate-800"
      }
    >
      <header
        className={`sticky top-0 z-30 backdrop-blur border-b-2 ${
          isDark ? "bg-dbw-900/95 border-dbw-600" : "bg-uva-navy/95 border-uva-orange"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-white">
          <a href="#home" className="flex items-center gap-2 font-semibold rounded-md" aria-label={`${PROFILE.name}, back to top`}>
            <Code2 className={`h-5 w-5 ${isDark ? "text-dbw-300" : "text-uva-orange"}`} aria-hidden="true" />
            <span className="hidden sm:inline">{PROFILE.name}</span>
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
              {NAV_LINKS.map(([label, href]) => (
                <a key={label} href={href} className={ui.navLink}>
                  {label}
                </a>
              ))}
              <a
                {...RESUME_LINK_PROPS}
                className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 border text-sm text-white transition-colors ${
                  isDark ? "border-dbw-300 hover:bg-dbw-300/15" : "border-uva-orange hover:bg-uva-orange/20"
                }`}
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Resume
              </a>
            </nav>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 border border-white/30 bg-white/10 text-sm text-white hover:bg-white/20 transition-colors"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-4 py-6 md:py-8">
          <div className="flex items-center gap-4 md:gap-5">
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className={`h-16 w-16 shrink-0 rounded-full border-[3px] object-cover shadow-sm md:h-24 md:w-24 ${ui.accentBorder}`}
            />
            <div className="min-w-0">
              <h1 className={`text-3xl font-extrabold tracking-tight md:text-4xl ${ui.heading}`}>{PROFILE.name}</h1>
              <p className={`mt-1 text-base md:text-lg ${ui.body}`}>{PROFILE.tagline}</p>
              <p className={`mt-0.5 text-sm md:text-base ${ui.meta}`}>{PROFILE.seeking}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a {...RESUME_LINK_PROPS} className={ui.buttonPrimary}>
              <Download className="h-4 w-4" aria-hidden="true" /> Resume (PDF)
            </a>
            {contactLinks.map(({ href, label, Icon, external }) => (
              <a key={label} href={href} {...(external ? EXTERNAL_LINK_PROPS : {})} className={ui.button}>
                <Icon className={`h-4 w-4 ${ui.icon}`} aria-hidden="true" /> {label}
              </a>
            ))}
          </div>
          <div id="skills" className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${ui.heading}`}>Skills</h2>
            {renderTags(SKILLS)}
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className={`w-full overflow-x-clip border-y ${ui.sectionAlt}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-8">
            {sectionHeading("Selected Projects", null, "projects-heading")}
            {renderBookGrid(
              FEATURED_PROJECTS,
              breakpoint === "lg" ? 3 : breakpoint === "md" ? 2 : 1,
              "mt-5 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-3",
              renderFeaturedCover,
            )}

            {MORE_PROJECTS.length > 0 && (
              <>
                <h3 className={`mt-8 text-sm font-semibold uppercase tracking-wider ${ui.heading}`}>More projects</h3>
                {renderBookGrid(
                  MORE_PROJECTS,
                  breakpoint === "sm" || MORE_PROJECTS.length < 2 ? 1 : 2,
                  // A lone extra project spans the row instead of leaving half of it empty.
                  `mt-3 grid grid-cols-1 gap-x-5 gap-y-6 ${MORE_PROJECTS.length > 1 ? "md:grid-cols-2" : ""}`,
                  renderCompactCover,
                )}
              </>
            )}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className={`w-full border-b ${ui.sectionBase}`}>
          <div className="mx-auto max-w-6xl px-4 py-8">
            {sectionHeading("Experience", Briefcase, "experience-heading")}
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {JOBS.map((j) => (
                <article
                  key={`${j.company}-${j.role}`}
                  className={`p-4 md:p-5 ${ui.card} ${j.wide ? "md:col-span-2" : ""}`}
                >
                  <h3 className={`text-lg font-semibold leading-snug ${ui.heading}`}>
                    {j.role} - {j.company}
                  </h3>
                  <p className={`text-xs ${ui.meta}`}>
                    {j.period}
                    {j.location && ` · ${j.location}`}
                  </p>
                  {j.summary && <p className={`mt-2 text-sm leading-relaxed ${ui.body}`}>{j.summary}</p>}
                  {j.bullets.length > 0 && (
                    <ul className={`mt-2 list-disc pl-5 text-sm space-y-1 ${ui.marker} ${ui.body}`}>
                      {j.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {j.tech.length > 0 && renderTags(j.tech, "mt-3")}
                  {j.project && (
                    <a
                      href={`#project-${slugify(j.project)}`}
                      onClick={() => openBook(j.project)}
                      className={`mt-3 ${ui.link}`}
                    >
                      <BookOpen className="h-4 w-4" aria-hidden="true" /> See the {j.project} project details
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-4 py-8">
          <div className={`mx-auto max-w-3xl p-5 text-center md:p-6 ${ui.panel}`}>
            <h2 id="about-heading" className={`text-xl font-bold ${ui.heading}`}>
              About Me
            </h2>
            <p className={`mt-2 leading-relaxed ${ui.body}`}>{PROFILE.about}</p>
            <p className={`mt-3 text-sm leading-relaxed ${ui.body}`}>
              <span className={`font-semibold ${ui.heading}`}>Education:</span> {PROFILE.education}
            </p>
            <p className={`mt-1 text-sm leading-relaxed ${ui.body}`}>
              <span className={`font-semibold ${ui.heading}`}>Interests:</span> {PROFILE.interests}
            </p>
            <div id="contact" className={`mt-4 flex flex-wrap items-center justify-center gap-2 border-t pt-4 ${ui.divider}`}>
              <a href={`mailto:${PROFILE.email}`} className={`min-w-0 max-w-full break-all ${ui.button}`}>
                <Mail className={`h-4 w-4 shrink-0 ${ui.icon}`} aria-hidden="true" /> {PROFILE.email}
              </a>
              {contactLinks
                .filter((l) => l.external)
                .map(({ href, label, Icon }) => (
                  <a key={label} href={href} {...EXTERNAL_LINK_PROPS} className={ui.button}>
                    <Icon className={`h-4 w-4 shrink-0 ${ui.icon}`} aria-hidden="true" /> {label}
                  </a>
                ))}
              <a {...RESUME_LINK_PROPS} className={ui.buttonPrimary}>
                <Download className="h-4 w-4" aria-hidden="true" /> Resume (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`border-t-2 py-5 text-center text-xs ${
          isDark ? "border-dbw-600 bg-dbw-900 text-dbw-muted" : "border-uva-orange bg-uva-navy text-white/80"
        }`}
      >
        (c) {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}
