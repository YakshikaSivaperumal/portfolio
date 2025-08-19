import Home from "./components/Home";
import About from "./components/About";
import Slidebar from "./components/Slidebar";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import Volunteering from "./components/Volunteering";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-400/30">
      <Slidebar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Volunteering />
        <Footer />
      </main>
    </div>
  );
}
