import React from "react";

type Volunteer = {
  id: number;
  title: string;   // role
  org: string;     // organization
  blurb: string;   // short description
  image: string;   // /public/volunteering/...
  tag: string;     // e.g., "Lead", "Mentor"
  date: string;    // e.g., "2024 – Present"
  proof?: string;  // optional certificate / link
};

const VOLUNTEERS: Volunteer[] = [
  {
    id: 1,
    title: " Chair person",
    org: " IEEE Industrial Electronics Society Student Branch Chapter",
    blurb: " Currently leading the chapter’s strategic initiatives. Organized the IEEE IES Distinguished Lecturer Programs in 2024 and 2025. Co-hosted UOK Robot Battles 2k24 with ECSC and launched a Knowledge Sharing Session on postgraduate research to support student development.",
    image: "/IEEE.jpg",
    tag: "Chairperson",
    date: "10/2024 – Present",
    
  },
  {
  id: 2,
  title: " Assistant Secretary",
  org: " Electronics and Computer Science Club",
  blurb: "Assisted in administrative and event coordination tasks to ensure smooth club operations. Organized webinars and seminars in collaboration with TechSymphony to promote tech awareness. Coordinated a friendly cricket match and led fundraising campaigns through merchandise sales and donation drives.",
  image: "/ECS.jpg",
  tag: "Assistant Secretary",
  date: "08/2023 – 08/2024",
  proof: "/ECS_Proof.pdf", // 👈 correct path inside public/
}
,
  {
    id: 3,
    title: "Head of Public Relations",
    org: " VidE Club",
    blurb: "Managed public relations and communications for the club. Organized the 'StepUp' photography series, 'ERA AI' photo creation competition, and 'Lenzesion' university-wide contest. Contributed to SLUG 2023 by capturing and showcasing high-quality event photographs that enhanced the university’s visibility.",
    image: "Vide.jpg",
    tag: "Head of Public Relations",
    date: "12/2023 – 01/2025",
  },
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Watermark + Title */}
        <header className="relative mb-10 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <span className="text-7xl sm:text-8xl font-extrabold tracking-tight text-white/5 select-none">
              VOLUNTEERING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="text-white">MY </span>
            <span className="text-amber-400">VOLUNTEERING</span>
          </h2>
        </header>

        {/* 3 equal-height cards */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {VOLUNTEERS.map((v) => (
            <li key={v.id} className="h-full">
              <article className="h-full flex flex-col rounded-xl overflow-hidden ring-1 ring-slate-800 bg-slate-900 shadow">
                {/* fixed image area */}
                <div className="relative h-44">
                  <img
                    src={v.image}
                    alt={`${v.title} — ${v.org}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-amber-400 text-slate-900 text-xs font-semibold rounded-full px-3 py-1">
                    {v.tag}
                  </span>
                </div>

                {/* content + footer pinned to bottom */}
                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {v.title} <span className="text-slate-400">— {v.org}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mb-1">{v.date}</p>
                  <p className="text-sm text-slate-400">{v.blurb}</p>

                  <div className="mt-auto pt-3 min-h-[28px]">
                    {v.proof ? (
                      <a
                        href={v.proof}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 text-sm font-medium hover:underline"
                      >
                        Proof
                      </a>
                    ) : (
                      <span className="opacity-0 select-none text-sm">Certificate</span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
