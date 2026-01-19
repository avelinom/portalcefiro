import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/cloudbilling#services" },
  { label: "Nosotros", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Cefiro Advisors
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://www.cefiro.cloud/login"
          className="rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white/10"
        >
          Acceder al Portal
        </a>
      </div>
    </header>
  );
}
