"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer"

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
			</body>
		</html>
	);
}
