"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Cloud billing y gestion de costos
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Control claro de tus consumos en la nube.
          </h1>
          <p className="text-base leading-relaxed text-white/70">
            Un landing nuevo enfocado en servicios de analisis, monitoreo y
            optimizacion para cloud billing. Contenido definitivo por definir.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cloudbilling"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Ver servicios
            </Link>
            <a
              href="https://www.cefiro.cloud/login"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              Acceder al portal
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10"
        >
          <div className="space-y-4 text-white/80">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Panel ejecutivo</p>
              <p className="text-xs text-white/60">
                Resumen financiero y metricas clave.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Alertas y control</p>
              <p className="text-xs text-white/60">
                Seguimiento de desviaciones y consumo.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Reportes claros</p>
              <p className="text-xs text-white/60">
                Informes listos para direccion y finanzas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
