"use client";
import React, { useState } from "react";
import { Hamburger, Overlay } from "./";
import { Logo } from "../svgs";
import Link from "next/link";

interface NavProps {
	links: Array<{
		href: string;
		label: string;
	}>;
}

export const Nav: React.FC<NavProps> = ({ links }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	return (
		<nav className="fixed top-0 w-full z-50">
			{/* Header Bar */}
			<div className="flex flex-row justify-between p-8 items-center">
				<Logo />
				<div className="z-50">
					<Hamburger open={open} setOpen={setOpen} />
				</div>
			</div>

			{/* Mobile Navigation Overlay */}
			<Overlay topOffset="80px" open={open} onClose={handleClose} />

			{/* Mobile Navigation Menu */}
			<div
				className={`
					fixed top-0 right-0 h-full w-full
					flex flex-col align-middle text-center
					p-6 space-y-4 mt-20
					transition-transform duration-300 transform z-40
					${open ? "translate-x-0" : "w-0 translate-x-full"}
				`}
			>
				{links.map((link, index) => (
					<Link key={index} href={link.href}>
						<span className="text-white">{link.label}</span>
					</Link>
				))}
			</div>
		</nav>
	);
};
