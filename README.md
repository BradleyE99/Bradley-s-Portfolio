# Bradley Elder – Portfolio

Personal portfolio website for Bradley Elder, a Systems Engineering and Computer Science student at the University of Virginia. It showcases my projects, work experience, skills, and résumé for recruiters and collaborators.

## What's on the site

- **About:** background, objectives, and education
- **Projects:** Generative Charities (with demo video), coursework, research, and club projects
- **Experience:** internships and other work
- **Skills:** languages, frameworks, cloud, and tools, each linked to where it was used
- **Contact:** email, GitHub, LinkedIn, and a downloadable résumé (PDF)

Includes a light/dark theme toggle and a responsive layout for mobile.

## Built with

- [Next.js](https://nextjs.org) (App Router) and React
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide](https://lucide.dev) icons
- Deployed on [Vercel](https://vercel.com)

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project layout

- `app/page.js` – the single-page site; content lives in the `PROJECTS`, `PROFILE`, `JOBS`, and `SKILLS` constants at the top
- `app/layout.js` – page title and metadata
- `public/` – images, demo video, and `Resume_Elder_Bradley.pdf`

To update the résumé, replace `public/Resume_Elder_Bradley.pdf` with a file of the same name. Media is committed directly rather than through Git LFS, since LFS files don't deploy correctly on Vercel.
