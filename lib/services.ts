export interface Service {
  title: string;
  description: string;
  href?: string;
  cta: string;
}

export const services: Service[] = [
  {
    title: "Consumos en la nube",
    description: "Visibilidad y control financiero para consumos cloud.",
    href: "https://cefiro-admin-portal.vercel.app/landing",
    cta: "Ir al landing actual",
  },
  {
    title: "Servicios administrados y de migracion a nubes publicas",
    description: "Operacion, migracion y continuidad para ambientes multi-nube.",
    cta: "Por desarrollar",
  },
  {
    title: "Servicios de ciberseguridad y monitoreo continuo de SLA's",
    description: "Proteccion, observabilidad y cumplimiento operativo continuo.",
    cta: "Proximamente",
  },
  {
    title: "Disena, valida, implementa y monitorea tu DRP en 8 horas",
    description: "Estrategia acelerada de continuidad y recuperacion ante desastres.",
    cta: "Proximamente",
  },
  {
    title: "Plataforma de agentes inteligentes",
    description: "Flujos a la medida y ahorros medibles con tablero de adopcion y uso.",
    href: "https://lirina.ai/",
    cta: "Explorar Lirina",
  },
];
