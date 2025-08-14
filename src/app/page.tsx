import Link from \"next/link\";
import CallCTA from \"@/components/CallCTA\";

export default function Home() {
  return (
    <main className=\"space-y-14\">
      {/* HERO */}
      <section className=\"relative overflow-hidden rounded-3xl text-white\">
        <div
          className=\"absolute inset-0\"
          style={{
            backgroundImage:
              \"linear-gradient(135deg, rgba(2,6,23,0.75), rgba(2,132,199,0.55)), url('https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=2000&auto=format&fit=crop')\",
            backgroundSize: \"cover\",
            backgroundPosition: \"center\",
          }}
          aria-hidden
        />
        <div className=\"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl\" />
        <div className=\"pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl\" />
        <div className=\"relative p-8 md:p-12\">
          <p className=\"inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm ring-1 ring-white/30\">
            24/7 Emergency Response
          </p>
          <h1 className=\"mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight\">
            Water Damage? We’ll Get You Dry — Fast.
          </h1>
          <p className=\"mt-3 max-w-2xl text-white/90\">
            Certified, insured technicians. On‑site in ~60 minutes. We work with major insurers.
          </p>
          <div className=\"mt-6\"><CallCTA /></div>
          <div className=\"mt-6 flex flex-wrap gap-3 text-sm text-white/90\">
            <span className=\"rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/30\">IICRC Certified</span>
            <span className=\"rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/30\">Insurance Accepted</span>
            <span className=\"rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/30\">Mold Prevention</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className=\"grid gap-6 md:grid-cols-3\">
        <div className=\"card p-6 smooth hover:shadow-sm\">
          <div className=\"text-3xl font-extrabold text-slate-900\">≤ 60 min</div>
          <p className=\"mt-1 text-slate-600\">Typical arrival time</p>
        </div>
        <div className=\"card p-6 smooth hover:shadow-sm\">
          <div className=\"text-3xl font-extrabold text-slate-900\">24/7</div>
          <p className=\"mt-1 text-slate-600\">Always on call</p>
        </div>
        <div className=\"card p-6 smooth hover:shadow-sm\">
          <div className=\"text-3xl font-extrabold text-slate-900\">Insurance</div>
          <p className=\"mt-1 text-slate-600\">We work with major carriers</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className=\"grid gap-6 md:grid-cols-3\">
        <Tile
          href=\"/water-damage\"
          title=\"Water Damage Repair\"
          desc=\"Extraction, drying, dehumidification, restoration.\"
          img=\"https://images.unsplash.com/photo-1518331647614-4e0b0b9459fb?q=80&w=1600&auto=format&fit=crop\"
        />
        <Tile
          href=\"/flood-cleanup\"
          title=\"Flood Cleanup\"
          desc=\"Standing water removal and sanitation.\"
          img=\"https://images.unsplash.com/photo-1502301103665-0b3b3c1e73e8?q=80&w=1600&auto=format&fit=crop\"
        />
        <Tile
          href=\"/burst-pipe\"
          title=\"Burst Pipe\"
          desc=\"Emergency stop‑leak & structural drying.\"
          img=\"https://images.unsplash.com/photo-1515165562835-c3b8c0b3517b?q=80&w=1600&auto=format&fit=crop\"
        />
      </section>

      {/* HOW IT WORKS */}
      <section className=\"card p-6\">
        <h2 className=\"text-2xl font-bold\">How It Works</h2>
        <ol className=\"mt-4 grid gap-4 md:grid-cols-3\">
          <Step n=\"1\" title=\"Call Us 24/7\" desc=\"Immediate triage and ETA.\" />
          <Step n=\"2\" title=\"On‑Site in ~60 min\" desc=\"Water extraction & drying begin right away.\" />
          <Step n=\"3\" title=\"Insurance‑Friendly\" desc=\"We work with major insurers and document the loss.\" />
        </ol>
      </section>

      {/* SECONDARY CTA */}
      <section className=\"relative overflow-hidden rounded-3xl ring-1 ring-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-6\">
        <div className=\"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl\" />
        <h2 className=\"text-2xl font-bold text-slate-900\">Need help right now?</h2>
        <p className=\"mt-1 text-slate-700\">
          Call us any time—day or night. We’ll coordinate a certified pro to your door.
        </p>
        <div className=\"mt-4\"><CallCTA /></div>
      </section>
    </main>
  );
}

function Tile({ href, title, desc, img }:{ href:string; title:string; desc:string; img:string }) {
  return (
    <Link href={href} className=\"group relative block overflow-hidden rounded-2xl ring-1 ring-slate-200\">
      <div
        className=\"absolute inset-0 smooth group-hover:scale-105\"
        style={{
          backgroundImage: linear-gradient(0deg, rgba(2,6,23,0.65), rgba(2,6,23,0.15)), url('\'),
          backgroundSize: \"cover\",
          backgroundPosition: \"center\",
        }}
      />
      <div className=\"relative p-6 md:p-7 text-white\">
        <h3 className=\"text-xl font-semibold\">{title}</h3>
        <p className=\"mt-2 text-white/85\">{desc}</p>
        <p className=\"mt-4 font-medium text-sky-200\">Learn more →</p>
      </div>
    </Link>
  );
}

function Step({ n, title, desc }:{ n:string; title:string; desc:string }) {
  return (
    <li className=\"rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200\">
      <div className=\"text-sm font-semibold text-slate-700\">{n}) {title}</div>
      <div className=\"text-slate-600\">{desc}</div>
    </li>
  );
}