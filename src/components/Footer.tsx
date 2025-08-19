import React from "react";
import { Github, Linkedin } from "lucide-react";

/** Medium brand icon (from Simple Icons CDN) */
const MEDIUM_ICON = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg";

type Props = {
  linkedin?: string;
  github?: string;
  medium?: string;
  name?: string; // used in © line
};

export default function Footer({
  linkedin = "https://www.linkedin.com/in/yakshika-sivaperumal",
  github = "https://github.com/YakshikaSivaperumal",
  medium = "https://medium.com/@sivayakshika17",
  name = "Yakshika Sivaperumal",
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-2 border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-5">
        {/* Socials */}
        <div className="flex items-center gap-3">
          <Social href={linkedin} label="LinkedIn">
            <Linkedin size={18} />
          </Social>

          <Social href={github} label="GitHub">
            <Github size={18} />
          </Social>

          <Social href={medium} label="Medium">
            {/* brand svg as image so we get the real Medium logo */}
            <img src={MEDIUM_ICON} alt="Medium" className="w-5 h-5 invert" />
          </Social>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400">
          © {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 grid place-items-center rounded-full ring-1 ring-slate-700 bg-slate-800 text-slate-200
                 hover:bg-amber-400 hover:text-slate-900 transition"
    >
      {children}
    </a>
  );
}
