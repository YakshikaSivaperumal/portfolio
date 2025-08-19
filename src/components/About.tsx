import React, { useState } from "react";
import {
  Layers,
  Braces,
  Binary,
  Globe,
  Smartphone,
  PenTool,
  Brain,
} from "lucide-react";

/* ---------- Types ---------- */
type Item =
  | { name: string; src: string; whiteBg?: boolean } // image logo (Devicon / Simple-Icons)
  | { name: string; icon: React.ReactNode; whiteBg?: boolean }; // lucide icon
type Category = { title: string; items: Item[] };

/* ---------- Skills (same UI, new categories) ---------- */
const CATEGORIES: Category[] = [
  {
    title: "Languages",
    items: [
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      // Using MySQL logo to represent SQL
      { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", whiteBg: true },
    ],
  },
  {
    title: "Software Engineering",
    items: [
      { name: "Full-Stack Dev", icon: <Layers /> },
      { name: "DSA", icon: <Binary /> },
      { name: "OOP", icon: <Braces /> },
    ],
  },
  {
    title: "Web Technologies & Frameworks",
    items: [
      { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Android Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ IDEA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", whiteBg: true },
      { name: "Google Colab", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecolab.svg", whiteBg: true },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", whiteBg: true },
      { name: "Power BI", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg", whiteBg: true },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "Machine Learning Libraries",
    items: [
      { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Keras", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "Matplotlib", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/matplotlib.svg" },
    ],
  },
  {
    title: "Additional Tools",
    items: [
      { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Trello", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    ],
  },
  {
    title: "Application Areas",
    items: [
      { name: "Web Development", icon: <Globe /> },
      { name: "Mobile Development", icon: <Smartphone /> },
      { name: "UI/UX Design", icon: <PenTool /> },
      { name: "Machine Learning", icon: <Brain /> },
    ],
  },
];

/* ---------- Timeline data ---------- */
type Entry = { period: string; title: string; org: string; desc?: string };
type Entry1 = { period: string; title: string; org: string; desc: string };
const EDUCATION: Entry1[] = [
  { period: "2022 – Present", title: " Bachelor of Science Honors in Electronics and Computer Science", org: "University of Kelaniya", desc: "GPA - 3.73/4.0" },
  { period: "2018 - 2020", title: "G.C.E. Advanced Level", org: " N / Kotagala T.M.V", desc: "Result - 2B's & 1C Physical Sciences Stream)" },
  { period: "2022 – 2023", title: "G.C.E. Ordinary Level", org: "N / Kotagala T.M.V", desc: "Result - 9A's" },
];

const CERTIFICATES: Entry[] = [
  { period: "December/2022", title: " Python for Beginners", org: "University of Moratuwa" },
  { period: "February/2025", title: " Professional Certificate in Machine Learning", org: " Informatics Institute of Technology"},
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CATEGORIES[activeIndex];

  return (
    <section id="about" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <header className="relative mb-10 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <span className="text-7xl sm:text-8xl font-extrabold tracking-tight text-white/5 select-none">
              ABOUT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="text-white">ABOUT </span>
            <span className="text-amber-400">ME</span>
          </h2>
        </header>

        {/* Intro: paragraph LEFT, photo RIGHT */}
        <div className="grid md:grid-cols-[1.35fr,1fr] gap-10 items-start mb-12">
          {/* Left: text */}
          <div className="text-left text-slate-300 text-lg leading-relaxed space-y-6">
            <p>
              I’m Yakshika Sivaperumal, a driven computer science undergraduate and passionate tech
              enthusiast from the vibrant island of Sri Lanka. I thrive on exploring how technology
              can solve real-world problems and bring meaningful change, especially through software
              and innovation.
            </p>
            <p>
              Currently, I’m pursuing my B.Sc. (Hons) in Electronics and Computer Science, specializing
              in Computer Science as a final-year undergraduate at the University of Kelaniya. I’m also
              involved in student communities, mentoring peers, and leading initiatives that inspire growth.
            </p>
            <p>
              Whether I’m coding a new solution, organizing a technical session, or collaborating on a club
              project, my mission is clear: to grow with purpose and empower others through technology and
              teamwork. I’m currently seeking internship opportunities to contribute to impactful projects.
            </p>
          </div>

          
        </div>

        {/* MY SKILLS (same design) */}
        <h3 className="mt-8 mb-6 text-center uppercase font-extrabold text-[18px] md:text-[22px] lg:text-[26px] tracking-[0.22em] text-slate-200">
          MY SKILLS
        </h3>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Technology categories"
          className="mb-6 w-full flex items-center justify-center gap-3 sm:flex-wrap overflow-x-auto sm:overflow-visible whitespace-nowrap no-scrollbar mx-auto"
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={cat.title}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(i)}
                className={[
                  "px-4 py-2 rounded-full border text-sm font-medium transition",
                  isActive
                    ? "bg-amber-400 text-slate-900 border-amber-400"
                    : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700",
                ].join(" ")}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category grid */}
        <div
          role="tabpanel"
          aria-labelledby={active.title}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 transition-opacity duration-300"
        >
          <h4 className="text-lg font-semibold mb-4">
            <span className="text-amber-400">{active.title}</span>
          </h4>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {active.items.map((it) => {
              const key = "src" in it ? (it as any).src : (it as any).name;
              return (
                <li key={key} className="flex flex-col items-center gap-2">
                  <span
                    className={[
                      "grid place-items-center w-14 h-14 rounded-lg ring-1",
                      "whiteBg" in it && (it as any).whiteBg
                        ? "bg-white ring-slate-300"
                        : "bg-slate-800 ring-slate-700",
                    ].join(" ")}
                    title={it.name}
                  >
                    {"src" in it ? (
                      <img
                        src={(it as any).src}
                        alt={it.name}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-slate-200">{(it as any).icon}</div>
                    )}
                  </span>
                  <span className="text-xs text-slate-300">{it.name}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* EXPERIENCE & EDUCATION */}
        <h3 className="mt-16 mb-8 text-center uppercase font-extrabold text-[18px] md:text-[22px] lg:text-[26px] tracking-[0.22em] text-slate-200">
          EDUCATION & CERTIFICATES
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <TimelineColumn title="Education" entries={EDUCATION} />
          <TimelineColumn title="Certificates" entries={CERTIFICATES} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Timeline column (unchanged layout) ---------- */
function TimelineColumn({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[32px] top-0 bottom-0 w-px bg-slate-800" />
      <h4 className="mb-4 text-amber-400 font-semibold">{title}</h4>
      <ul className="space-y-8">
        {entries.map((e, idx) => (
          <li key={idx} className="grid grid-cols-[64px_1fr] gap-6 items-start">
            <div className="relative h-6">
              <span className="absolute left-[22px] top-0 w-5 h-5 rounded-full bg-amber-400 grid place-items-center ring-4 ring-slate-950 shadow z-10">
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
            </div>
            <div>
              <div className="inline-block text-[10px] uppercase tracking-wide bg-slate-800 text-slate-200 rounded-full px-3 py-1 mb-2 whitespace-nowrap">
                {e.period}
              </div>
              <div className="text-white font-semibold">
                {e.title} <span className="text-slate-400">— {e.org}</span>
              </div>
              <p className="text-slate-400 text-sm mt-1">{e.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
