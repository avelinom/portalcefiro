# PROJECT_CONTEXT.md

Este archivo registra el contexto y las decisiones relevantes del trabajo en este proyecto.

## Registro

- 2026-01-18: El usuario solicitó guardar todo lo que hagamos en este proyecto en `PROJECT_CONTEXT.md`.
- 2026-01-18: Leí el contenido de `/Users/amiguelez/GitHub/CefiroAzurePortal/PROJECT_CONTEXT.md` para contexto entre proyectos y confirmé el rol del agente para `portalcefiro`.
- 2026-01-18: Se consultó el stack tecnológico actual de `portalcefiro` a partir de `package.json`.
- 2026-01-18: Se validó acceso a GitHub (`origin` apunta a `https://github.com/avelinom/portalcefiro.git`) y a Vercel vía CLI (`vercel whoami` = `andresamiguelez`).
- 2026-01-18: El usuario solicitó hacer commit de los últimos cambios y desplegar en Vercel.
- 2026-03-12: RAG (Retrieval-Augmented Generation) para asesoría Cefiro: (1) Nueva API `app/api/ask/route.ts`: POST que recibe `question`, usa `CEFIRO_CONTEXT` de `lib/context.ts` como system prompt y devuelve streaming de texto vía Claude (claude-sonnet-4-6). Requiere `ANTHROPIC_API_KEY`. (2) `lib/context.ts`: texto estructurado del portafolio Cefiro (quiénes somos, metodología, prácticas: Cloud Billing, Servicios administrados/migración Azure, Ciberseguridad, DRP 8h, GRC, Lirina, contacto) extraído de CefiroServiciosPEv1, propuestas Fidem/TMSourcing, cefiro.cloud. (3) `lib/services.ts`: array `services` (título, descripción, href, cta) para landing y página de servicios. (4) Componente `RagPrompt`: input de pregunta, llamada a `/api/ask`, lectura de stream, render con ReactMarkdown, estado loading/abort, estilos con variables Cefiro. (5) Home `app/page.tsx`: sección RagPrompt arriba, oferta con `services`, enlaces a `/cloudbilling`, secciones about y contact. (6) `app/cloudbilling/page.tsx`: lista de servicios desde `lib/services` con id `#services` para navegación. (7) `components/SiteHeader.tsx`: nav Inicio/Servicios (cloudbilling#services)/Nosotros (#about)/Contacto (#contact), botón Acceder al Portal, menú móvil. (8) `app/globals.css`: variables CSS Cefiro (teal 1–5, header-bg, text). (9) `next.config.ts`: transpilePackages para react-markdown. (10) Dependencias: @anthropic-ai/sdk, framer-motion, react-markdown. Commits excluyen `.claude/` y `memory/` por decisión del usuario.
