"use client";


import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; // from shadcn/ui (we added earlier)


const navLinks = [
{ href: "/", label: "Home" },
{ href: "/about", label: "About" },
{ href: "/academics", label: "Academics" },
{ href: "/admissions", label: "Admissions" },
{ href: "/blog", label: "Blog" },
{ href: "/events", label: "Events" },
{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
{/* Logo / Brand */}
<Link href="/" className="flex items-center gap-2">
{/* Placeholder mark until we import your real logo */}
<div className="h-9 w-9 rounded-full bg-brand-ash/40 border border-brand-ash" />
<span className="font-semibold tracking-tight">
Madonna College of Health Tech
</span>
</Link>

{/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-6">
{navLinks.map((l) => (
<Link key={l.href} href={l.href} className="text-sm hover:text-brand-blue">
{l.label}
</Link>
))}
<Button asChild className="rounded-2xl">
{/* Placeholder: prevent navigation until Admissions is ready */}
<Link href="/admissions" onClick={(e) => e.preventDefault()}>
Apply Now
</Link>
</Button>
</nav>

{/* Mobile Toggle */}
<button
className="md:hidden p-2"
aria-label="Open menu"
onClick={() => setOpen((v) => !v)}
>
<Menu />
</button>
</div>

{/* Mobile Menu */}
{open && (
<div className="md:hidden border-t bg-white">
<div className="px-4 py-3 flex flex-col gap-3">
{navLinks.map((l) => (
<Link
key={l.href}
href={l.href}
className="py-1"
onClick={() => setOpen(false)}
>
{l.label}
</Link>
))}
<Button asChild className="rounded-2xl">
<Link href="/admissions" onClick={(e) => e.preventDefault()}>
Apply Now
</Link>
</Button>
</div>
</div>
)}
</header>
);
}