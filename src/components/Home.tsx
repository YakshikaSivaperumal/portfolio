import React from "react";
import { Linkedin, Github, Mail, MapPin, CheckCircle2 } from "lucide-react";

const RESUME_URL = "/resume/Yakshika_Sivaperumal_Resume.pdf"; // put PDF in /public/resume/
const MEDIUM_ICON = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg";

export default function Home() {
  return (
    <section id="home" className="py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image card */}
        <div className="flex justify-center">
          <div className="relative bg-slate-900 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-2 bg-amber-400 rounded-l-2xl" />
            <img
              src="/profile.jpg"
              alt="Yakshika Sivaperumal"
              className="rounded-xl max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Right: Text + buttons */}
        <div className="text-center md:text-left">
          <h2 className="text-amber-400 text-lg font-semibold mb-2">
            — I'M YAKSHIKA SIVAPERUMAL
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            COMPUTER SCIENCE UNDERGRADUATE
          </h1>
          <p className="text-slate-300 mb-6 max-w-xl md:max-w-none">
            I’m a passionate Computer Science undergraduate and tech enthusiast who loves
            building creative solutions at the intersection of software, AI, and user
            experience. Currently, I’m seeking an opportunity as an Intern Software Engineer
            to apply my skills, gain industry experience, and contribute to impactful projects.
          </p>

          {/* Primary buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#about"
              className="bg-amber-400 text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-amber-300 transition"
            >
              More About Me
            </a>

            {/* Open CV in a new tab */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber-400 text-amber-400 px-6 py-3 rounded-full font-medium hover:bg-amber-400 hover:text-slate-900 transition"
            >
              Open My CV
            </a>
          </div>

          {/* NEW: Social icons row */}
          <div className="mt-5 flex items-center gap-3 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/yakshika-sivaperumal"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 grid place-items-center rounded-full ring-1 ring-slate-700 bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-slate-900 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/YakshikaSivaperumal"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full ring-1 ring-slate-700 bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-slate-900 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://medium.com/@sivayakshika17"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium"
              className="w-10 h-10 grid place-items-center rounded-full ring-1 ring-slate-700 bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-slate-900 transition"
            >
              <img src={MEDIUM_ICON} alt="Medium" className="w-5 h-5 invert" />
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}
