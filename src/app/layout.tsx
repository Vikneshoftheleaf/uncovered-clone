// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Uncovered - Competitive Intelligence Platform for B2B SaaS. Made in Europe 🇪🇺",
  description:
    "Uncovered - Monitor your B2B SaaS competitors. Free trial. Monitor competitors, analyze market trends, find your competitor's pricing, and identify how to win.",
  openGraph: {
    type: "website",
    title:
      "Uncovered - Competitive Intelligence Platform for B2B SaaS. Made in Europe 🇪🇺",
    description:
      "Uncovered - Monitor your B2B SaaS competitors. Free trial. Monitor competitors, analyze market trends...",
    images: [
      "https://framerusercontent.com/assets/XDpA2o07vKaQPYKkJ8HrQ0RqU.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Uncovered - Competitive Intelligence Platform for B2B SaaS. Made in Europe 🇪🇺",
    description:
      "Uncovered - Monitor your B2B SaaS competitors. Free trial. Monitor competitors...",
    images: [
      "https://framerusercontent.com/assets/XDpA2o07vKaQPYKkJ8HrQ0RqU.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* CookieYes */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/b4d2958c1f9c159d4af82acb/script.js"
          strategy="afterInteractive"
        />

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "h5dd4081mf");
          `}
        </Script>

        {/* Reditus */}
        <Script id="reditus" strategy="afterInteractive">
          {`
            (function (w, d, s, p, t) {
              w.gr = w.gr || function () { w.gr.ce = 60; w.gr.q = w.gr.q || []; w.gr.q.push(arguments); };
              p = d.getElementsByTagName(s)[0];
              t = d.createElement(s); t.async = true; t.src = "https://script.getreditus.com/v2.js";
              p.parentNode.insertBefore(t, p);
            })(window, document, "script");
            gr("initCustomer", "afbd02a1-cb95-4796-8c65-97a4e2116937");
            gr("track", "pageview");
          `}
        </Script>

        {/* Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16453804125"
        />
        <Script id="gtag-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16453804125');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J9PY7K9JQZ"
        />
        <Script id="gtag-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J9PY7K9JQZ');
          `}
        </Script>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>

      </head>

      <body className="bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}
