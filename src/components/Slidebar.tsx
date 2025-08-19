import React, { useMemo } from "react";
import { Home as HomeIcon, User, FolderOpen, Mail, Heart } from "lucide-react";

export default function Slidebar() {
  const sections = useMemo(
    () => [
      { id: "home",         label: "Home",         icon: <HomeIcon size={18} /> },
      { id: "about",        label: "About",        icon: <User size={18} /> },
      { id: "projects",     label: "Projects",     icon: <FolderOpen size={18} /> },
      { id: "contact",      label: "Contact",      icon: <Mail size={18} /> },
      { id: "volunteering", label: "Volunteering", icon: <Heart size={18} /> },
    ],
    []
  );

  const clickScroll =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

  return (
    <div className="fixed right-1 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={clickScroll(s.id)}
          title={s.label}
          className="w-10 h-10 rounded-full flex items-center justify-center shadow transition
                     bg-slate-800 text-white hover:bg-amber-400 hover:text-slate-900"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
