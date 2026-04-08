"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/cloudbilling#services" },
  { label: "Nosotros", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/cefiro-logo-2026.png"
            alt="Cefiro Advisors"
            width={140}
            height={52}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--cefiro-text)]/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--cefiro-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://cefiro-admin-portal.vercel.app/login"
            className="rounded-full bg-[var(--cefiro-teal-2)] px-4 py-2 text-sm text-white transition hover:bg-[var(--cefiro-teal-4)]"
          >
            Acceder al Portal
          </a>
          <button
            className="flex flex-col gap-1.5 p-1 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-[var(--cefiro-text)] transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[var(--cefiro-text)] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-[var(--cefiro-text)] transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-6 pb-4 md:hidden">
          <nav className="flex flex-col gap-4 pt-4 text-sm text-[var(--cefiro-text)]/70">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--cefiro-text)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
