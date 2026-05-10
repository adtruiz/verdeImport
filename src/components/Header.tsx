"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navigation = [
  { name: "What We Do", href: "#what-we-do" },
  { name: "Markets", href: "#markets" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-charcoal-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-verde-900">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-charcoal-600 hover:text-verde-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-verde-900 text-white px-4 py-2 rounded-md hover:bg-verde-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-charcoal-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-charcoal-100 px-6 py-4 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-charcoal-600 hover:text-verde-900"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium bg-verde-900 text-white px-4 py-2 rounded-md text-center"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
