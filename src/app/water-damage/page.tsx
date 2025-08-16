import CallCTA from "@/components/CallCTA";

export default function WaterDamage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 text-white px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Emergency Water Damage Repair</h1>
        <p className="mt-2 text-white/90">Extraction, drying, dehumidification, and restoration — fast.</p>
        <div className="mt-5"><CallCTA /></div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Rapid Response</h3>
          <p className="mt-1 text-slate-600">On-site in ~60 minutes. 24/7 dispatch.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Certified Pros</h3>
          <p className="mt-1 text-slate-600">IICRC guidelines for drying and remediation.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Insurance Ready</h3>
          <p className="mt-1 text-slate-600">We help document the loss for claims.</p>
        </div>
      </section>
    </div>
  );
}