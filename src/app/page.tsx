import Link from "next/link";
import CallCTA from "@/components/CallCTA";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 text-white px-6 py-14 md:px-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold">Water Damage? We’ll Get You Dry — Fast.</h1>
          <p className="mt-3 text-white/90">
            Certified, insured technicians. On-site in ~60 minutes. We work with major insurers.
          </p>
          <div className="mt-6">
            <CallCTA />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6">
        <Link href="/water-damage" className="card p-6 hover:shadow-md smooth">
          <h3 className="text-lg font-semibold">Water Damage Repair</h3>
          <p className="mt-1 text-slate-600">Extraction, drying, dehumidification, and restoration.</p>
        </Link>
        <Link href="/flood-cleanup" className="card p-6 hover:shadow-md smooth">
          <h3 className="text-lg font-semibold">Flood Cleanup</h3>
          <p className="mt-1 text-slate-600">Standing water removal and sanitation.</p>
        </Link>
        <Link href="/burst-pipe" className="card p-6 hover:shadow-md smooth">
          <h3 className="text-lg font-semibold">Burst Pipe</h3>
          <p className="mt-1 text-slate-600">Emergency stop-leak and structural drying.</p>
        </Link>
      </section>

      {/* How it works */}
      <section className="card p-6">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <ol className="mt-3 grid md:grid-cols-3 gap-4 list-decimal list-inside text-slate-700">
          <li><strong>Call Us 24/7</strong> — Immediate triage and ETA.</li>
          <li><strong>On-Site in ~60 min</strong> — Water extraction & drying begin right away.</li>
          <li><strong>Insurance-Friendly</strong> — We work with major insurers and document the loss.</li>
        </ol>
      </section>
    </div>
  );
}