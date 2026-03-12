"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function RagPrompt() {
  const [question, setQuestion] = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function ask() {
    if (!question.trim() || loading) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLastQuestion(question);
    setQuestion("");
    setAnswer("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
        signal: controller.signal,
      });

      if (!res.ok) throw new Error("Error en la respuesta");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: d } = await reader.read();
        done = d;
        if (value) setAnswer((prev) => prev + decoder.decode(value));
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name !== "AbortError") {
        setAnswer("Error al consultar el servicio. Intenta de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") ask();
  }

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
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-3">
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
            </div>

            {/* Input */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ej. Como funciona el DRP en 8 horas?"
                className="flex-1 rounded-full border border-[var(--cefiro-teal-1)]/30 bg-white px-4 py-3 text-sm text-[var(--cefiro-text)] placeholder:text-[var(--cefiro-text)]/40 focus:border-[var(--cefiro-teal-1)] focus:outline-none"
              />
              <button
                onClick={ask}
                disabled={loading || !question.trim()}
                className="rounded-full bg-[var(--cefiro-teal-2)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--cefiro-teal-4)] disabled:opacity-50"
              >
                {loading ? "..." : "Preguntar"}
              </button>
            </div>

            {/* Response */}
            <div className="rounded-2xl border border-black/5 bg-[var(--cefiro-header-bg)] p-6">
              <div className="mb-4 flex items-center justify-between text-xs text-[var(--cefiro-text)]/60">
                <span>Respuesta</span>
                <span className="rounded-full border border-[var(--cefiro-teal-1)]/40 px-2 py-1 text-[10px] uppercase tracking-wide text-[var(--cefiro-teal-1)]">
                  RAG
                </span>
              </div>

              {lastQuestion && (
                <p className="mb-3 text-xs font-medium text-[var(--cefiro-text)]/50">
                  {lastQuestion}
                </p>
              )}
              {answer ? (
                <div className="prose prose-sm max-w-none text-[var(--cefiro-text)]/80
                  [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-[var(--cefiro-text)] [&_h2]:mt-4 [&_h2]:mb-1
                  [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-[var(--cefiro-text)] [&_h3]:mt-3 [&_h3]:mb-1
                  [&_p]:leading-relaxed [&_p]:mb-2
                  [&_ul]:pl-4 [&_ul]:space-y-1
                  [&_li]:text-sm [&_li]:leading-relaxed
                  [&_strong]:text-[var(--cefiro-text)] [&_strong]:font-semibold
                  [&_code]:bg-black/5 [&_code]:px-1 [&_code]:rounded [&_code]:text-xs">
                  <ReactMarkdown>{answer}</ReactMarkdown>
                  {loading && (
                    <span className="inline-block h-3 w-[2px] bg-[var(--cefiro-teal-1)] align-middle ml-0.5 animate-pulse" />
                  )}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-[var(--cefiro-text)]/40">
                  {loading
                    ? "Consultando documentos..."
                    : "Escribe una pregunta sobre los servicios de Cefiro."}
                </p>
              )}
            </div>

            <p className="text-xs text-[var(--cefiro-text)]/50">
              Respuestas generadas con documentos de ofertas Cefiro.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
