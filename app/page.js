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
} from "lucide-react";

// ---- Projects ----
const PROJECTS = [
  {
    title: "Generative Charities",
    period: "Summer 2025",
    stack: ["Django", "AWS EB", "S3", "PostgreSQL", "OAuth2"],
    blurb:
      "Django web app connecting donors to smaller U.S. charities. Epic FHIR integration, S3 CSV storage, and EB deployment.",
    demo: "/gc-demo.mp4",
    poster: "/gc-poster.jpg",
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

// ---- Personal profile ----
const PROFILE = {
  name: "Bradley Elder",
  role: "Systems Engineering @ UVA · CS Minor",
  headshot: "/headshot.jpg",
  summary:
    "I build human-centered, data-driven software. My interests span healthcare integrations (FHIR), usable analytics, and clean deployment pipelines.",
  objectives: [
    "Pursue summer 2026  Systems Engineering and software/dev internships",
    "Grow expertise in React, Next.js, and cloud (AWS)",
  ],
  email: "bradleyelder24@gmail.com",
  github: "https://github.com/Belder21",
  linkedin: "https://www.linkedin.com/in/bradleyjelder21",
  resume: "/Bradley_Elder_Resume.pdf",
};

// ---- Skills ----
const SKILLS = {
  Languages: [
    {name: "Python", source: "Generative Charities & Coursework"},
    {name: "Java", source: "Coursework"},
    {name: "C#", source: "VR Towers of Hanoi Research"},
  ],

  Frameworks: [
    {name: "Django", source: "Generative Charities"},
    {name: "React", source: "Portfolio Website"},
    {name: "Next.js", source: "Portfolio Website"},
    {name: "Unity/C#", source: "VR Towers of Hanoi Research"},
  ],
  Cloud: [
    { name: "AWS Elastic Beanstalk", source: "Generative Charities" },
    { name: "Amazon S3", source: "Generative Charities" },
    { name: "Amazon RDS", source: "Generative Charities" },
  ],
  Frameworks: [
    { name: "Django", source: "Generative Charities" },
    { name: "React", source: "Portfolio Website" },
    { name: "Next.js", source: "Portfolio Website" },
  ],
  Databases: [{ name: "PostgreSQL", source: "Generative Charities" }],
  Tools: [{ name: "Git/GitHub", source: "Generative Charities & VR Towers of Hanoi Research"}],
  HumanSkills: [
    { name: "Management", source: "Head Lifeguard and Pool Operator" },
    { name: "Teamwork", source: "Generative Charities & VR Towers of Hanoi Research" },
  ]
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
            <a href="#skills" className="hover:text-blue-200">Skills</a>
            <a href="#about" className="hover:text-blue-200">About</a>
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
                ["Skills", "#skills"],
                ["About", "#about"],
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
  <div className="grid md:grid-cols-3 gap-10 items-center">
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

      {/* About Me under name */}
      <p className="mt-4 text-slate-700 leading-relaxed max-w-prose">
        I am a second-year student at the University of Virginia studying
        <strong> Systems Engineering with a Minor in Computer Science</strong>. 
        Originally from Fairfax, VA, I am currently seeking summer internship
        opportunities where I can apply my technical and analytical skills.
        I enjoy systems engineering because it teaches me to see the
        <em> big picture</em>—connecting people, processes, and technology to
        design solutions that work in the real world. This past summer, I
        interned at a start-up called <strong>Generative Charities</strong>,
        where I helped build a platform promoting charities across the United
        States. Through this experience, I strengthened my skills in
        <strong> Django, AWS Elastic Beanstalk, Amazon S3, and SQL</strong>,
        while also gaining hands-on practice with <strong>Python, GitHub, and
        cloud-based development</strong>. I am especially interested in combining
        <strong> data analytics, cloud computing, and human-centered design</strong>
        to solve meaningful problems and make technology more impactful.
      </p>

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
        ...
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
                  <li key={s.name}>
                     • {s.name}
                    <span className="ml-2 text-xs text-blue-600 italic">
                    ({s.source})
                  </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gradient-to-r from-blue-50 to-white border-y border-blue-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-blue-900">About</h2>
          <p className="mt-4 max-w-prose text-slate-700">
            My name is Bradley Elder, and I am a second-year student at the University of Virginia studying Systems Engineering with a Minor in Computer Science. I am originally from Fairfax, VA, and I am currently seeking summer internship opportunities where I can apply my technical and analytical skills. I enjoy systems engineering because it teaches me how to see the big picture — connecting people, processes, and technology to design solutions that actually work in the real world. This past summer, I interned at a start-up called Generative Charities, where I helped build a platform promoting charities across the United States. Through this experience, I strengthened my skills in Django, AWS Elastic Beanstalk, Amazon S3, and SQL, while also gaining hands-on practice with Python, GitHub, and cloud-based development. I am especially interested in combining data analytics, cloud computing, and human-centered design to solve meaningful problems and make technology more impactful.
          </p>
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
