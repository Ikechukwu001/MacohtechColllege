"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // from shadcn/ui (we added earlier)

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admission", label: "Admissions" },
  { href: "/blog", label: "Blog" },
  { href: "/cgpa", label: "CGPA Calculator" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Madonna College Of Health Logo.png"
            alt="Madonna College of Health Tech Logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="font-semibold tracking-tight">
            Madonna College of Health Tech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm hover:text-blue-500"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="rounded-2xl">
            {/* Placeholder: prevent navigation until Admissions is ready */}
            <Link href="/blog" onClick={(e) => e.preventDefault()}>
              Login
            </Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 grid grid-cols-2 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-center py-2 rounded-md hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Apply Now CTA in grid as well */}
            <div className="col-span-2 flex justify-center">
              <Button asChild className="rounded-2xl w-full">
                <Link href="/admissions" onClick={(e) => e.preventDefault()}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
