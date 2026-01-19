const services = [
  {
    title: "Consumos en la nube",
    description:
      "Visibilidad y control financiero para consumos cloud.",
    href: "https://www.cefiro.cloud/landing",
    cta: "Ir al landing actual",
  },
  {
    title: "Servicios administrados y de migracion a nubes publicas",
    description:
      "Operacion, migracion y continuidad para ambientes multi-nube.",
    cta: "Por desarrollar",
  },
  {
    title: "Servicios de ciberseguridad y monitoreo continuo de SLA's",
    description:
      "Proteccion, observabilidad y cumplimiento operativo continuo.",
    cta: "Proximamente",
  },
  {
    title: "Disena, valida, implementa y monitorea tu DRP en 8 horas",
    description:
      "Estrategia acelerada de continuidad y recuperacion ante desastres.",
    cta: "Proximamente",
  },
  {
    title: "Plataforma de agentes inteligentes",
    description:
      "Flujos a la medida y ahorros medibles con tablero de adopcion y uso.",
    href: "https://lirina.ai/",
    cta: "Explorar Lirina",
  },
];

export default function CloudBillingPage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cefiro-teal-1)]">
          Servicios
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--cefiro-text)]">
          Cloud billing con enfoque en visibilidad y control.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--cefiro-text)]/70">
          Esta pagina sera el destino de /landing. El objetivo es presentar un
          resumen de servicios sin que sea el foco principal del negocio.
        </p>
      </section>

      <section
        id="services"
        className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2"
      >
        {services.map((service) => {
          const content = (
            <div className="rounded-3xl border border-black/5 bg-white p-8 text-[var(--cefiro-text)] transition hover:border-[var(--cefiro-teal-2)] hover:shadow-[0_12px_40px_rgba(32,160,128,0.15)]">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--cefiro-text)]/70">
                {service.description}
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-[var(--cefiro-teal-1)]/30 px-3 py-1 text-xs text-[var(--cefiro-teal-1)]">
                {service.cta}
              </div>
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
              {content}
            </a>
          ) : (
            <div key={service.title}>{content}</div>
          );
        })}
      </section>
    </div>
  );
}
