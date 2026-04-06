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
    stack: ["Django", "AWS EB", "S3", "PostgreSQL", "OAuth2"],
    blurb:
      "Developed a web application to promote smaller charities across the United States, enabling more personalized, one-on-one engagement with donors.",
    demoSources: ["/gc-demo.mp4", "/gc-demo.webm", "/gc-demo.mov"],
    poster: "/gc-poster.jpg",
    highlights: [
      "Implemented Epic OAuth2 authentication and integrated FHIR APIs to fetch patient medical observation data",
      "",
      "Aggregated analytics into CSV files stored in Amazon S3, and managed user data with a PostgreSQL database",
      "",
      "Built a dashboard, search functionality, and authentication system (login/logout) using Python, Django, HTML",
      "",
      "Deployed the full-stack application on AWS Elastic Beanstalk, ensuring scalable and reliable performance",
    ],
  },
  {
    title: "VR Towers of Hanoi Research",
    period: "2025 Spring",
    stack: ["Unity", "C#", "NUI"],
    blurb:
      "Interactive VR study on gesture-based learning and peer-to-peer teaching.",
    repo: "",
    demo: "",
    highlights: [
      "Researched the impact of gesture-based interaction on student learning outcomes within VR environments",
      "",
      "Analyzed prior studies on Natural User Interfaces (NUI) and their role in education and peer-to-peer teaching.",
      "",
      "Developed an interactive Towers of Hanoi game in Unity (C#) to study gesture-based interaction",
    ],
    images: ["/hanoi-1.jpg", "/hanoi-2.jpg"],
    layout: "right-images",
  },
];

const PROFILE = {
  name: "Bradley Elder",
  role: "Systems Engineering & Computer Science Major @ UVA",
  headshot: "/headshot.jpg",
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/BradleyE99?tab=repositories",
  linkedin: "https://www.linkedin.com/in/bradleyjelder21",
  resume: "/Resume_Elder_Bradley_v12.pdf",
  aboutIntro:
    "Second-year Systems Engineering student at UVA, seeking summer internship opportunities. I like connecting people, processes, and technology to design solutions that work in the real world.",
  aboutBullets: [
    "From Fairfax, VA; Systems Engineering + CS Major",
    "Hands-on with Django, AWS EB, S3, SQL, and Python",
    "Interested in data analytics, Tech consulting, data science, and software engineering",
  ],
  objectives: [
    "Seeking a Summer 2026 internship to apply Systems Engineering and Computer Science skills in Data Analytics, Data Science, Software Engineering, or Technology Consulting.",
  ],
};

const JOBS = [
  {
    role: "Software Engineering Intern",
    company: "Generative Charities",
    period: "Summer 2025",
    summary:
      "During my internship at Generative Charities, I applied both technical and analytical skills to support a nonprofit startup focused on empowering smaller U.S. charities.",
    bullets: [
      "Conducted systems analysis to identify strategies that help local charities expand their reach and provide more personalized support to people in need.",
      "Built and deployed a web platform using Python, HTML, and Amazon Web Services (AWS), aligning technical solutions with the organization's mission and values.",
      "Utilized open.epic to pull medical data using APIs.",
    ],
    tech: ["Django", "AWS EB", "S3", "PostgreSQL", "Python", "GitHub"],
    link: "",
  },
];

const SKILLS = {
  Languages: [
    { name: "Python", source: "UVA Coursework" },
    { name: "Java", source: "UVA Coursework" },
    { name: "C#", source: "VR Towers of Hanoi Research" },
    { name: "SQL", source: "Generative Charities" },
  ],
  Frameworks: [
    { name: "Django", source: "Generative Charities" },
    { name: "React", source: "Portfolio Website" },
    { name: "Next.js", source: "Portfolio Website" },
    { name: "Unity/C#", source: "VR Towers of Hanoi Research" },
  ],
  Cloud: [
    { name: "AWS Elastic Beanstalk", source: "Generative Charities" },
    { name: "Amazon S3", source: "Generative Charities" },
    { name: "Amazon RDS", source: "Generative Charities" },
  ],
  Databases: [{ name: "PostgreSQL", source: "Generative Charities" }],
};

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [hanoiIdx, setHanoiIdx] = useState(0);
  const [theme, setTheme] = useState("light");
  const [videoLoadError, setVideoLoadError] = useState({});
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
            <nav className="hidden md:flex items-center gap-6">
              <a href="#projects" className={isDark ? "hover:text-slate-300" : "hover:text-blue-200"}>
                Projects
              </a>
              <a href="#jobs" className={isDark ? "hover:text-slate-300" : "hover:text-blue-200"}>
                Jobs
              </a>
              <a href="#skills" className={isDark ? "hover:text-slate-300" : "hover:text-blue-200"}>
                Skills
              </a>
              <a href="#contact" className={isDark ? "hover:text-slate-300" : "hover:text-blue-200"}>
                Contact
              </a>
              <a
                href={PROFILE.resume}
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
            <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div
            className={`md:hidden border-t text-white ${
              isDark ? "border-slate-800 bg-slate-950/98" : "border-blue-800 bg-blue-900/98"
            }`}
          >
            <div className="px-4 py-2 flex flex-col gap-2">
              {[
                ["Projects", "#projects"],
                ["Jobs", "#jobs"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
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
                href={PROFILE.resume}
                className={`py-2 inline-flex items-center gap-2 ${isDark ? "hover:text-slate-300" : "hover:text-blue-200"}`}
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
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
              <span className={isDark ? "text-slate-200" : "text-[#232D4B]"}>Systems Engineering & Computer Science Major</span>{" "}
              <span className={isDark ? "text-amber-400" : "text-[#E57200]"}>@ UVA</span>
            </p>
            <h1 className={`mt-1 text-4xl md:text-5xl font-extrabold leading-tight ${isDark ? "text-slate-100" : "text-blue-900"}`}>
              {PROFILE.name}
            </h1>
            <p className={`mt-4 leading-relaxed max-w-prose ${isDark ? "text-slate-300" : "text-slate-700"}`}>{PROFILE.aboutIntro}</p>
            <ul className={`mt-3 grid gap-2 max-w-prose list-disc list-inside ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              {PROFILE.aboutBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className={`mt-6 rounded-2xl border p-4 ${isDark ? "border-slate-700 bg-slate-800/70" : "border-blue-100 bg-white/70"}`}>
              <h3 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-blue-900"}`}>Objectives</h3>
              <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{PROFILE.objectives[0]}</p>
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
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                  isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
                }`}
              >
                <Github className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                  isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
                }`}
              >
                <Linkedin className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> LinkedIn
              </a>
              <a
                href={PROFILE.resume}
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
                      <ul className={`mt-3 list-disc list-inside text-sm space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
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
                    <ul className={`mt-3 list-disc list-inside text-sm space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {p.highlights
                        .filter((h) => h.trim() !== "")
                        .map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                    </ul>
                    <div className="mt-4 flex flex-col gap-3">
                      {(p.demoSources?.length || (p.demo && /\.mp4($|\?)/i.test(p.demo))) && !videoLoadError[p.title] ? (
                        <video
                          className={`w-full rounded-2xl border ${isDark ? "border-slate-700 bg-slate-900" : "border-blue-100 bg-slate-100"}`}
                          controls
                          playsInline
                          poster={p.poster || "/thumbnail.png"}
                          onError={() =>
                            setVideoLoadError((prev) => ({
                              ...prev,
                              [p.title]: true,
                            }))
                          }
                        >
                          {(p.demoSources || [p.demo]).map((src) => (
                            <source key={src} src={src} type={getVideoMimeType(src)} />
                          ))}
                          Your browser does not support the video tag.
                        </video>
                      ) : (p.demoSources?.length || (p.demo && /\.mp4($|\?)/i.test(p.demo))) && videoLoadError[p.title] ? (
                          <div
                            className={`rounded-2xl border p-3 text-sm ${
                              isDark ? "border-slate-700 bg-slate-900 text-slate-300" : "border-blue-100 bg-slate-50 text-slate-700"
                            }`}
                          >
                            Demo video is unavailable right now. Add
                            {" "}
                            <code>/public/gc-demo.mp4</code>
                            {", "}
                            <code>/public/gc-demo.webm</code>
                            {" or "}
                            <code>/public/gc-demo.mov</code>
                            {" "}
                            to enable playback.
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

      <section id="jobs" className={`w-full border-y ${isDark ? "bg-slate-950/70 border-slate-800" : "bg-blue-50/70 border-blue-100"}`}>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className={`text-2xl font-bold flex items-center gap-2 ${isDark ? "text-slate-100" : "text-blue-900"}`}>
            <Briefcase className={`h-5 w-5 ${isDark ? "text-slate-300" : "text-blue-800"}`} /> Jobs
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
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-blue-700/70"}`}>{j.period}</p>
                  </div>
                  {j.link && (
                    <a href={j.link} className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                      <ExternalLink className="h-4 w-4" /> View
                    </a>
                  )}
                </div>
                <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{j.summary}</p>
                <ul className={`mt-3 list-disc list-inside text-sm space-y-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {j.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
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
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                    <li key={name} className="flex items-start gap-3">
                      <span className="shrink-0">- {name}</span>
                      <span className={`ml-auto text-right text-xs italic ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        ({source})
                      </span>
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
          <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>Open to internships and research collaborations.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Mail className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Github className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} /> {PROFILE.github.replace(/^https?:\/\//, "")}
            </a>
            <a
              href={PROFILE.linkedin}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 border ${
                isDark ? "border-slate-600 bg-slate-800 hover:bg-slate-700" : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
            >
              <Linkedin className={`h-4 w-4 ${isDark ? "text-slate-200" : "text-blue-700"}`} />{" "}
              {PROFILE.linkedin.replace(/^https?:\/\//, "")}
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
