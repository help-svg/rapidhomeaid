import CallCTA from "@/components/CallCTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <section className="relative rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative p-8 md:p-12 text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white text-sm ring-1 ring-white/30">
            24/7 Emergency Response
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Water Damage? We’ll Get You Dry — Fast.
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Certified, insured technicians. On‑site in ~60 minutes. We work with major insurers.
          </p>
          <div className="mt-6">
            <CallCTA />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
            <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/30">IICRC Certified</span>
            <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/30">Insurance Accepted</span>
            <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/30">Mold Prevention</span>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <Link href="/water-damage" className="block rounded-2xl border border-slate-200 p-6 hover:shadow-sm">
          <h3 className="text-xl font-semibold">Water Damage Repair</h3>
          <p className="mt-2 text-slate-600">Extraction, drying, dehumidification, and restoration.</p>
        </Link>
        <Link href="/flood-cleanup" className="block rounded-2xl border border-slate-200 p-6 hover:shadow-sm">
          <h3 className="text-xl font-semibold">Flood Cleanup</h3>
          <p className="mt-2 text-slate-600">Standing water removal and sanitation.</p>
        </Link>
        <Link href="/burst-pipe" className="block rounded-2xl border border-slate-200 p-6 hover:shadow-sm">
          <h3 className="text-xl font-semibold">Burst Pipe</h3>
          <p className="mt-2 text-slate-600">Emergency stop‑leak and structural drying.</p>
        </Link>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          <li className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-700">1) Call Us 24/7</div>
            <div className="text-slate-600">Immediate triage and ETA.</div>
          </li>
          <li className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-700">2) On‑Site in ~60 min</div>
            <div className="text-slate-600">Water extraction & drying begin right away.</div>
          </li>
          <li className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-700">3) Insurance‑Friendly</div>
            <div className="text-slate-600">We work with major insurers and document the loss.</div>
          </li>
        </ol>
      </section>
    </main>
  );
}