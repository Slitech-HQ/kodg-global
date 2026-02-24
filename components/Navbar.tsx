"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : ""
      } bg-royal`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/logo.png"
                alt="KODG Global Link LTD"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="text-white font-extrabold text-base tracking-wide block">
                KODG Global
              </span>
              <span className="text-gold text-xs font-medium">Link LTD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all ${
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.replace("/", "")))
                    ? "text-gold border-b-2 border-gold pb-0.5"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="bg-gold text-royal px-5 py-2 rounded-full text-sm font-bold hover:bg-gold-light transition-colors shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-royal-dark border-t border-white/10">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold bg-royal"
                    : "text-white/90 hover:text-gold hover:bg-royal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setIsOpen(false)}
              className="block mt-3 bg-gold text-royal px-4 py-2.5 rounded-full text-sm font-bold text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
