"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-browser";

const BRAND = "#1B5C41";

interface EmailModalProps {
  onClose: () => void;
}

// A simple email capture modal that saves emails to a Supabase table called "waitlist".

export default function EmailModal({ onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    const { error } = await supabaseBrowser.from("waitlist").insert({ email });
    setStatus(error ? "error" : "success");
  }

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "rgba(0,0,0,0.45)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#FAFAF8", borderRadius: 14, boxShadow: "0 16px 60px rgba(0,0,0,0.18)", width: "100%", maxWidth: 420, padding: "clamp(24px, 6vw, 40px)", position: "relative" }}>
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", cursor: "pointer", fontSize: 22, color: "#B0ABA6", lineHeight: 1 }}
          aria-label="Close"
        >
          ×
        </button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 26, fontWeight: 700, color: "#1A1916", marginBottom: 8, letterSpacing: -0.5 }}>You&apos;re on the list!</h2>
            <p style={{ fontSize: 14, color: "#7A7672", lineHeight: 1.6 }}>We&apos;ll let you know as soon as Priora is ready.</p>
            <button
              onClick={onClose}
              style={{ marginTop: 24, background: BRAND, color: "#fff", fontSize: 14, fontWeight: 600, padding: "11px 28px", borderRadius: 8, border: "none", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "var(--font-crimson-pro), Georgia, serif", fontSize: 28, fontWeight: 700, color: "#1A1916", letterSpacing: -0.6, marginBottom: 6 }}>Join the waitlist</h2>
            <p style={{ fontSize: 14, color: "#7A7672", marginBottom: 24, lineHeight: 1.6 }}>
              Be first to know when Priora launches. No spam, ever.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 8, padding: "12px 14px", fontSize: 14, color: "#1A1916", background: "#fff", outline: "none", fontFamily: "var(--font-dm-sans), system-ui" }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{ background: BRAND, color: "#fff", fontSize: 14.5, fontWeight: 600, padding: "13px 0", borderRadius: 8, border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1, letterSpacing: -0.1 }}
              >
                {status === "loading" ? "Joining…" : "Join waitlist — it's free"}
              </button>
              {status === "error" && (
                <p style={{ fontSize: 12.5, color: "#C44019", textAlign: "center" }}>Something went wrong. Try again.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
