import RagPrompt from "@/components/RagPrompt";
import Link from "next/link";

const offerings = [
  {
    title: "Consumos en la nube",
    description:
      "Visibilidad y control financiero para consumos cloud.",
    href: "https://www.cefiro.cloud/landing",
  },
  {
    title: "Servicios administrados y de migracion a nubes publicas",
    description:
      "Operacion, migracion y continuidad para ambientes multi-nube.",
  },
  {
    title: "Servicios de ciberseguridad y monitoreo continuo de SLA's",
    description:
      "Proteccion, observabilidad y cumplimiento operativo continuo.",
  },
  {
    title: "Disena, valida, implementa y monitorea tu DRP en 8 horas",
    description:
      "Estrategia acelerada de continuidad y recuperacion ante desastres.",
  },
  {
    title: "Plataforma de agentes inteligentes",
    description:
      "Flujos a la medida y ahorros medibles con tablero de adopcion y uso.",
    href: "https://lirina.ai/",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <RagPrompt />
      <section
        id="offerings"
        className="mx-auto w-full max-w-6xl px-6 pb-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cefiro-teal-1)]">
              Oferta Cefiro
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--cefiro-text)]">
              Soluciones que combinan nube, seguridad y continuidad.
            </h2>
          </div>
          <Link
            href="/cloudbilling"
            className="text-sm text-[var(--cefiro-text)]/60 transition hover:text-[var(--cefiro-text)]"
          >
            Ver detalle de servicios
          </Link>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-16 md:grid-cols-2">
        {offerings.map((service) => {
          const card = (
            <div className="rounded-3xl border border-black/5 bg-white p-8 text-[var(--cefiro-text)] transition hover:border-[var(--cefiro-teal-2)] hover:shadow-[0_12px_40px_rgba(32,160,128,0.15)]">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--cefiro-text)]/70">
                {service.description}
              </p>
            </div>
          );

          return service.href ? (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {card}
            </a>
          ) : (
            <div key={service.title}>{card}</div>
          );
        })}
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        {[
          "Deteccion de anomalias en consumo y seguridad.",
          "Priorizacion automatizada de incidentes y tareas.",
          "Reportes financieros listos para direccion y finanzas.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[var(--cefiro-teal-1)]/15 bg-white p-6 text-sm text-[var(--cefiro-text)]/70"
          >
            {item}
          </div>
        ))}
      </section>
      <section
        id="about"
        className="mx-auto w-full max-w-6xl px-6 py-16"
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cefiro-teal-1)]">
              Sobre Cefiro
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--cefiro-text)]">
              Acompanamos tus finanzas cloud con claridad.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[var(--cefiro-text)]/70">
            Este landing sera independiente del portal administrativo. Aqui
            definiremos mensajes mas enfocados en servicios y resultados,
            dejando claro el valor para equipos financieros y de operaciones.
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 pb-20"
      >
        <div className="rounded-3xl border border-black/5 bg-white p-10">
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--cefiro-text)]">
            Conversemos sobre tu facturacion cloud
          </h3>
          <p className="mt-3 text-sm text-[var(--cefiro-text)]/70">
            Pronto definiremos el formulario y canales de contacto. Por ahora,
            usa el acceso al portal o escribenos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cloudbilling"
              className="rounded-full bg-[var(--cefiro-teal-2)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[var(--cefiro-teal-4)]"
            >
              Ver servicios
            </Link>
            <a
              href="mailto:contacto@cefiro.com"
              className="rounded-full border border-[var(--cefiro-teal-1)]/30 px-5 py-2 text-sm font-medium text-[var(--cefiro-teal-1)] transition hover:border-[var(--cefiro-teal-1)] hover:bg-[var(--cefiro-teal-1)]/10"
            >
              contacto@cefiro.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
