"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	const links = [
		{ to: "/seo", label: "SEO" },
		{ to: "/sales-lead-generation", label: "Sales & Lead Generation" },
		{ to: "/consulting-services", label: "Consulting Services" },
		{ to: "/design-technology", label: "Design & Technology" },
		{ to: "/digital-marketing", label: "Digital Marketing" },
		{ to: "/about-us", label: "About Us" },
		{ to: "/id", label: "ID" }
	] as const;

	return (
		<div style={{ backgroundColor: "#0E004D" }} className="text-white">
			<div className="flex flex-row items-center justify-between px-6 py-4">
				{/* Logo and Company Info */}
				<div className="flex items-center gap-4">
					<div className="flex flex-col">
						<h1 className="text-xl font-bold text-white">GETFOUND</h1>
						<p className="text-xs" style={{ color: "#D5CCFF" }}>Strategic Growth Consulting</p>
					</div>
				</div>

				{/* Navigation */}
				<nav className="flex gap-6 text-sm font-medium">
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
				</nav>

				{/* Right side actions */}
				<div className="flex items-center gap-4">
					<ModeToggle />
					<button 
						className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
						style={{ 
							backgroundColor: "#D5CCFF", 
							color: "#0E004D"
						}}
					>
						Get a Proposal
					</button>
				</div>
			</div>
		</div>
	);
}
