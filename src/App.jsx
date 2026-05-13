import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { systems, caseStudies, depth, meta } from "./data/content.jsx";

/* ──────────────────────────────────────────────────────────────
   Portfolio — single-file composition.
   Aesthetic: engineering-log / editorial-terminal.
   Layout: asymmetric grid, hairline rules, mono labels, prose body.
   ────────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-50">
      <Grain />
      <Nav />
      <Hero />
      <Systems />
      <ProofOfWork />
      <TechnicalDepth />
      <Contact />
      <Footer />
    </div>
  );
}

/* ── Decorative grain + vignette ─────────────────────────────── */
function Grain() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(16,185,129,0.08), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(56,189,248,0.06), transparent 60%)",
        }}
      />
    </>
  );
}

/* ── Top bar ─────────────────────────────────────────────────── */
function Nav() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const fmt = d.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      });
      setTime(`${fmt} IST`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-[#0b0b0c]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-sm bg-emerald-400/10 font-mono text-[11px] text-emerald-300 ring-1 ring-emerald-400/20">
            {meta.initials}
          </span>
          <span className="font-mono text-xs tracking-wide text-zinc-400">
            {meta.handle}
            <span className="ml-2 text-zinc-600">/ engineering log</span>
          </span>
        </a>

        <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 md:flex">
          <a href="#systems" className="hover:text-zinc-200">01 · Systems</a>
          <a href="#work" className="hover:text-zinc-200">02 · Work</a>
          <a href="#depth" className="hover:text-zinc-200">03 · Depth</a>
          <a href="#contact" className="hover:text-zinc-200">04 · Contact</a>
        </nav>

        <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-500">
          <span className="hidden sm:inline">{time}</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-emerald-300/90">open to roles</span>
          </span>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────────
   Editorial split: oversized statement on the left,
   live "deployment status" panel on the right.
   ───────────────────────────────────────────────────────────── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="top" ref={ref} className="relative">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 pt-16 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-28 lg:pb-36">
        {/* LEFT: positioning */}
        <motion.div style={{ y }} className="relative lg:col-span-8">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            <span className="h-px w-8 bg-zinc-700" />
            <span>Engineer · ML systems & backend infrastructure</span>
          </div>

          <h1 className="font-serif text-[42px] leading-[1.05] tracking-[-0.02em] text-zinc-100 sm:text-[56px] lg:text-[88px]">
            I design and deploy{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-emerald-200 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                intelligent systems
              </span>
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-emerald-400/40"
                preserveAspectRatio="none"
              >
                <path d="M0 8 Q 75 2 150 6 T 300 6" stroke="currentColor" strokeWidth="1.4" fill="none" />
              </svg>
            </span>{" "}
            that solve real-world problems —{" "}
            <span className="italic text-zinc-400">not toy demos.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-zinc-400 lg:text-base">
            I work at the seam where machine learning meets production backends. My
            interest isn’t models on Kaggle leaderboards — it’s the boring,
            unglamorous engineering that makes inference cheap, retrieval correct,
            and pipelines survive Monday morning traffic.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.2em] text-emerald-200 transition hover:bg-emerald-400/20"
            >
              Read the case studies
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={meta.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.2em] text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
            >
              Résumé · PDF
            </a>
          </div>

          <RotatingTagline />
        </motion.div>

        {/* RIGHT: live status panel */}
        <div className="lg:col-span-4">
          <StatusPanel />
        </div>
      </div>

      {/* hairline + section index */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex items-center justify-between border-t border-zinc-800/70 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          <span>§ 00 — index</span>
          <span>scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

function RotatingTagline() {
  const phrases = [
    "currently: training a CNN on PlantVillage (50k+ leaves)",
    "currently: tuning FAISS recall on the farming corpus",
    "currently: shipping हिंदी + தமிழ் i18n end-to-end",
    "currently: wiring four services to talk over plain HTTP",
  ];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const target = phrases[i % phrases.length];
    let n = 0;
    let typing = true;
    const id = setInterval(() => {
      if (typing) {
        n += 1;
        setText(target.slice(0, n));
        if (n === target.length) {
          typing = false;
          setTimeout(() => {
            const erase = setInterval(() => {
              n -= 1;
              setText(target.slice(0, n));
              if (n <= 0) {
                clearInterval(erase);
                setI((x) => x + 1);
              }
            }, 18);
          }, 1800);
        }
      }
    }, 38);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  return (
    <div className="mt-10 inline-flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/40 px-3 py-2 font-mono text-[12px] text-zinc-400">
      <span className="text-emerald-400">▍</span>
      <span>{text}</span>
      <span className="ml-1 inline-block h-3 w-[6px] animate-pulse bg-emerald-300/80" />
    </div>
  );
}

function StatusPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5 font-mono text-[12px]"
    >
      <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        <span>deployment.status</span>
        <span className="flex items-center gap-1.5 text-emerald-300/90">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> healthy
        </span>
      </div>

      <ul className="space-y-3 text-zinc-300">
        <Row k="role" v="ML + Backend Engineer" />
        <Row k="based" v="Hyderabad, IN · UTC+5:30" />
        <Row k="stack" v="Python · Node · JavaScript" />
        <Row k="infra" v="MongoDB · Express · FastAPI · Ollama" />
        <Row k="ml" v="PyTorch · YOLOv8 · FAISS · Mistral" />
      </ul>

     

      {/* subtle scanline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 3px, rgba(255,255,255,0.02) 3px 4px)",
        }}
      />
    </motion.div>
  );
}

function Row({ k, v }) {
  return (
    <li className="flex items-baseline justify-between gap-4">
      <span className="text-zinc-500">{k}</span>
      <span className="text-right text-zinc-200">{v}</span>
    </li>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-[15px] text-zinc-100">{value}</div>
      <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">{label}</div>
    </div>
  );
}

/* ── Section header primitive ────────────────────────────────── */
function SectionHeader({ index, kicker, title, sub }) {
  return (
    <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 lg:col-span-2">
        § {index} — {kicker}
      </div>
      <div className="lg:col-span-10">
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {sub && <p className="mt-3 max-w-2xl text-sm text-zinc-400">{sub}</p>}
      </div>
    </div>
  );
}

/* ── 01 — Systems / what I can build ─────────────────────────── */
function Systems() {
  return (
    <section id="systems" className="relative border-t border-zinc-900/80 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          index="01"
          kicker="capabilities"
          title="What I can build, end to end."
          sub="Skills are abstract. Systems are concrete. Here is the actual surface area I work across — from the data plane up to the user-facing API."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800/60 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <SystemCard key={s.title} item={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
      className="group relative bg-[#0b0b0c] p-6 transition hover:bg-zinc-900/40 lg:p-8"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          0{i + 1} / {item.tag}
        </span>
        <item.Icon />
      </div>
      <h3 className="font-serif text-xl text-zinc-100 lg:text-2xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack.map((t) => (
          <span
            key={t}
            className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition group-hover:opacity-100"
      />
    </motion.div>
  );
}

/* ── 02 — Proof of Work (case studies) ───────────────────────── */
function ProofOfWork() {
  const [open, setOpen] = useState(null);
  return (
    <section id="work" className="relative border-t border-zinc-900/80 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          index="02"
          kicker="proof of work"
          title="Selected systems, written up like products."
          sub="Each entry is a real thing I built: the problem it solved, how I attacked it, the trade-offs I made, and what shipped."
        />

        <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {caseStudies.map((c, i) => (
            <CaseRow key={c.slug} c={c} i={i} onOpen={() => setOpen(c)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <CaseModal c={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function CaseRow({ c, i, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left transition hover:bg-zinc-900/30 lg:py-9"
    >
      <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 lg:col-span-1">
        / 0{i + 1}
      </span>
      <div className="col-span-10 lg:col-span-6">
        <h3 className="font-serif text-2xl tracking-tight text-zinc-100 transition group-hover:text-emerald-200 lg:text-3xl">
          {c.name}
        </h3>
        <p className="mt-2 text-sm text-zinc-400 lg:text-[15px]">{c.tagline}</p>
      </div>
      <div className="col-span-8 hidden flex-wrap gap-1.5 lg:col-span-4 lg:flex">
        {c.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="col-span-12 flex items-center justify-end gap-3 lg:col-span-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300/80 transition group-hover:translate-x-1">
          read →
        </span>
      </div>
    </motion.button>
  );
}

function CaseModal({ c, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm lg:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-zinc-800 bg-[#0d0d0f] p-7 lg:rounded-2xl lg:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              case study · {c.year}
            </div>
            <h3 className="mt-2 font-serif text-3xl tracking-tight text-zinc-100 lg:text-4xl">
              {c.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{c.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md border border-zinc-800 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 hover:text-zinc-100"
          >
            esc
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Block label="problem" body={c.problem} />
          <Block label="approach" body={c.approach} />
          <Block label="tech" body={<div className="flex flex-wrap gap-1.5">{c.tech.map((t) => (
            <span key={t} className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-mono text-[10px] text-zinc-300">{t}</span>
          ))}</div>} />
          <Block label="impact" body={
            <ul className="space-y-1.5 text-zinc-300">
              {c.impact.map((row, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="text-emerald-300">▸</span>
                  <span>{row}</span>
                </li>
              ))}
            </ul>
          } />
        </div>

        {c.note && (
          <div className="mt-6 rounded-md border border-zinc-800 bg-zinc-900/40 p-4 font-mono text-[12px] text-zinc-400">
            <span className="text-emerald-300">note · </span>{c.note}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Block({ label, body }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">{label}</div>
      <div className="text-[14px] leading-relaxed text-zinc-300">{body}</div>
    </div>
  );
}

/* ── 03 — Technical Depth ────────────────────────────────────── */
function TechnicalDepth() {
  return (
    <section id="depth" className="relative border-t border-zinc-900/80 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          index="03"
          kicker="how I think"
          title="A look under the hood."
          sub="Pulled from real notes, not polished talking points. This is how I reason about systems before code is written."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ArchitectureSVG />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              fig.01 — KrishiDost: four services, each with one responsibility
            </p>
          </div>

          <div className="space-y-5 lg:col-span-6">
            {depth.challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5"
              >
                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300/80">
                  <span>challenge {String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-zinc-800" />
                </div>
                <h4 className="font-serif text-lg text-zinc-100">{c.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-zinc-800 bg-[#0a0a0b]">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            <span>~/krishidost/ai_service/brain.py</span>
            <span>read-only</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-zinc-300">
{`# RAG with a hard rule: the model can't answer without
# evidence. Empty retrieval => honest "I don't know"
# instead of a hallucinated farming tip.

def answer(question: str) -> str:
    q_emb = embedder.encode([question])           # MiniLM, ~20ms
    hits = faiss_index.search(q_emb, k=4)         # FAISS IVF, ~5ms

    if not hits or hits[0].score < MIN_SCORE:     # nothing relevant
        return I_DONT_KNOW                        # fail loud, fail safe

    context = "\\n\\n".join(d.text for d in hits)
    prompt = build_grounded_prompt(question, context)

    # Mistral via Ollama, instructed to cite or refuse.
    return mistral.generate(prompt, max_tokens=400)

# Why this matters: for a farmer, a confidently wrong
# answer is worse than no answer. The system is allowed
# to fail — it is not allowed to lie.`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSVG() {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0a0a0b] p-6">
      <svg viewBox="0 0 520 360" className="h-auto w-full">
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0" stopColor="#10b981" stopOpacity="0.0" />
            <stop offset=".5" stopColor="#10b981" stopOpacity="0.7" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="#27272a" />
          </pattern>
        </defs>
        <rect width="520" height="360" fill="url(#dots)" />

        {/* nodes */}
        {[
          { x: 30,  y: 30,  w: 130, h: 44, label: "frontend SPA" },
          { x: 30,  y: 150, w: 130, h: 44, label: "express :5000" },
          { x: 220, y: 30,  w: 150, h: 44, label: "fastapi ML :8000" },
          { x: 220, y: 150, w: 150, h: 44, label: "fastapi RAG :5001" },
          { x: 220, y: 270, w: 150, h: 44, label: "mongodb" },
          { x: 410, y: 90,  w: 90,  h: 44, label: "pytorch cnn" },
          { x: 410, y: 210, w: 90,  h: 44, label: "ollama mistral" },
        ].map((n) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="8"
              fill="#0d0d10"
              stroke="#3f3f46"
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 + 4}
              textAnchor="middle"
              className="fill-zinc-300"
              style={{ font: "11px ui-monospace, monospace" }}
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* edges */}
        {[
          ["160,52",  "220,52"],   // frontend → ML
          ["95,74",   "95,150"],   // frontend → express
          ["160,172", "220,172"],  // express ↔ rag (auth-gated)
          ["160,172", "220,290"],  // express → mongo
          ["370,52",  "410,112"],  // ml → cnn
          ["370,172", "410,232"],  // rag → ollama
        ].map(([a, b], i) => (
          <line
            key={i}
            x1={a.split(",")[0]}
            y1={a.split(",")[1]}
            x2={b.split(",")[0]}
            y2={b.split(",")[1]}
            stroke="url(#edge)"
            strokeWidth="1.5"
          />
        ))}

        <text x="30" y="345" className="fill-zinc-500" style={{ font: "10px ui-monospace, monospace" }}>
          four services · each has one job · each speaks http
        </text>
      </svg>
    </div>
  );
}

/* ── 04 — Contact ────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="relative border-t border-zinc-900/80 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
              § 04 — let’s talk
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-[64px]">
              If you’re building something that has to{" "}
              <span className="bg-gradient-to-br from-emerald-200 to-teal-400 bg-clip-text text-transparent">
                actually work in production
              </span>{" "}
              — I’d like to hear about it.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] text-zinc-400">
              I’m most useful on hard backend or ML problems where correctness,
              latency, or scale already hurt — or are about to.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard() {
  const [copied, setCopied] = useState(false);

  // Forgiving handle cleaner: accepts "@name", "name", or a full URL
  // and returns just the bare handle.
  const handle = (raw) => {
    if (!raw) return "";
    return String(raw)
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .replace(/^(github\.com|linkedin\.com\/in|x\.com|twitter\.com)\//i, "")
      .replace(/^@/, "")
      .replace(/\/$/, "");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(meta.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — silently ignore */
    }
  };

  const channels = [
    {
      id: "email",
      label: "email",
      action: copyEmail,
      hint: copied ? "copied ✓" : "copy address",
      Glyph: GlyphEnvelope,
    },
    {
      id: "github",
      label: "github",
      action: () =>
        window.open(`https://github.com/${handle(meta.github)}`, "_blank", "noopener"),
      hint: "open repos",
      Glyph: GlyphBrackets,
    },
    {
      id: "linkedin",
      label: "linkedin",
      action: () =>
        window.open(
          `https://linkedin.com/in/${handle(meta.linkedin)}`,
          "_blank",
          "noopener"
        ),
      hint: "open profile",
      Glyph: GlyphSquareIn,
    },
    {
      id: "x",
      label: "x · twitter",
      action: () =>
        window.open(`https://x.com/${handle(meta.x)}`, "_blank", "noopener"),
      hint: "open feed",
      Glyph: GlyphSlash,
    },
  ];

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 lg:p-7">
      <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        <span>channels</span>
        <span className="flex items-center gap-1.5 text-emerald-300/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          replying within 24h
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {channels.map((c) => (
          <ChannelTile key={c.id} {...c} />
        ))}
      </div>

      <div className="mt-5 border-t border-zinc-800/70 pt-4 font-mono text-[11px] text-zinc-500">
        <span className="text-zinc-600">based · </span>
        <span className="text-zinc-300">Hyderabad, IN · UTC+5:30</span>
      </div>

      <button
        onClick={copyEmail}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-400/90 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.22em] text-emerald-950 transition hover:bg-emerald-300"
      >
        {copied ? "address copied — paste in your client →" : "start a conversation →"}
      </button>
    </div>
  );
}

function ChannelTile({ label, action, hint, Glyph }) {
  return (
    <button
      onClick={action}
      aria-label={label}
      className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-md border border-zinc-800 bg-[#0d0d10] transition hover:border-emerald-400/40 hover:bg-zinc-900/60"
    >
      {/* corner brackets — terminal-frame motif */}
      <span className="pointer-events-none absolute left-1.5 top-1.5 h-2 w-2 border-l border-t border-zinc-700 transition group-hover:border-emerald-400/70" />
      <span className="pointer-events-none absolute right-1.5 top-1.5 h-2 w-2 border-r border-t border-zinc-700 transition group-hover:border-emerald-400/70" />
      <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-2 w-2 border-b border-l border-zinc-700 transition group-hover:border-emerald-400/70" />
      <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r border-zinc-700 transition group-hover:border-emerald-400/70" />

      {/* glyph — swaps to mono hint string on hover */}
      <div className="relative flex h-10 items-center justify-center">
        <span className="text-zinc-300 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-0">
          <Glyph />
        </span>
        <span className="absolute font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {hint}
        </span>
      </div>

      <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 transition group-hover:text-zinc-300">
        {label}
      </span>

      {/* subtle scanline overlay */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 3px, rgba(16,185,129,0.08) 3px 4px)",
        }}
      />
    </button>
  );
}

/* ── Custom contact glyphs — minimal, editorial, not stock logos ── */
function GlyphEnvelope() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="1.5" />
      <path d="M3.5 7.5l8 6a1 1 0 0 0 1.2 0l8-6" />
    </svg>
  );
}
function GlyphBrackets() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 7l-5 5 5 5" />
      <path d="M15 7l5 5-5 5" />
      <path d="M13.5 5l-3 14" />
    </svg>
  );
}
function GlyphSquareIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10v7" />
      <circle cx="8" cy="7.5" r="0.6" fill="currentColor" />
      <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7" />
    </svg>
  );
}
function GlyphSlash() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19L19 5" />
      <path d="M5 5l5.5 7" />
      <path d="M19 19l-5.5-7" />
    </svg>
  );
}

/* ── Footer ──────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-zinc-900/80 py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 px-6 font-mono text-[11px] text-zinc-500 sm:flex-row sm:items-center lg:px-10">
        <span>© {new Date().getFullYear()} {meta.name}.</span>
        <span className="text-zinc-600">v1.0 · last deploy: {meta.lastDeploy}</span>
      </div>
    </footer>
  );
}