import { services } from "@/lib/services";

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
          Gestionamos tus consumos cloud con visibilidad financiera, seguridad
          continua y continuidad operativa para equipos de finanzas y
          operaciones.
        </p>
      </section>

      <section
        id="services"
        className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2"
      >
        {services.map((service) => {
          const content = (
            <div className="rounded-3xl bg-white p-8 text-[var(--cefiro-text)] shadow-sm transition hover:shadow-[0_12px_40px_rgba(32,160,128,0.15)]">
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
