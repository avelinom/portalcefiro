import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/cloudbilling#services" },
  { label: "Nosotros", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

export default function SiteHeader() {
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
        <a
          href="https://www.cefiro.cloud/login"
          className="rounded-full bg-[var(--cefiro-teal-2)] px-4 py-2 text-sm text-white transition hover:bg-[var(--cefiro-teal-4)]"
        >
          Acceder al Portal
        </a>
      </div>
    </header>
  );
}
