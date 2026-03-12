/**
 * Contexto de servicios Cefiro para RAG.
 * Extraído de: CefiroServiciosPEv1.pptx, propuesta Fidem (abril 2025),
 * propuesta TMSourcing (marzo 2025), cefiro.cloud/landing.
 */
export const CEFIRO_CONTEXT = `
# Cefiro Advisors — Portafolio de Servicios

## Quiénes somos
Cefiro Advisors S.A.P.I de C.V. es una empresa de consultoría enfocada en el incremento de productividad, reducción de costos y retorno de inversión para sus clientes.
Contamos con más de 30 años de experiencia en proyectos exitosos en los sectores financiero, transporte, educación y gobierno.
Ofrecemos servicios pre-empaquetados con alcance, tiempo y precio garantizados. Todos nuestros servicios incluyen una etapa inicial gratuita llamada "discovery", donde dedicamos recursos técnicos propios para encaminar el proyecto desde su inicio junto al equipo del cliente.

## Metodología
- Etapa "Discovery": recursos técnicos dedicados de Cefiro (sin costo) para entender el ambiente del cliente y definir alcance.
- Declaración de trabajo y plan de proyecto personalizable, aunque el 95% de los procesos permanecen como se diseñaron.
- Todos los servicios incluyen "onboarding" para asegurar una transición transparente hacia operación diaria del cliente.
- Organización por práctica: cada práctica tiene un ingeniero de pre-venta y un SME (Subject Matter Expert) certificado.

## Prácticas y Servicios

### 1. Consumos en la Nube (Cloud Billing)
Portal de gestión de consumos cloud (cefiro.cloud).
- Visibilidad y control financiero de consumos en Azure en tiempo real.
- Desglose detallado por categoría, servicio y recurso.
- Reportes mensuales automáticos para equipos de finanzas y operaciones.
- Facturación automatizada con cálculo de márgenes y envío directo al sistema contable.
- Alertas personalizadas y detección de anomalías en consumo.
- Dashboard de optimización continua: identificación de oportunidades de ahorro.

### 2. Servicios Administrados y Migración a Nubes Públicas (Azure)
Operación, migración y continuidad para ambientes multi-nube. Referencia: Propuesta Fidem, abril 2025.

**Alcances de migración:**
- Creación y configuración de infraestructura en Microsoft Azure en dos regiones: Región 1 (producción) y Región 2 (DRP/recuperación ante desastres).
- Implementación y configuración de servidores virtuales (Windows Server 2025, SQL Server 2022).
- Configuración de seguridad y redes: firewall, reglas de acceso, VPN.
- Implementación de herramientas de monitoreo y optimización de costos en Azure.
- Pruebas de conectividad, seguridad y rendimiento.
- Transferencia de conocimientos al equipo del cliente.

**Servicios administrados post-migración:**
- Administración del firewall.
- Monitoreo 7x24x365.
- Configuración y alineación de infraestructura a ISO 27000.
- Soporte y mantenimiento de incidencias nivel 2 (8am-8pm).

**Costos de referencia (estimados, en USD):**
- Migración: desde $1,900 (costo único).
- Servicios administrados: desde $1,000/mes.
- Infraestructura Azure: desde $4,400/mes (varía según ambiente).

**Personal del proyecto:**
- Líder de proyecto.
- Consultor en Infraestructura Azure.
- Consultor en Base de Datos.
- Consultores Jr.

**Entregables:**
1. Infraestructura operativa en Azure (pago 30%).
2. Documentación técnica de configuraciones y accesos (10%).
3. Informe de validaciones y pruebas (10%).

### 3. Ciberseguridad y Monitoreo Continuo de SLA's
Protección, observabilidad y cumplimiento operativo continuo.
- Evaluación inicial mediante auditoría de seguridad.
- Análisis de gaps vs marco de seguridad específico (ISO 27000, NIST, etc.).
- Definición e implementación de controles de cumplimiento.
- Monitoreo continuo 7x24x365.
- Gestión de firewall y reglas de acceso.
- Reportes de SLA y cumplimiento operativo.
- SME certificado en Ciberseguridad Cloud asignado a la práctica.

### 4. DRP en 8 Horas (Recuperación ante Desastres)
Diseña, valida, implementa y monitorea tu DRP en 8 horas.
- Estrategia acelerada de continuidad y recuperación ante desastres.
- Configuración de región secundaria en Azure para failover.
- Validación de tiempos de recuperación (RTO/RPO).
- Runbooks de automatización para activación del DRP.
- Monitoreo continuo del ambiente de recuperación.

### 5. Consultoría Regulatoria y de Cumplimiento (GRC)
Servicio orientado a instituciones financieras (casas de bolsa, fintech, bancos).
- Autorización de contratación de terceros en materia de infraestructura (artículos 206, 219, 220 LMV).
- Documentación técnica y entregables para auditores y reguladores.
- Alineación a marcos: ISO 27000, CNBV, LMV.
- Costo de referencia: desde $10,000 USD (proyectos de cumplimiento).

### 6. Plataforma de Agentes Inteligentes (Lirina — lirina.ai)
Flujos a la medida y ahorros medibles con tablero de adopción y uso.
- Automatización de procesos mediante agentes inteligentes.
- Tablero de adopción y métricas de uso.
- Integración con sistemas existentes del cliente.
- Casos de uso: detección de anomalías, priorización de incidentes, reportes automáticos.

## Sectores donde opera Cefiro
Finanzas (bancos, casas de bolsa, fintech, aseguradoras), telecomunicaciones, educación, gobierno, transporte, retail.

## Valores y diferenciadores
- Honestidad e integridad.
- Vinculación con clientes a largo plazo.
- Recursos certificados en las tecnologías de cada práctica.
- Descuentos por compromiso de permanencia.
- Metodología Cloud Center of Excellence y Data Maturity Model.
- Oferta pre-empaquetada: garantía en calidad, tiempo, precio y ejecución.

## Contacto
- Web: www.cefiro.cloud
- Email: contacto@cefiro.com
- Portal de gestión: https://www.cefiro.cloud/login
`;
