"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import logoGetFound from "../../public/icons/logo-getfound.svg";

export default function Header() {
	// const links = [
	// 	{ to: "/seo", label: "SEO" },
	// 	{ to: "/sales-lead-generation", label: "Sales & Lead Generation" },
	// 	{ to: "/consulting-services", label: "Consulting Services" },
	// 	{ to: "/design-technology", label: "Design & Technology" },
	// 	{ to: "/digital-marketing", label: "Digital Marketing" },
	// 	{ to: "/about-us", label: "About Us" },
	// 	{ to: "/id", label: "ID" }
	// ] as const;

	return (
		<div style={{ backgroundColor: "#0E004D" }} className="text-white">
			<div className="flex flex-row items-center justify-between px-5 h-16 md:h-20 md:py-8 lg:px-20">
				{/* logo */}
				<div className="flex items-center gap-4">
					<div className="flex flex-col">
						<Image src={logoGetFound} alt="Logo Get Found" className="w-[120px]" />
						<p className="text-xs hidden md:block md:mt-1">Strategic Growth Consulting</p>
					</div>
				</div>

				{/* Navigation */}
				{/* <nav className="flex gap-6 text-sm font-medium">
					{links.map(({ to, label }) => {
						return (
							<Link 
								key={to} 
								href={to}
								className="text-white hover:text-opacity-80 transition-colors"
							>
								{label}
							</Link>
						);
					})}
				</nav> */}

				{/* Right side actions */}
				<div className="flex items-center gap-4">
					{/* <ModeToggle /> */}
					<a
						href="#tailored-form"
						className="px-5 py-2 text-sm font-medium rounded-md transition-colors bg-white text-[#1D00A0] h-auto md:h-9 md:text-[16px] tracking-[-0.176px] md:text-[#0A0A0A] md:px-4 md:py-[6px]">
						Get a Proposal
					</a>
				</div>
			</div>
		</div>
	);
}
