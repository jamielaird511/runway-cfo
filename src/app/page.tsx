"use client";

import Logo from "@/components/Logo";

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path fill="currentColor" d="M9.55 17.6 4.9 13l1.4-1.4 3.25 3.25 7.25-7.25 1.4 1.4Z"/>
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path fill="currentColor" d="M10 4h4a2 2 0 0 1 2 2v1h3a1 1 0 0 1 1 1v3H4V8a1 1 0 0 1 1-1h3V6a2 2 0 0 1 2-2Zm0 3h4V6h-4v1Zm12 6v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h8v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h6Z"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path fill="currentColor" d="M3 3h2v18H3V3Zm4 10h2v8H7v-8Zm4-6h2v14h-2V7Zm4 4h2v10h-2V11Zm4-6h2v16h-2V5Z"/>
    </svg>
  );
}

import { useEffect, useState } from "react";

function ContactForm() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // Server (and initial client) render: simple placeholder to keep layout stable
    return (
      <div className="mt-4 grid gap-3">
        <div className="h-11 rounded-xl border border-neutral-200 bg-white/60" />
        <div className="h-28 rounded-xl border border-neutral-200 bg-white/60" />
        <div className="h-11 w-40 rounded-xl bg-neutral-200" />
      </div>
    );
  }

  return (
    <form
      className="mt-4 grid gap-3"
      action="https://formspree.io/f/yourFormID"
      method="POST"
      autoComplete="on"
    >
      <input
        className="w-full rounded-xl bg-white border border-neutral-200 px-4 py-3 text-sm outline-none text-neutral-800"
        name="email"
        type="email"
        placeholder="you@startup.com"
        required
        autoComplete="email"
      />
      <textarea
        className="w-full rounded-xl bg-white border border-neutral-200 px-4 py-3 text-sm outline-none text-neutral-800"
        name="message"
        placeholder="We need to extend runway / prep bank pack / raise a bridge…"
        rows={4}
        autoComplete="off"
      />
      <div className="flex flex-wrap items-center gap-3">
        <button
          className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90 active:opacity-80"
          type="submit"
        >
          Request Intro
        </button>
        <a
          href="mailto:hello@runway-cfo.com"
          className="text-sm text-neutral-600 underline underline-offset-4"
        >
          Prefer email? hello@runway-cfo.com
        </a>
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero with subtle runway gradient */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none text-6xl md:text-8xl font-extrabold tracking-[0.25em] text-white/5">
            RUNWAY CFO
          </span>
        </div>

        <header className="sticky top-0 z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
          <Logo size="lg" />
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#offering" className="text-neutral-300 hover:text-white">Offering</a>
            <a href="#how" className="text-neutral-300 hover:text-white">How it works</a>
            <a href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-sky-400 px-4 py-2 text-sm font-medium text-neutral-950 hover:opacity-90">
            Get Flight-Ready
          </a>
        </header>

        <div className="mx-auto max-w-3xl px-6 pb-16 pt-10 text-center md:pt-16">
          <p className="mx-auto inline-block rounded-full border border-neutral-800 px-3 py-1 text-xs tracking-wide text-sky-400">
            Finance for Lean Startups
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Fractional CFO for lean but funded startups.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-300">
            Investor-ready reporting, board packs, and runway clarity — without a full-time CFO.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
            Ex-commercial banker (NZ/AU). 10+ years reviewing SME credit files and structuring facilities.
            Now a fractional partner for early-stage teams.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#contact" className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90">Request Intro</a>
            <a href="#offering" className="rounded-xl border border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-900">View Offering</a>
          </div>
        </div>
      </section>

      <div className="w-full bg-white text-neutral-800">
        {/* Primary offering */}
        <section id="offering" className="mx-auto max-w-6xl px-6 py-12 bg-white text-neutral-900">
          <h2 className="text-xl font-semibold text-neutral-900">Primary offering</h2>

          {/* Primary card — Retainer */}
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Fractional CFO Retainer</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Ongoing finance partnership for seed/Series A teams that need investor-grade clarity without hiring full-time.
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-neutral-500">from</div>
                <div className="text-2xl font-bold tracking-tight">$1,900<span className="text-sm font-medium text-neutral-500">/mo</span></div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-2">
                <li>Monthly runway &amp; cash reporting (burn, months left)</li>
                <li>Investor/board packs in plain English</li>
                <li>Scenario planning &amp; covenant commentary</li>
              </ul>
              <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-2">
                <li>Founder finance sparring partner</li>
                <li>Lightweight KPI / metric tracking</li>
                <li>Fast async turnaround, 5–10 hrs/month</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90">Book intro</a>
              <a href="#ad-hoc" className="text-sm text-neutral-700 underline underline-offset-4">Prefer a one-off pack?</a>
            </div>
          </div>
        </section>

        {/* Ad-hoc services */}
        <section id="ad-hoc" className="mx-auto max-w-6xl px-6 pb-12 bg-white text-neutral-900">
          <h2 className="text-xl font-semibold text-neutral-900">Ad-hoc services</h2>
          <p className="mt-2 text-sm text-neutral-600">One-off, fixed-fee entries if you are not ready for a retainer.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:bg-neutral-50">
              <h3 className="font-semibold">Check &amp; Polish</h3>
              <p className="mt-1 text-sm text-neutral-600">$990 — 5-day turnaround</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li>Model &amp; metrics diagnostic</li>
                <li>Investor/banker talking points</li>
                <li>90-day finance checklist</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:bg-neutral-50">
              <h3 className="font-semibold">Bank Pack</h3>
              <p className="mt-1 text-sm text-neutral-600">$2,400 — 10 business days</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li>Cash-flow plus covenant commentary</li>
                <li>Risk mitigants &amp; deal narrative</li>
                <li>1-page banker brief (plain English)</li>
              </ul>
            </div>
          </div>
        </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-xl font-semibold text-neutral-900">How it works</h2>
        <ol className="mt-4 grid gap-4 text-sm text-neutral-600 md:grid-cols-4">
          <li className="rounded-xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50"><span className="text-neutral-400">01</span><br/>15-min intro</li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50"><span className="text-neutral-400">02</span><br/>Read-only access to files</li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50"><span className="text-neutral-400">03</span><br/>Draft pack</li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50"><span className="text-neutral-400">04</span><br/>Polish &amp; handover</li>
        </ol>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-medium text-neutral-900">Get in touch</h3>
          <p className="mt-2 text-sm text-neutral-600">Tell me what you're trying to fund in the next 90 days.</p>
          <ContactForm />
        </div>
      </section>
      </div>

      <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Runway CFO</span>
          <span>Remote • AU/NZ/US time zones</span>
        </div>
      </footer>
    </main>
  );
}
