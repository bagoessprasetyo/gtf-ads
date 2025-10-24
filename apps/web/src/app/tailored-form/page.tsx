import type { Metadata } from "next";
import TailoredPage from "./TailoredPage";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Tailored - GetFound",
    description:
        "Discover how GetFound delivers tailored marketing strategies with proven impact across industries.",
};

export default function Page() {
    return (
        <>
            {/* ---------------- Google Tag Manager ---------------- */}
            <Script id="gtm-script" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KFJV3P6Z');`}
            </Script>

            {/* ---------------- Google Tag Manager (noscript) ---------------- */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-KFJV3P6Z"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                />
            </noscript>

            {/* ---------------- Google Analytics (gtag.js) ---------------- */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-ZVRHXWGWVC"
                strategy="afterInteractive"
            />
            <Script id="gtag-script" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVRHXWGWVC');
        `}
            </Script>
            <TailoredPage />
        </>
    );
}
