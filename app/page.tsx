"use client";

import { useState } from "react";
import EmailModal from "@/components/EmailModal";

const BRAND = "#1B5C41";
const BRAND_LIGHT = "#E3F1EB";
const GREY_BG = "#F2F0EC";

const UNIVERSITIES: { name: string; logo: string; scale: number; offsetY?: number }[] = [
  { name: "Oxford",                logo: "/logos/oxford.png",      scale: 2.0 },
  { name: "Cambridge",             logo: "/logos/cambridge.png",   scale: 3.0 },
  { name: "UCL",                   logo: "/logos/ucl.png",         scale: 1.0 },
  { name: "Imperial",              logo: "/logos/imperial.png",    scale: 1.0 },
  { name: "King's College London", logo: "/logos/kcl.png",         scale: 1.0 },
  { name: "Edinburgh",             logo: "/logos/edinburgh.png",   scale: 4.0 },
  { name: "Manchester",            logo: "/logos/manchester.webp", scale: 2.5 },
  { name: "Bristol",               logo: "/logos/bristol.png",     scale: 1.0 },
  { name: "Warwick",               logo: "/logos/warwick.png",     scale: 3.5, offsetY: 1.5 },
  { name: "Leeds",                 logo: "/logos/leeds.png",       scale: 1.0 },
  { name: "LSE",                   logo: "/logos/lse.png",         scale: 2.5 },
  { name: "Nottingham",            logo: "/logos/nottingham.png",  scale: 1.5 },
  { name: "Bath",                  logo: "/logos/bath.png",        scale: 1.5 },
];

const TESTIMONIALS = [
  { name: "Jess M.",  initials: "JM", bg: "#D4E8DE", fg: "#1B5C41", stars: 5, quote: "I went from not knowing where to start to a clear ranked list in minutes. Game changer for A-levels." },
  { name: "Tom B.",   initials: "TB", bg: "#DDEAF5", fg: "#2B5EA7", stars: 5, quote: "Finally something that actually knows the AQA syllabus. The topic weighting is spot on." },
  { name: "Priya S.", initials: "PS", bg: "#EAD4E8", fg: "#7A3070", stars: 5, quote: "The reason tags are brilliant. I know exactly why each topic is high priority." },
  { name: "Aiden K.", initials: "AK", bg: "#F5E5D5", fg: "#A05A20", stars: 5, quote: "Used 48-hour mode before my Chemistry exam. Honestly think it saved me a whole grade." },
  { name: "Sarah L.", initials: "SL", bg: "#D5EAE7", fg: "#207A70", stars: 5, quote: "So much better than just asking ChatGPT. It weights by past paper frequency." },
  { name: "Maya R.",  initials: "MR", bg: "#EAE5D5", fg: "#7A7020", stars: 5, quote: "Changed how I approach revision entirely. Would recommend to every A-level student." },
  { name: "Jake F.",  initials: "JF", bg: "#E5D5EA", fg: "#70207A", stars: 5, quote: "Clean, simple, and it just works. No fluff, no overwhelm: just the priority list." },
];

const FAQS = [
  { q: "What is Priora?", a: "Priora is an exam revision prioritiser. You tell it your subject, exam board, exam date, and how confident you are on each topic. It tells you exactly what to revise first, based on past paper frequency, syllabus weighting, and your weak spots." },
  { q: "When will it launch?", a: "We're building fast. Join the waitlist and you'll be first to know, and first to get access." },
  { q: "Is it free?", a: "Priora will have a generous free tier. Waitlist members will get early access and an extended free period as a thank-you." },
  { q: "What subjects and exam boards does it support?", a: "We're launching with AQA, OCR, and Edexcel for A-Level and GCSE. More subjects and boards will follow quickly after launch." },
  { q: "How is it different from just using ChatGPT?", a: "ChatGPT doesn't know what's high-frequency in your specific exam board's past papers, or how to weight your personal weak areas against urgency. Priora does both, and gives you a clean, actionable list, not a chat thread." },
];

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>

      {/* ── Nav ── */}
      <nav style={{ background: GREY_BG, borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "18px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 20, fontWeight: 600, color: BRAND, letterSpacing: -0.3 }}>
            Priora
          </span>
          <button
            onClick={() => setShowModal(true)}
            style={{ background: BRAND, color: "#fff", fontSize: 13.5, fontWeight: 600, padding: "9px 22px", borderRadius: 8, border: "none", cursor: "pointer", letterSpacing: -0.1 }}
          >
            Join waitlist
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ background: GREY_BG, padding: "clamp(48px, 8vw, 80px) 24px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(38px, 7vw, 72px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: -2, color: "#1A1916", marginBottom: 28 }}>
            Revise what matters.<br />
            <span style={{ color: BRAND }}>Skip the rest.</span>
          </h1>
          <p style={{ fontSize: "clamp(14px, 2vw, 16.5px)", color: "#7A7672", lineHeight: 1.65, maxWidth: 480, margin: "0 auto 36px", fontWeight: 400 }}>
            The AI-powered revision tool that tells you exactly what to study next, based on your exam board, weak topics, and time left.
          </p>
          <button
            onClick={() => setShowModal(true)}
            style={{ background: BRAND, color: "#fff", fontSize: "clamp(14px, 2vw, 15px)", fontWeight: 600, padding: "13px 32px", borderRadius: 10, border: "none", cursor: "pointer", letterSpacing: -0.1 }}
          >
            Try it — it&apos;s free
          </button>
          <p style={{ fontSize: 12, color: "#B0ABA6", marginTop: 12 }}>Join 200+ students already on the waitlist</p>
        </div>
      </section>

      {/* ── Hero mockup ── */}
      <section className="hero-mockup-section" style={{ background: GREY_BG, padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div className="hero-mockup-wrap">
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)" }}>
                <div className="hero-grid">

                  {/* Left sidebar */}
                  <div className="hero-sidebar-border" style={{ background: "#FAFAF8", padding: "28px 24px" }}>
                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 10 }}>Subject</div>
                    <div style={{ display: "inline-flex", alignItems: "center", background: BRAND_LIGHT, padding: "6px 12px", borderRadius: 7, marginBottom: 24 }}>
                      <span style={{ fontSize: 13.5, fontWeight: 500, color: BRAND, letterSpacing: -0.1 }}>AQA Biology</span>
                    </div>

                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 10 }}>Exam date</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 44, fontWeight: 700, color: "#1A1916", lineHeight: 1, letterSpacing: -2 }}>14</span>
                      <span style={{ fontSize: 14, color: "#8C8884" }}>days away</span>
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 99, background: "#FDF0ED", marginBottom: 24 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C44019", display: "block" }} />
                      <span style={{ fontSize: 10.5, fontWeight: 700, color: "#C44019", letterSpacing: 0.1 }}>Revise now</span>
                    </div>

                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 14 }}>Topic confidence</div>
                    {[
                      { name: "Photosynthesis", dots: 2 },
                      { name: "Respiration",    dots: 3 },
                      { name: "Genetics",       dots: 1 },
                    ].map((t, i, arr) => (
                      <div key={t.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                        <span style={{ fontSize: 13.5, color: "#1A1916", fontWeight: 400 }}>{t.name}</span>
                        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                          {[1,2,3,4,5].map(d => (
                            <div key={d} style={{ width: 8, height: 8, borderRadius: "50%", background: d <= t.dots ? BRAND : "transparent", border: `1.5px solid ${d <= t.dots ? BRAND : "#C4C0BB"}` }} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right — priorities output */}
                  <div style={{ background: GREY_BG, padding: "28px 32px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: BRAND, marginBottom: 6 }}>Your revision priorities</div>
                    <h2 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 24, fontWeight: 600, color: "#1A1916", letterSpacing: -0.5, marginBottom: 20, lineHeight: 1.25 }}>
                      Here&apos;s what you need to focus on.
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ background: BRAND_LIGHT, borderRadius: 12, padding: "18px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: BRAND }}>Must revise today</span>
                          <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 36, fontWeight: 700, color: BRAND, lineHeight: 1, letterSpacing: -2, opacity: 0.25 }}>01</span>
                        </div>
                        {["Genetics", "Photosynthesis"].map(t => (
                          <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: BRAND, flexShrink: 0 }} />
                            <span style={{ fontSize: 14, fontWeight: 500, color: "#1A1916" }}>{t}</span>
                            <span style={{ marginLeft: "auto", fontSize: 10, color: BRAND, fontWeight: 600, background: "rgba(27,92,65,0.12)", padding: "2px 7px", borderRadius: 99, whiteSpace: "nowrap" }}>high frequency · weak area</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ background: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 12, padding: "16px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#B0ABA6" }}>Next priority</span>
                          <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 36, fontWeight: 700, color: "#D8D4CF", lineHeight: 1, letterSpacing: -2 }}>02</span>
                        </div>
                        {["Respiration", "Cell division"].map(t => (
                          <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C4C0BB", flexShrink: 0 }} />
                            <span style={{ fontSize: 14, color: "#1A1916" }}>{t}</span>
                            <span style={{ marginLeft: "auto", fontSize: 10, color: "#7A7672", fontWeight: 500, background: "rgba(0,0,0,0.05)", padding: "2px 7px", borderRadius: 99 }}>medium priority</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ background: "#FAFAF8", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 12, padding: "12px 20px", opacity: 0.6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#B0ABA6" }}>Low priority, skip for now</span>
                          <span style={{ marginLeft: "auto", fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 28, fontWeight: 700, color: "#D8D4CF", letterSpacing: -1.5 }}>03</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div>
      </section>

      {/* ── University marquee ── */}
      <section style={{ background: "#fff", padding: "52px 0" }}>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.4, textTransform: "uppercase", color: "#ADA9A4", textAlign: "center", marginBottom: 28 }}>
          Trusted by students applying to
        </p>
        <div style={{ position: "relative", overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div
            className="flex items-center whitespace-nowrap"
            style={{ animation: "marquee 63s linear infinite reverse", width: "max-content" }}
          >
            {[...UNIVERSITIES, ...UNIVERSITIES].map((uni, i) => (
              <span key={i} style={{ margin: "0 20px", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={uni.logo}
                  alt={uni.name}
                  style={{ height: 48, width: 160, objectFit: "contain", filter: "grayscale(1)", opacity: 0.45, transform: `scale(${uni.scale})${uni.offsetY ? ` translateY(${uni.offsetY}px)` : ""}` }}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ background: "#fff", padding: "12px 0 72px" }}>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.4, textTransform: "uppercase", color: "#ADA9A4", textAlign: "center", marginBottom: 32 }}>
          What our beta testers think
        </p>
        <div style={{ position: "relative", overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee 50s linear infinite", width: "max-content" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                style={{ display: "inline-flex", flexDirection: "column", margin: "0 10px", width: 280, background: "#FAFAF8", borderRadius: 12, padding: "20px 22px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)", whiteSpace: "normal", verticalAlign: "top" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: t.fg, letterSpacing: 0.2 }}>{t.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1A1916", marginBottom: 3 }}>{t.name}</div>
                    <div style={{ display: "flex", gap: 1.5 }}>
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <span key={si} style={{ fontSize: 12, color: "#F5A623", lineHeight: 1 }}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#6A6662", lineHeight: 1.6, margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mobile-section-pad" style={{ background: GREY_BG, padding: "100px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "#1A1916", letterSpacing: -1.5, textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)", lineHeight: 1.1 }}>
            Know exactly what to revise.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 7vw, 96px)" }}>

            {/* Feature 1: text left, mockup right */}
            <div className="feature-grid">
              <div>
                <h3 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: "#1A1916", letterSpacing: -0.8, marginBottom: 14, lineHeight: 1.2 }}>
                  Tell Priora your subject and confidence
                </h3>
                <p style={{ fontSize: 14.5, color: "#7A7672", lineHeight: 1.7 }}>
                  Select your exam board and subject, enter your exam date, and rate how confident you feel on each topic. Takes under two minutes.
                </p>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div style={{ padding: "24px 24px 0" }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 10 }}>Subject</div>
                  <div style={{ display: "inline-flex", background: BRAND_LIGHT, padding: "6px 12px", borderRadius: 7, marginBottom: 20 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: BRAND }}>AQA Biology</span>
                  </div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 8 }}>Topic confidence</div>
                  {[
                    { name: "Photosynthesis", dots: 2 },
                    { name: "Respiration",    dots: 3 },
                    { name: "Genetics",       dots: 1 },
                    { name: "Homeostasis",    dots: 4 },
                  ].map((t, i, arr) => (
                    <div key={t.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                      <span style={{ fontSize: 13, color: "#1A1916" }}>{t.name}</span>
                      <div style={{ display: "flex", gap: 5 }}>
                        {[1,2,3,4,5].map(d => (
                          <div key={d} style={{ width: 8, height: 8, borderRadius: "50%", background: d <= t.dots ? BRAND : "transparent", border: `1.5px solid ${d <= t.dots ? BRAND : "#C4C0BB"}` }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "18px 24px 24px" }}>
                  <div style={{ width: "100%", padding: "12px 0", background: BRAND, color: "#fff", borderRadius: 9, fontSize: 13.5, fontWeight: 600, textAlign: "center", letterSpacing: -0.1 }}>
                    Generate priorities
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: text left, mockup right — text first in DOM so mobile stacks correctly */}
            <div className="feature-grid">
              <div>
                <h3 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: "#1A1916", letterSpacing: -0.8, marginBottom: 14, lineHeight: 1.2 }}>
                  Exam tomorrow? Priora tells you exactly where to spend your time
                </h3>
                <p style={{ fontSize: 14.5, color: "#7A7672", lineHeight: 1.7 }}>
                  When time is critical, Priora compresses your plan to just what matters: the highest-impact topics, in order. No filler, no guessing.
                </p>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid rgba(0,0,0,0.07)", padding: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: BRAND, marginBottom: 10 }}>Priora</div>
                <h4 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 20, fontWeight: 600, color: "#1A1916", letterSpacing: -0.5, marginBottom: 14, lineHeight: 1.2 }}>
                  If your exam was in 48 hours, do this first.
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { num: "01", tag: "Must Do",        title: "High Impact Topics", items: ["Genetics", "Photosynthesis"],                       primary: true  },
                    { num: "02", tag: "Exam Technique",  title: "Past Paper Focus",   items: ["1 timed past paper today", "Review mark scheme after"], primary: false },
                    { num: "03", tag: "Gap Fill",        title: "Weakness Repair",    items: ["Respiration, 20 min burst"],                        primary: false },
                  ].map(b => (
                    <div key={b.num} style={{ background: b.primary ? BRAND_LIGHT : GREY_BG, borderRadius: 9, padding: "13px 16px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 28, fontWeight: 700, lineHeight: 1, letterSpacing: -1.5, color: b.primary ? BRAND : "#D8D4CF" }}>{b.num}</span>
                        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.1, textTransform: "uppercase", color: b.primary ? BRAND : "#B0ABA6", marginTop: 3 }}>{b.tag}</span>
                      </div>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: "#1A1916", marginBottom: 6 }}>{b.title}</div>
                      {b.items.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: b.primary ? BRAND : "#C4C0BB", flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: "#1A1916" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, padding: "10px 14px", background: "#FDF0ED", borderRadius: 8 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C44019", flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#C44019" }}>Do NOT revise low priority topics</span>
                </div>
              </div>
            </div>

            {/* Feature 3: text left, mockup right */}
            <div className="feature-grid">
              <div>
                <h3 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: "#1A1916", letterSpacing: -0.8, marginBottom: 14, lineHeight: 1.2 }}>
                  Every topic ranked. Every reason explained.
                </h3>
                <p style={{ fontSize: 14.5, color: "#7A7672", lineHeight: 1.7 }}>
                  Priora doesn&apos;t just tell you what to revise. It shows you why. Each topic comes with reason tags so you understand the logic behind your plan.
                </p>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid rgba(0,0,0,0.07)", padding: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 16 }}>AQA Biology, all topics</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    { rank: 1, name: "Genetics",       tags: ["weak area", "high frequency", "high mark value"], priority: "must" },
                    { rank: 2, name: "Photosynthesis",  tags: ["weak area", "high frequency"],                   priority: "must" },
                    { rank: 3, name: "Respiration",     tags: ["medium confidence", "high frequency"],            priority: "next" },
                    { rank: 4, name: "Cell division",   tags: ["medium confidence"],                              priority: "next" },
                    { rank: 5, name: "Homeostasis",     tags: ["strong area"],                                    priority: "low"  },
                    { rank: 6, name: "Nervous system",  tags: ["strong area", "low frequency"],                  priority: "low"  },
                  ].map((t) => {
                    const priorityColor = t.priority === "must" ? BRAND : t.priority === "next" ? "#7A7672" : "#C4C0BB";
                    const rowBg = t.priority === "must" ? BRAND_LIGHT : "transparent";
                    return (
                      <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderRadius: 8, background: rowBg, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 13, fontWeight: 700, color: priorityColor, width: 18, flexShrink: 0, letterSpacing: -0.5 }}>{t.rank}</span>
                        <span style={{ fontSize: 13.5, fontWeight: t.priority === "must" ? 600 : 400, color: t.priority === "low" ? "#ADA9A4" : "#1A1916", flex: 1, minWidth: 80 }}>{t.name}</span>
                        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                          {t.tags.map(tag => (
                            <span key={tag} style={{ fontSize: 10, fontWeight: 600, color: t.priority === "must" ? BRAND : "#7A7672", background: t.priority === "must" ? "rgba(27,92,65,0.12)" : "rgba(0,0,0,0.05)", padding: "2px 7px", borderRadius: 99, whiteSpace: "nowrap" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Feature 4: text left, mockup right */}
            <div className="feature-grid">
              <div>
                <h3 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, color: "#1A1916", letterSpacing: -0.8, marginBottom: 14, lineHeight: 1.2 }}>
                  Track your streak. Build momentum.
                </h3>
                <p style={{ fontSize: 14.5, color: "#7A7672", lineHeight: 1.7 }}>
                  See your daily revision streak and watch topic confidence grow over time. Stay consistent, and Priora shows you exactly where you&apos;re improving.
                </p>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, border: "1px solid rgba(0,0,0,0.07)", padding: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, padding: "16px 18px", background: BRAND_LIGHT, borderRadius: 10 }}>
                  <span style={{ fontSize: 26, lineHeight: 1 }}>🔥</span>
                  <div>
                    <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: BRAND, marginBottom: 3 }}>Current streak</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
                      <span style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 30, fontWeight: 700, color: BRAND, lineHeight: 1, letterSpacing: -1.5 }}>14</span>
                      <span style={{ fontSize: 13, color: BRAND, opacity: 0.7 }}>days</span>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: 1.25, textTransform: "uppercase", color: "#B0ABA6", marginBottom: 14 }}>Topic confidence</div>
                {[
                  { name: "Homeostasis",    pct: 90, label: "Confident",   color: BRAND },
                  { name: "Respiration",    pct: 68, label: "Improving",   color: "#5E9A72" },
                  { name: "Genetics",       pct: 44, label: "Progressing", color: "#B08040" },
                  { name: "Photosynthesis", pct: 26, label: "Needs work",  color: "#C44019" },
                ].map(t => (
                  <div key={t.name} style={{ marginBottom: 13 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 12.5, color: "#1A1916" }}>{t.name}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: t.color }}>{t.label}</span>
                    </div>
                    <div style={{ height: 5, background: "rgba(0,0,0,0.07)", borderRadius: 99 }}>
                      <div style={{ height: "100%", width: `${t.pct}%`, background: t.color, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mobile-section-pad" style={{ background: "#fff", padding: "100px 32px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "#1A1916", letterSpacing: -1.2, textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)", lineHeight: 1.1 }}>
            Frequently asked questions
          </h2>
          <div>
            {FAQS.map(({ q, a }, i) => (
              <div key={q} style={{ borderBottom: "1px solid rgba(0,0,0,0.09)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 0", textAlign: "left", gap: 16 }}
                >
                  <span style={{ fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 500, color: "#1A1916", letterSpacing: -0.2, lineHeight: 1.4 }}>{q}</span>
                  <span style={{ color: "#B0ABA6", flexShrink: 0, fontSize: 18, fontWeight: 300, transform: openFaq === i ? "rotate(90deg)" : "none", transition: "transform 0.2s ease" }}>›</span>
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 14.5, color: "#7A7672", lineHeight: 1.7, paddingBottom: 22, letterSpacing: -0.1 }}>{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="mobile-section-pad" style={{ background: GREY_BG, padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "#1A1916", letterSpacing: -1.5, marginBottom: 16, lineHeight: 1.1 }}>
            Stop guessing.<br />Start scoring.
          </h2>
          <p style={{ fontSize: 15, color: "#7A7672", marginBottom: 32 }}>Join the waitlist and be first to access Priora when we launch.</p>
          <button
            onClick={() => setShowModal(true)}
            style={{ background: BRAND, color: "#fff", fontSize: 15, fontWeight: 600, padding: "14px 36px", borderRadius: 10, border: "none", cursor: "pointer", letterSpacing: -0.1 }}
          >
            Join the waitlist — it&apos;s free
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)", padding: "28px 32px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#B0ABA6" }}>© 2025 Priora. All rights reserved.</p>
      </footer>

      {showModal && <EmailModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
