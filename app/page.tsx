import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <section
        id="about"
        className="mx-auto w-full max-w-6xl px-6 py-16 text-white"
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Sobre Cefiro
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Acompanamos tus finanzas cloud con claridad.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/70">
            Este landing sera independiente del portal administrativo. Aqui
            definiremos mensajes mas enfocados en servicios y resultados,
            dejando claro el valor para equipos financieros y de operaciones.
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 pb-20 text-white"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h3 className="text-2xl font-semibold tracking-tight">
            Conversemos sobre tu facturacion cloud
          </h3>
          <p className="mt-3 text-sm text-white/70">
            Pronto definiremos el formulario y canales de contacto. Por ahora,
            usa el acceso al portal o escribenos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cloudbilling"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Ver servicios
            </Link>
            <a
              href="mailto:contacto@cefiro.com"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              contacto@cefiro.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
