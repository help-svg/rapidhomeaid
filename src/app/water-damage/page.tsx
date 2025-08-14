import CallCTA from \"@/components/CallCTA\";

export default function WaterDamage() {
  return (
    <main className=\"space-y-10\">
      <Hero
        title=\"Water Damage Restoration\"
        desc=\"Rapid extraction, structural drying, and dehumidification. On‑site in ~60 minutes. Insurance accepted.\"
        img=\"https://images.unsplash.com/photo-1569529465848-e5d5a4673fdc?q=80&w=2000&auto=format&fit=crop\"
      />
      <Triptych />
    </main>
  );
}

function Hero({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <section className=\"relative overflow-hidden rounded-3xl text-white\">
      <div
        className=\"absolute inset-0\"
        style={{
          backgroundImage: linear-gradient(135deg, rgba(2,6,23,0.75), rgba(2,132,199,0.55)), url('\'),
          backgroundSize: \"cover\",
          backgroundPosition: \"center\",
        }}
        aria-hidden
      />
      <div className=\"relative p-8 md:p-12\">
        <h1 className=\"text-4xl md:text-5xl font-extrabold tracking-tight\">{title}</h1>
        <p className=\"mt-3 max-w-2xl text-white/90\">{desc}</p>
        <div className=\"mt-6\"><CallCTA /></div>
      </div>
    </section>
  );
}

function Triptych() {
  return (
    <section className=\"grid gap-6 md:grid-cols-3\">
      <Card title=\"What We Do\" items={[
        \"Water extraction & removal\",
        \"Drying & dehumidification\",
        \"Mold prevention & sanitation\",
        \"Insurance documentation\",
      ]} />
      <Card title=\"Typical Causes\" items={[
        \"Burst or leaking pipes\",
        \"Appliance failures\",
        \"Storm & flood events\",
        \"Roof or window leaks\",
      ]} />
      <Card title=\"Why Rapid Home Aid\" items={[
        \"Certified, insured technicians\",
        \"Fast arrival, 24/7\",
        \"Insurance‑friendly process\",
        \"Transparent updates\",
      ]} />
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className=\"card p-6\">
      <h2 className=\"text-xl font-semibold\">{title}</h2>
      <ul className=\"mt-3 list-disc pl-5 text-slate-700 space-y-1\">
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
}