// src/components/CallCTA.tsx

type Props = { className?: string };

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackAdsConversion({ value = 1.0, currency = \"USD\" } = {}) {
  if (typeof window === \"undefined\" || typeof window.gtag !== \"function\") return;
  const id = process.env.NEXT_PUBLIC_GTAG_ID;                 // e.g., \"AW-17456973426\"
  const label = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL; // e.g., \"AbCdEfGhIjkLmNoP\"
  if (!id) return;
  const sendTo = label ? ${id}/ : id;
  window.gtag(\"event\", \"conversion\", { send_to: sendTo, value, currency });
  window.gtag(\"event\", \"generate_lead\", { value, currency });
}

export default function CallCTA({ className = \"\" }: Props) {
  const phone = process.env.NEXT_PUBLIC_PHONE_MAIN ?? \"+17863055509\";
  const fmt = phone.replace(\"+1\", \"\").replace(/(\\d{3})(\\d{3})(\\d{4})/, \"() -\");

  let fired = false;
  const sendOnce = () => { if (!fired) { fired = true; trackAdsConversion(); } };

  return (
    <div className={card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 }>
      <div>
        <p className=\"inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sky-700 text-sm\">
          24/7 Emergency Service
        </p>
        <h3 className=\"text-2xl font-semibold mt-2\">Flooded? Burst pipe? Storm damage?</h3>
        <p className=\"mt-1 text-slate-600\">Certified local technicians on‑site in ~60 minutes.</p>
      </div>
      <a
        href={	el:}
        onMouseDown={sendOnce}
        onTouchStart={sendOnce}
        aria-label={Call Rapid Home Aid now at }
        className=\"inline-flex items-center justify-center rounded-2xl px-5 py-3 text-white shadow-lg bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] text-lg hover:brightness-95\"
      >
        <span aria-hidden className=\"mr-2\">📞</span> Call Now: {fmt}
      </a>
    </div>
  );
}