"use client";

import { motion } from "framer-motion";

export default function RagPrompt() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl bg-gradient-to-br from-[var(--cefiro-teal-1)] via-[var(--cefiro-teal-3)] to-[var(--cefiro-teal-4)] p-[1px]"
      >
        <div className="rounded-[22px] bg-white p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cefiro-teal-1)]">
                Prompt de servicios
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--cefiro-text)] md:text-4xl">
                Pregunta y recibe respuestas basadas en nuestras ofertas.
              </h2>
              <p className="text-sm leading-relaxed text-[var(--cefiro-text)]/70">
                El prompt consulta documentos oficiales de servicios mediante
                RAG. Aqui validaremos casos de uso, alcances y resultados.
              </p>
              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  type="text"
                  placeholder="Ej. Como funciona el DRP en 8 horas?"
                  className="flex-1 rounded-full border border-[var(--cefiro-teal-1)]/30 bg-white px-4 py-3 text-sm text-[var(--cefiro-text)] placeholder:text-[var(--cefiro-text)]/40 focus:border-[var(--cefiro-teal-1)] focus:outline-none"
                />
                <button className="rounded-full bg-[var(--cefiro-teal-2)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--cefiro-teal-4)]">
                  Preguntar
                </button>
              </div>
              <p className="text-xs text-[var(--cefiro-text)]/50">
                Respuestas generadas con documentos de ofertas Cefiro.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-black/5 bg-[var(--cefiro-header-bg)] p-6">
              <div className="flex items-center justify-between text-xs text-[var(--cefiro-text)]/60">
                <span>Respuesta</span>
                <span className="rounded-full border border-[var(--cefiro-teal-1)]/40 px-2 py-1 text-[10px] uppercase tracking-wide text-[var(--cefiro-teal-1)]">
                  RAG
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--cefiro-text)]/80">
                Resumen de resultados, beneficios y alcance del servicio
                seleccionado. Este panel se conectara a GROQ con contexto de
                documentos.
              </p>
              <div className="rounded-xl border border-[var(--cefiro-teal-1)]/20 bg-white p-4 text-xs text-[var(--cefiro-text)]/60">
                Fuentes: Oferta DRP v1, Alcances Cloud v2, SLA 2026
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
