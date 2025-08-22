export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10">
          <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs tracking-wide">Startup Finance</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Bank-Ready. Investor-Ready. <span className="text-neutral-400">Without a Full-Time CFO.</span>
        </h1>
        <p className="mt-6 text-neutral-300">
          I help lean teams turn messy spreadsheets into banker-friendly packs and investor-grade forecasts—fast.
          Former commercial banker in NZ/AU. Now fractional finance partner for early-stage companies.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="font-semibold">Check &amp; Polish</h3>
            <p className="mt-2 text-sm text-neutral-300">$990 — 5-day turnaround</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400 list-disc pl-4">
              <li>Model &amp; metrics diagnostic</li>
              <li>Banker/investor talking points</li>
              <li>90-day finance checklist</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="font-semibold">Bank Pack</h3>
            <p className="mt-2 text-sm text-neutral-300">$2,400 — 10 business days</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400 list-disc pl-4">
              <li>Cash-flow + covenant commentary</li>
              <li>Risk mitigants &amp; deal narrative</li>
              <li>1-page banker brief (plain English)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 p-6">
            <h3 className="font-semibold">Fractional CFO Lite</h3>
            <p className="mt-2 text-sm text-neutral-300">from $1,900/mo</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400 list-disc pl-4">
              <li>Monthly reporting &amp; runway tracking</li>
              <li>Scenario planning</li>
              <li>Board/Investor updates</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-neutral-800 p-6">
          <h4 className="font-medium">How it works</h4>
          <ol className="mt-3 list-decimal pl-5 text-neutral-300 space-y-1 text-sm">
            <li>15-min intro</li>
            <li>Read-only access to your files</li>
            <li>Draft pack</li>
            <li>Polish + handover</li>
          </ol>
        </div>
        <div className="mt-12 rounded-2xl border border-neutral-800 p-6">
          <h4 className="font-medium">Get in touch</h4>
          <p className="mt-2 text-neutral-300 text-sm">Tell me what you're trying to fund in the next 90 days.</p>
          <form className="mt-4 grid gap-3" action="https://formspree.io/f/yourFormID" method="POST">
            <input className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm outline-none" name="email" type="email" placeholder="you@startup.com" required />
            <textarea className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm outline-none" name="message" placeholder="We need to extend runway / prep bank pack / raise a bridge…" rows={4} />
            <button className="rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90 active:opacity-80" type="submit">Request intro</button>
          </form>
          <p className="mt-4 text-xs text-neutral-500">Remote only · AU/NZ/US time zones</p>
        </div>
      </section>
    </main>
  );
}
