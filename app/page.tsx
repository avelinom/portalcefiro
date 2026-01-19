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
        className="mx-auto w-full max-w-6xl px-6 pb-6 text-white"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Oferta Cefiro
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Soluciones que combinan nube, seguridad y continuidad.
            </h2>
          </div>
          <Link
            href="/cloudbilling"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Ver detalle de servicios
          </Link>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-16 md:grid-cols-2">
        {offerings.map((service) => {
          const card = (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white transition hover:border-white/30 hover:bg-white/10">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
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
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-16 text-white md:grid-cols-3">
        {[
          "Deteccion de anomalias en consumo y seguridad.",
          "Priorizacion automatizada de incidentes y tareas.",
          "Reportes financieros listos para direccion y finanzas.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70"
          >
            {item}
          </div>
        ))}
      </section>
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
