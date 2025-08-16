import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Rapid Home Aid | 24/7 Water Damage Repair",
  description: "Rapid Home Aid – Emergency water damage restoration & HVAC.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.svg" />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17456973426" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17456973426');
        `}</Script>
        {/* Tailwind CDN fallback to guarantee styles */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = { theme: { extend: {} } };
        `}} />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10 md:py-12">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}