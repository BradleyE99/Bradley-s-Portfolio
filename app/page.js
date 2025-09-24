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
} from "lucide-react";

// ---------- DATA ----------

// Projects
const PROJECTS = [
  {
    title: "Generative Charities",
    period: "Summer 2025",
    stack: ["Django", "AWS EB", "S3", "PostgreSQL", "OAuth2"],
    blurb:
      "Django web app connecting donors to smaller U.S. charities. Epic FHIR integration, S3 CSV storage, and EB deployment.",
    demo: "/gc-demo.mp4",       // served from /public
    poster: "/gc-poster.jpg",   // optional
    highlights: [
      "Implemented Epic OAuth2 and fetched FHIR Observations",
      "Uploaded aggregated analytics to S3 (CSV)",
      "Deployed on Elastic Beanstalk with CI hooks",
    ],
  },
  {
    title: "VR Towers of Hanoi Research",
    period: "2025 Spring",
    stack: ["Unity", "C#", "NUI"],
    blurb:
      "Interactive VR study on gesture-based learning and peer-to-peer teaching.",
    repo: "https://github.com/yourname/vr-hanoi",
    demo: "",
    highlights: [
      "Built research prototype with variable gesture sets",
      "Designed metrics pipeline for learning outcomes",
    ],
  },
];

// Profile
const PROFILE = {
  name: "Bradley Elder",
  role: "Systems Engineering @ UVA · CS Minor",
  headshot: "/headshot.jpg",
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/Belder21",
  linkedin: "https://www.linkedin.com/in/bradleyjelder21",
  resume: "/Bradley_Elder_Resume.pdf",

  // About Me — short intro + quick bullets (easy to read)
  aboutIntro:
    "Second-year Systems Engineering student at UVA, seeking summer internship opportunities. I love learning new things, connecting with people, and using my knowledge of tecnology to benifit the real world.",
  aboutBullets: [
    "From Fairfax, VA; Systems Engineering + CS minor",
    "Enjoy human-centered, data-driven software",
    "Hands-on with Django, AWS EB, S3, SQL, and Python",
    "Interested in data analytics, cloud, and usable design",
  ],

  objectives: [
    "Pursue summer 2026 Systems Engineering and software/dev internships",
    "Grow expertise in React, Next.js, and cloud (AWS)",
  ],
};

// Jobs / Experience (add more as you go)
const JOBS = [
  {
    role: "Software Engineering Intern",
    company: "Generative Charities",
    period: "Summer 2025",
    summary:
      "Built a platform to promote charities across the U.S.; focused on integrations, data handling, and deployments.",
    bullets: [
      "Developed Django features and REST endpoints",
      "Integrated Epic OAuth2; fetched FHIR Observations",
      "Stored analytics to S3 (CSV) and deployed via AWS EB",
    ],
    tech: ["Django", "AWS EB", "S3", "PostgreSQL", "Python", "GitHub"],
    link: "", // optional: live site or repo
  },
  // Add more experiences here...
];

// Skills
const SKILLS = {
  Languages: ["Python", "Java", "C#", "SQL"],
  Frameworks: ["Django", "React", "Next.js", "Unity/C#"],
  Cloud: ["AWS Elastic Beanstalk", "Amazon S3", "Amazon RDS"],
  Databases: ["PostgreSQL"],
  Tools: ["Git/GitHub"],
};

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      {/* Header - DARK BLUE */}
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
            <a
              href={PROFILE.resume}
              className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/30 bg-white/10 hover:bg-white/20"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </nav>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
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
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2 hover:text-blue-200"
                >
                  {label}
                </a>
              ))}
              <a
                href={PROFILE.resume}
                className="py-2 inline-flex items-center gap-2 hover:text-blue-200"
              >
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
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border border-blue-100 shadow-sm"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-wider text-blue-700/70">
              {PROFILE.role}
            </p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
              {PROFILE.name}
            </h1>

            {/* Cleaner About Me: short intro + bullets */}
            <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
              {PROFILE.aboutIntro}
            </p>
            <ul className="mt-3 grid gap-2 text-slate-700 max-w-prose list-disc list-inside">
              {PROFILE.aboutBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            {/* Objectives box */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-white/70 p-4">
              <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                Objectives
              </h3>
              <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                {PROFILE.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/50 bg-blue-900 text-white hover:bg-blue-800"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={PROFILE.github}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50"
              >
                <Github className="h-4 w-4 text-blue-700" /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50"
              >
                <Linkedin className="h-4 w-4 text-blue-700" /> LinkedIn
              </a>
              <a
                href={PROFILE.resume}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50"
              >
                <Download className="h-4 w-4 text-blue-700" /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white border-y border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-blue-900">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all transform-gpu
                           hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">{p.title}</h3>
                    <p className="text-xs text-blue-700/70">{p.period}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-700">{p.blurb}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs border border-blue-200 bg-blue-50 text-blue-800 rounded-xl px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-1">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3">
                  {p.demo && /\.mp4($|\?)/i.test(p.demo) ? (
                    <video
                      className="w-full rounded-2xl border border-blue-100 bg-slate-100"
                      controls
                      playsInline
                      poster={p.poster || "/thumbnail.png"}
                    >
                      <source src={p.demo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    p.demo && (
                      <a
                        href={p.demo}
                        className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline"
                      >
                        <ExternalLink className="h-4 w-4" /> Live
                      </a>
                    )
                  )}

                  {p.repo && (
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline"
                    >
                      <Github className="h-4 w-4" /> Repo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs / Experience */}
      <section id="jobs" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-800" /> Jobs
        </h2>

        <div className="mt-6 grid gap-6">
          {JOBS.map((j) => (
            <article
              key={`${j.company}-${j.role}`}
              className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all transform-gpu
                         hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {j.role} · {j.company}
                  </h3>
                  <p className="text-xs text-blue-700/70">{j.period}</p>
                </div>
                {j.link && (
                  <a
                    href={j.link}
                    className="inline-flex items-center gap-1 text-sm text-blue-800 underline hover:no-underline"
                  >
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
                  <span
                    key={t}
                    className="text-xs border border-blue-200 bg-blue-50 text-blue-800 rounded-xl px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-blue-900">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div
              key={cat}
              className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all transform-gpu
                         hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300"
            >
              <h3 className="font-semibold text-blue-900">{cat}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                {items.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-blue-900">Contact</h2>
        <p className="mt-2 text-slate-700">Open to internships and research collaborations.</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50"
          >
            <Mail className="h-4 w-4 text-blue-700" /> {PROFILE.email}
          </a>
          <a
            href={PROFILE.github}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50"
          >
            <Github className="h-4 w-4 text-blue-700" /> {PROFILE.github.replace(/^https?:\/\//, "")}
          </a>
          <a
            href={PROFILE.linkedin}
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-blue-200 bg-white hover:bg-blue-50"
          >
            <Linkedin className="h-4 w-4 text-blue-700" /> {PROFILE.linkedin.replace(/^https?:\/\//, "")}
          </a>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </div>
  );
}
