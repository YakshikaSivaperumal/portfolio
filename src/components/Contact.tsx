import React, { useState } from "react";
import Slidebar from "./Slidebar";
import { MapPin, Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("err");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Slidebar />
    <div id="contact" className="sr-only" />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:pr-[72px] py-20">
        {/* Watermark + Title */}
        <header className="relative mb-12 text-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <span className="text-7xl sm:text-8xl font-extrabold tracking-tight text-white/5 select-none">
              CONTACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            GET IN <span className="text-amber-400">TOUCH</span>
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT: intro + contact details */}
          <section>
            <h3 className="text-xl font-bold mb-2">DON'T BE SHY !</h3>
            <p className="text-slate-300 mb-6">
              Feel free to get in touch with me. I’m always open to discussing new projects,
              creative ideas or opportunities to be part of your vision.
            </p>

            <ul className="space-y-5">
              <Detail icon={<MapPin size={18} />} title="ADDRESS POINT" text="Dehiwala,Colombo, Sri Lanka" />
              <Detail icon={<Mail size={18} />} title="MAIL ME" text="sivayakshika17@gmail.com" href="mailto:yakshika@example.com" />
              <Detail icon={<Phone size={18} />} title="CALL ME" text="+94 71 234 5678" href="tel:+94766606893" />
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <Social href="https://www.linkedin.com/in/yakshika-sivaperumal" label="LinkedIn"><Linkedin size={16} /></Social>
              <Social href="https://github.com/YakshikaSivaperumal" label="GitHub"><Github size={16} /></Social>
            </div>
          </section>

          {/* RIGHT: form */}
          <section>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="YOUR NAME" name="name" value={form.name} onChange={onChange} required />
                <Input placeholder="YOUR EMAIL" type="email" name="email" value={form.email} onChange={onChange} required />
              </div>

              <Input placeholder="YOUR SUBJECT" name="subject" value={form.subject} onChange={onChange} required />
              <Textarea placeholder="YOUR MESSAGE" name="message" value={form.message} onChange={onChange} required />

              <button
                type="submit"
                disabled={sending}
                className={`inline-flex items-center rounded-full px-6 py-3 font-semibold shadow transition border
                            ${sending ? "bg-slate-800 border-slate-700 text-slate-400 cursor-not-allowed" : "bg-slate-900 border-amber-400 hover:bg-slate-800"}`}
              >
                {sending ? "SENDING..." : "SEND MESSAGE"}
                <span className="ml-3 grid place-items-center w-9 h-9 rounded-full bg-amber-400 text-slate-900">
                  <Send size={16} />
                </span>
              </button>

              {status === "ok" && <p className="text-sm text-emerald-400">Message sent! I’ll get back to you soon.</p>}
              {status === "err" && <p className="text-sm text-rose-400">Something went wrong. Please try again later.</p>}
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

/* ---------- tiny subcomponents ---------- */

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full bg-slate-800/70 border border-slate-700",
        "rounded-full px-5 py-3 text-slate-100 placeholder-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent",
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={7}
      className={[
        "w-full bg-slate-800/70 border border-slate-700",
        "rounded-2xl px-5 py-4 text-slate-100 placeholder-slate-400",
        "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent",
      ].join(" ")}
    />
  );
}

function Detail({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href?: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid place-items-center w-9 h-9 rounded-lg bg-amber-400 text-slate-900 ring-4 ring-amber-400/20">
        {icon}
      </span>
      <div>
        <div className="text-[11px] tracking-wider text-slate-400 font-semibold">{title}</div>
        {href ? (
          <a href={href} className="text-slate-200 hover:underline">
            {text}
          </a>
        ) : (
          <div className="text-slate-200">{text}</div>
        )}
      </div>
    </li>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="w-9 h-9 grid place-items-center rounded-full bg-slate-800 text-slate-200 hover:bg-amber-400 hover:text-slate-900 transition"
    >
      {children}
    </a>
  );
}
