export default function CallCTA({ className = "" }: { className?: string }){
  const phone = process.env.NEXT_PUBLIC_PHONE_MAIN || "+17863055509";
  const fmt = phone.replace("+1","").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${className}`}>
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700 text-sm">24/7 Emergency Service</p>
        <h3 className="text-2xl font-semibold mt-2">Flooded? Burst pipe? Storm damage?</h3>
        <p className="mt-1 text-slate-600">Certified local technicians on-site in 60 minutes or less.</p>
      </div>
      <a href={`tel:${phone}`} className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-white shadow-lg bg-red-500 text-lg hover:brightness-95">
        ?? Call Now: {fmt}
      </a>
    </div>
  );
}
