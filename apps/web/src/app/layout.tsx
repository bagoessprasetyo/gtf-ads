"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer"
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const archivo = Archivo({
	variable: "--font-archivo",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});

// Note: metadata export is not supported in client components
// Moved to individual page components or use generateMetadata function

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isThankYouPage = pathname === "/tailored-form/thank-you";

	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${spaceGrotesk.variable} antialiased`}
				>
					<Providers>
						{isThankYouPage ? (
							// Thank you page without header and footer
							children
						) : (
							// All other pages with header and footer
							<div className="grid grid-rows-[auto_1fr_auto] h-svh">
								<Header />
								{children}
								<Footer />
							</div>
						)}
					</Providers>
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
				</body>
			</html>
			
		</>
	);
}
