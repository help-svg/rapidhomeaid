import \"./globals.css\";
import Header from \"../components/Header\";
import Footer from \"../components/Footer\";
import { Analytics } from \"@vercel/analytics/react\";
import { Inter } from \"next/font/google\";
import Script from \"next/script\";

const inter = Inter({ subsets: [\"latin\"], display: \"swap\" });

export const metadata = {
  title: \"Rapid Home Aid | 24/7 Water Damage Repair\",
  description: \"Rapid Home Aid – Emergency water damage restoration & HVAC.\",
  openGraph: {
    title: \"Rapid Home Aid\",
    description: \"24/7 emergency water damage coordination. On‑site in ~60 minutes.\",
    url: \"https://rapidhomeaid.com\",
    siteName: \"Rapid Home Aid\",
    images: [
      {
        url: \"https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop\",
        width: 1200,
        height: 630,
        alt: \"Rapid Home Aid\",
      },
    ],
    locale: \"en_US\",
    type: \"website\",
  },
  icons: { icon: \"/favicon.svg\" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=\"en\">
      <head>
        <meta name=\"theme-color\" content=\"#0ea5e9\" />
        <link rel=\"icon\" href=\"/favicon.svg\" />

        {/* ✅ Tailwind CDN fallback so the site is styled no matter what */}
        <Script
          id=\"tw-cdn\"
          src=\"https://cdn.tailwindcss.com\"
          strategy=\"beforeInteractive\"
        />
        <Script id=\"tw-cdn-config\" strategy=\"beforeInteractive\">{
          // optional: keep it minimal
          tailwind.config = {
            theme: { extend: {} },
          };
        }</Script>

        {/* Google tag (gtag.js) via Next Script to satisfy lint */}
        <Script
          src=\"https://www.googletagmanager.com/gtag/js?id=AW-17456973426\"
          strategy=\"afterInteractive\"
        />
        <Script id=\"gtag-init\" strategy=\"afterInteractive\">{
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17456973426');
        }</Script>
      </head>
      <body className={\\ min-h-screen\}>
        <Header />
        <main className=\"mx-auto max-w-6xl px-4 py-10 md:py-12\">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}