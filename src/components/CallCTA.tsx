type Props = { className?: string };

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackAdsConversion({ value = 1.0, currency = "USD" } = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const id = process.env.NEXT_PUBLIC_GTAG_ID;
  const label = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL; // optional
  if (!id) return;
  const sendTo = label ? `${id}/${label}` : id;

  window.gtag("event", "conversion", { send_to: sendTo, value, currency });
  window.gtag("event", "generate_lead", { value, currency }); // safe no-op if GA4 not present
}

export default function CallCTA({ className = "" }: Props) {
  const phone = process.env.NEXT_PUBLIC_PHONE_MAIN ?? "+17863055509";
  const fmt = phone.replace("+1", "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${className}`}>
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700 text-sm">
          24/7 Emergency Service
        </p>
        <h3 className="text-2xl font-semibold mt-2">Flooded? Burst pipe? Storm damage?</h3>
        <p className="mt-1 text-slate-600">Certified local technicians on-site in ~60 minutes.</p>
      </div>

      <a
        href={`tel:${phone}`}
        onMouseDown={() => trackAdsConversion()}
        aria-label={`Call Rapid Home Aid now at ${fmt}`}
        className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-white shadow-lg bg-gradient-to-r from-sky-500 to-sky-600 text-lg hover:brightness-95"
      >
        <span aria-hidden className="mr-2">📞</span> Call Now: {fmt}
      </a>
    </div>
  );
}
