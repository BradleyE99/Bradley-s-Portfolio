"use client";

import { useState } from "react";
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
} from "lucide-react";

// ---------- DATA ----------

const PROJECTS = [
  {
    title: "Generative Charities",
    period: "Summer 2025",
    stack: ["Django", "AWS EB", "S3", "PostgreSQL", "OAuth2"],
    blurb:
      "Developed a web application to promote smaller charities across the United States, enabling more personalized, one-on-one engagement with donors.",
    demo: "/gc-demo.mp4",
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
    layout: "right-images", // only this project gets the side-by-side layout
  },
];

const PROFILE = {
  name: "Bradley Elder",
  role: "Systems Engineering & Computer Science Major @ UVA",
  headshot: "/headshot.jpg",
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/Belder21",
  linkedin: "https://www.linkedin.com/in/bradleyjelder21",
  resume: "/Bradley_Elder_Resume.pdf",
  aboutIntro:
    "Second-year Systems Engineering student at UVA, seeking summer internship opportunities. I like connecting people, processes, and technology to design solutions that work in the real world.",
  aboutBullets: [
    "From Fairfax, VA; Systems Engineering + CS Major",
    "Hands-on with Django, AWS EB, S3, SQL, and Python",
    "Interested in data analytics, Tech consulting, data science, and software engineering",
  ],
  // NOTE: already a paragraph (no bullet!)
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
      "",
      "Built and deployed a web platform using Python, HTML, and Amazon Web Services (AWS), aligning technical solutions with the organization’s mission and values.",
      "",
      "Utilized open.epic to pull medical data using APIs.",
    ],
    tech: ["Django", "AWS EB", "S3", "PostgreSQL", "Python", "GitHub"],
    link: "",
  },
];

/** 1) Skills with sources */
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      {/* Header (dark blue) */}
      <header className="sticky top-0 z-30 bg-blue-900/95 backdrop-blur border-b border-blue-800 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-white">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Code2 className="h-5 w-5 text-white" /> {PROFILE.name}
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:text-blue-200">Projects</a>
            <a href="#jobs" className="hover:text-blue-200">Jobs</a>
            <a href="#skills" className="hover:text-blue-200">Skills</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
            <a href={PROFILE.resume} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/30 bg-white/10 hover:bg-white/20">
              <Download className="h-4 w-4" /> Resume
            </a>
          </nav>
          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-blue-800 bg-blue-900/98 text-white">
            <div className="px-4 py-2 flex flex-col gap-2">
              {[
                ["Projects", "#projects"],
                ["Jobs", "#jobs"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="py-2 hover:text-blue-200">
                  {label}
                </a>
              ))}
              <a href={PROFILE.resume} className="py-2 inline-flex items-center gap-2 hover:text-blue-200">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1 flex justify-center">
            <img src={PROFILE.headshot} alt={`${PROFILE.name} headshot`} className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border border-blue-100 shadow-sm" />
          </div>
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-wider text-blue-700/70">{PROFILE.role}</p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">{PROFILE.name}</h1>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">{PROFILE.aboutIntro}</p>
            <ul className="mt-3 grid gap-2 text-slate-700 max-w-prose list-disc list-inside">
              {PROFILE.aboutBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            {/* 2) Objectives is a paragraph (no bullet) */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-white/70 p-4">
              <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider">Objectives</h3>
              <p className="mt-2 text-slate-700">{PROFILE.objectives[0]}</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/50 bg-blue-900 text-white hover:bg-blue-800">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={PROFILE.github} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50">
                <Github className="h-4 w-4 text-blue-700" /> GitHub
              </a>
              <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50">
                <Linkedin className="h-4 w-4 text-blue-700" /> LinkedIn
              </a>
              <a href={PROFILE.resume} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50">
                <Download className="h-4 w-4 text-blue-700" /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects band */}
      <section id="projects" className="w-full bg-white border-y border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-blue-900">Projects</h2>
          <div className="mt-6 flex flex-col gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="w-full rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300"
              >
                {/* SPECIAL LAYOUT ONLY FOR HANOI */}
                {p.layout === "right-images" ? (
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    {/* Left: text */}
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900">{p.title}</h3>
                          <p className="text-xs text-blue-700/70">{p.period}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-700">{p.blurb}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span key={t} className="text-xs border border-blue-200 bg-blue-50 text-blue-800 rounded-xl px-2 py-1">{t}</span>
                        ))}
                      </div>
                      <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                        {p.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                      {p.repo && (
                        <a href={p.repo} className="mt-3 inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                          <Github className="h-4 w-4" /> Repo
                        </a>
                      )}
                    </div>

                    {/* Right: single image carousel with next-arrow */}
                    <div className="md:col-span-1">
                      {p.images && p.images.length >= 2 && (
                        <div className="flex flex-col items-center">
                          <div className="relative w-64 md:w-72 aspect-square overflow-hidden rounded-2xl border border-blue-100">
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
                          </div>
                          <button
                            type="button"
                            onClick={() => setHanoiIdx((hanoiIdx + 1) % p.images.length)}
                            className="mt-3 inline-flex items-center justify-center h-8 w-8 rounded-full border border-blue-200 text-blue-700 hover:bg-blue-50"
                            aria-label="Show next image"
                          >
                            <ArrowRight className="h-5 w-5 arrow-slide" />
                          </button>
                          <div className="mt-2 flex gap-1.5">
                            {p.images.map((_, i) => (
                              <span
                                key={i}
                                className={`h-1.5 w-1.5 rounded-full ${i === hanoiIdx ? "bg-blue-700" : "bg-blue-200"}`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // DEFAULT LAYOUT FOR OTHER PROJECTS
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900">{p.title}</h3>
                        <p className="text-xs text-blue-700/70">{p.period}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-700">{p.blurb}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="text-xs border border-blue-200 bg-blue-50 text-blue-800 rounded-xl px-2 py-1">{t}</span>
                      ))}
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                      {p.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-col gap-3">
                      {p.demo && /\.mp4($|\?)/i.test(p.demo) ? (
                        <video className="w-full rounded-2xl border border-blue-100 bg-slate-100" controls playsInline poster={p.poster || "/thumbnail.png"}>
                          <source src={p.demo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        p.demo && (
                          <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                            <ExternalLink className="h-4 w-4" /> Live
                          </a>
                        )
                      )}
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

      {/* 3) Jobs band (different background) */}
      <section id="jobs" className="w-full bg-blue-50/70 border-y border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-800" /> Jobs
          </h2>
          <div className="mt-6 grid gap-6">
            {JOBS.map((j) => (
              <article key={`${j.company}-${j.role}`} className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">{j.role} · {j.company}</h3>
                    <p className="text-xs text-blue-700/70">{j.period}</p>
                  </div>
                  {j.link && (
                    <a href={j.link} className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline">
                      <ExternalLink className="h-4 w-4" /> View
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm text-slate-700">{j.summary}</p>
                <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                  {j.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {j.tech.map((t) => (
                    <span key={t} className="text-xs border border-blue-200 bg-blue-50 text-blue-800 rounded-xl px-2 py-1">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Skills band (back to white) */}
      <section id="skills" className="w-full bg-white border-y border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-blue-900">Skills</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300">
                <h3 className="font-semibold text-blue-900">{cat}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {items.map(({ name, source }) => (
                    <li key={name} className="flex justify-between gap-3">
                      <span>• {name}</span>
                      <span className="text-xs text-slate-500 italic">({source})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Contact band (soft blue) */}
      <section id="contact" className="w-full bg-blue-50/70 border-y border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-blue-900">Contact</h2>
          <p className="mt-2 text-slate-700">Open to internships and research collaborations.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50">
              <Mail className="h-4 w-4 text-blue-700" /> {PROFILE.email}
            </a>
            <a href={PROFILE.github} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50">
              <Github className="h-4 w-4 text-blue-700" /> {PROFILE.github.replace(/^https?:\/\//, "")}
            </a>
            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50">
              <Linkedin className="h-4 w-4 text-blue-700" /> {PROFILE.linkedin.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>

      {/* subtle arrow motion for the carousel button */}
      <style jsx>{`
        @keyframes arrowSlideX { from { transform: translateX(0); } to { transform: translateX(12px); } }
        .arrow-slide { animation: arrowSlideX 0.9s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}
