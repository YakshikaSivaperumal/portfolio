import { Github } from "lucide-react"

type Project = {
  id: number;
  title: string;
  blurb: string;
  image: string;   // /public/projects/...
  tag: string;
  code?: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: " Airport management system",
    blurb: " Java, IntelliJ IDEA",
    image: "Airport.png",
    tag: "JAVA",
    code: "https://github.com/YakshikaSivaperumal/AirportManagementSystem",
  },
  {
    id: 2,
    title: " Mobile shop management system",
    blurb: "C#, Visual Studio, MySQL",
    image: "MobileShop.jpg",
    tag: "C# / .NET",
    code: "https://github.com/YakshikaSivaperumal/Mobilesystem",
  },
  {
    id: 3,
    title: " Travel Booking System (Travel Corp)",
    blurb: " HTML, CSS, JS, PHP, MySQL, Visual Studio Code",
    image: "/Travel.jpg",
    tag: "Web",
    code: "https://github.com/YakshikaSivaperumal/Travel-Booking-System-Travel-Corp-",
  },
  {
    id: 4,
    title: " Mobile Application for coffee shop (Cafe Bloom)",
    blurb: " Kotlin, Android Studio, SQLite",
    image: "/cafebloom.jpg",
    tag: "Mobile App",
    code: "https://github.com/YakshikaSivaperumal/Cafe-bloom", 
  },
  {
    id: 5,
    title: " Mobile Shop Management System(Cellular world)",
    blurb: " React TypeScript),Node.js,Spring Boot,MongoDB",
    image: "/Fullstack.jpg",
    tag: "Full-stack",
    code: "https://github.com/YakshikaSivaperumal/Cellularworld",
  },
  {
    id: 6,
    title: " Audio recognition",
    blurb: " TensorFlow, Keras, Matplotlib, NumPy, Python, Google colab",
    image: "/Audio.jpg",
    tag: "AI/ML",
    code: "https://github.com/YakshikaSivaperumal/-AudioRecognition",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title (watermark style) */}
        <header className="relative mb-10 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <span className="text-7xl sm:text-8xl font-extrabold tracking-tight text-white/5 select-none">
              PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="text-white">MY </span>
            <span className="text-amber-400">PROJECTS</span>
          </h2>
        </header>

        {/* Equal-height cards */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((p) => (
            <li key={p.id} className="h-full">
              <article className="h-full flex flex-col rounded-xl overflow-hidden ring-1 ring-slate-800 bg-slate-900 shadow">
                {/* FIXED image area so all cards start at the same height */}
                <div className="relative h-44">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-amber-400 text-slate-900 text-xs font-semibold rounded-full px-3 py-1">
                    {p.tag}
                  </span>
                </div>

                {/* Content area grows; footer sticks to bottom */}
                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {p.blurb}
                  </p>

                  {/* Footer pinned to bottom of card */}
                  <div className="mt-auto pt-3 flex items-center gap-4 min-h-[28px]">
                   

                    {p.code && (
  <a
    href={p.code}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium hover:underline"
  >
    <Github className="w-4 h-4" />
    GitHub
  </a>
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
