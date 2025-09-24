"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Download, Menu, X, ExternalLink, Code2 } from "lucide-react";

// Simple, single-file portfolio you can drop into a Next.js page (app/page.tsx or pages/index.tsx)
// or a Vite-React project (as App.jsx). Styled with Tailwind classes.
// Replace placeholder data below and you're live.

const PROJECTS = [
  {
    title: "Generative Charities",
    period: "Summer 2025",
    stack: ["Django", "AWS EB", "S3", "PostgreSQL", "OAuth2"],
    blurb:
      "Django web app connecting donors to smaller U.S. charities. Epic FHIR integration, S3 CSV storage, and EB deployment.",
    demo: "https://yourdomain.com",
    highlights: [
      "Implemented Epic OAuth2 and fetched FHIR Observations",
      "Uploaded aggregated analytics to S3 (CSV)",
      "Deployed on Elastic Beanstalk with CI hooks"
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
      "Designed metrics pipeline for learning outcomes"
    ],
  },
];

// ---- Personal profile (edit these fields) ----
const PROFILE = {
  name: "Bradley Elder",
  role: "Systems Engineering @ UVA · CS Minor",
  headshot: "/headshot.jpg", // place headshot in /public/headshot.jpg
  summary:
    "I build human‑centered, data‑driven software. My interests span healthcare integrations (FHIR), usable analytics, and clean deployment pipelines.",
  objectives: [
    "Pursue summer 2026  Systems Engineering and software/dev internships",
    "Grow expertise in React, Next.js, and cloud (AWS)"
  ],
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/Belder21",
  linkedin: "https://www.linkedin.com/in/yourname",
  resume: "/Bradley_Elder_Resume.pdf",
};

const SKILLS = {
  Languages: ["Python", "Java", "C#", "SQL"],
  Frameworks: ["Django", "React", "Next.js", "Unity/C#"],
  Cloud: ["AWS EB", "S3", "RDS", "Vercel", "Netlify"],
  Tools: ["Git/GitHub"],
  HumanSkills: ["Management", "Teamwork"]
};

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Code2 className="h-5 w-5" /> Bradley Elder
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
            <a href="/Bradley_Elder_Resume.pdf" className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border hover:bg-gray-50">
              <Download className="h-4 w-4" /> Resume
            </a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 py-2 flex flex-col gap-2">
              {[
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="py-2">
                  {label}
                </a>
              ))}
              <a href="/Bradley_Elder_Resume.pdf" className="py-2 inline-flex items-center gap-2">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Left: Headshot */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border shadow-sm"
            />
          </div>

          {/* Right: Name, role, summary, objectives */}
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-wider text-gray-500">{PROFILE.role}</p>
            <h1 className="mt-1 text-4xl md:text-5xl font-bold leading-tight">{PROFILE.name}</h1>
            <p className="mt-4 text-gray-700 max-w-prose">{PROFILE.summary}</p>

            {/* Objectives */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Objectives</h3>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                {PROFILE.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={PROFILE.github} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={PROFILE.resume} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <article key={p.title} className="rounded-3xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-xs text-gray-500">{p.period}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs border rounded-xl px-2 py-1">{t}</span>
                  ))}
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  {p.repo && (
                    <a href={p.repo} className="inline-flex items-center gap-1 text-sm underline hover:no-underline">
                      <Github className="h-4 w-4" /> Repo
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} className="inline-flex items-center gap-1 text-sm underline hover:no-underline">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat} className="rounded-3xl border p-5">
              <h3 className="font-medium">{cat}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {items.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-prose text-gray-700">
            I’m a Systems Engineering student at the University of Virginia with a passion for building
            reliable, human-centered software. I enjoy shipping clean, well-documented code and collaborating across
            disciplines to turn ambiguous problems into shipped features.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">Open to internships and research collaborations.</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a href="mailto:bradleyelder24@gmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
            <Mail className="h-4 w-4" /> bradley@example.com
          </a>
          <a href="https://github.com/Belder21" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
            <Github className="h-4 w-4" /> github.com/yourname
          </a>
          <a href="https://www.linkedin.com/in/bradleyjelder21" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-gray-50">
            <Linkedin className="h-4 w-4" /> linkedin.com/in/yourname
          </a>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Bradley Elder</footer>
    </div>
  );
}
