"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Smiles", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Insurance", href: "#insurance" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];

function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" className="fill-forest-800" />
      <path
        d="M16 8.5c-1.9 0-2.6 1.2-3.9 1.2-1.6 0-2.6-1.4-3.6-.4-1.3 1.3-.2 4.2.6 6.6.7 2.1 1.1 4.9 2.2 6.6.5.8 1.5.8 1.9-.1.5-1.1.4-3.1 1.2-4.3.4-.6 1-.6 1.4 0 .8 1.2.7 3.2 1.2 4.3.4.9 1.4.9 1.9.1 1.1-1.7 1.5-4.5 2.2-6.6.8-2.4 1.9-5.3.6-6.6-1-1-2 .4-3.6.4-1.3 0-2-1.2-3.9-1.2Z"
        className="fill-white"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="container-responsive flex h-14 items-center justify-between md:h-16">
        <Link
          href="#top"
          className="flex min-h-11 items-center gap-2 text-[1.05rem] font-extrabold leading-none tracking-tight text-forest-800 md:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          <ToothMark className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="whitespace-nowrap">Smiles Dental Care</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-[0.95rem] font-medium text-slate-700 transition-colors hover:text-forest-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-coral-dark sm:inline-flex"
          >
            Book a visit
          </a>
          <a
            href={`tel:${clinic.phoneTel}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-white transition-colors hover:bg-forest-900 sm:hidden"
            aria-label={`Call ${clinic.name} at ${clinic.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-slate-200 bg-white transition-all duration-200 ease-out lg:hidden ${
          mobileOpen ? "max-h-[480px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-responsive grid gap-1 py-3"
          aria-label="Primary mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block min-h-11 rounded-md px-3 py-2.5 font-medium text-slate-700 transition-colors hover:bg-forest-50 hover:text-forest-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 font-bold text-white transition-colors hover:bg-coral-dark"
          >
            Book a visit — {clinic.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
