import Anthropic from "@anthropic-ai/sdk";
import { CEFIRO_CONTEXT } from "@/lib/context";
import { NextRequest } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  if (!question?.trim()) {
    return new Response(JSON.stringify({ error: "Pregunta vacía" }), { status: 400 });
  }

  const stream = client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: `Eres un asesor de Cefiro Advisors. Responde preguntas sobre los servicios de Cefiro usando únicamente el contexto proporcionado. Sé conciso y profesional. Si la pregunta no está relacionada con Cefiro, di que solo puedes responder sobre los servicios de Cefiro.\n\n${CEFIRO_CONTEXT}`,
    messages: [{ role: "user", content: question }],
  });

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(new TextEncoder().encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
