"use client";

import { motion } from "framer-motion";

export default function RagPrompt() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
      >
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Prompt de servicios
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Pregunta y recibe respuestas basadas en nuestras ofertas.
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              El prompt consulta documentos oficiales de servicios mediante RAG.
              Aqui validaremos casos de uso, alcances y resultados.
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                placeholder="Ej. Como funciona el DRP en 8 horas?"
                className="flex-1 rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
              />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
                Preguntar
              </button>
            </div>
            <p className="text-xs text-white/50">
              Respuestas generadas con documentos de ofertas Cefiro.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>Respuesta</span>
              <span className="rounded-full border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wide">
                RAG
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Resumen de resultados, beneficios y alcance del servicio
              seleccionado. Este panel se conectara a GROQ con contexto de
              documentos.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
              Fuentes: Oferta DRP v1, Alcances Cloud v2, SLA 2026
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
