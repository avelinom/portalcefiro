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
      <section className="mx-auto w-full max-w-6xl px-6 py-16 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          Servicios
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Cloud billing con enfoque en visibilidad y control.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white transition hover:border-white/30 hover:bg-white/10">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {service.description}
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
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
