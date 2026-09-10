import type { Metadata } from "next";

import {
  AutomationLanding,
  type AutomationLandingContent,
} from "@/components/automation-landing";

export const metadata: Metadata = {
  title: {
    absolute: "Automatización para coaches online | David Navarro",
  },
  description:
    "Creo automatizaciones para coaches online: notas de clientes, resúmenes de sesión y seguimientos que se hacen solos. Recupera horas cada semana y acepta más clientes. Auditoría gratuita.",
  keywords: [
    "automatización para coaches",
    "coaching online automatización",
    "notas de clientes automáticas",
    "resúmenes de sesión",
    "gestión de clientes coaching",
    "David Navarro",
  ],
  alternates: {
    canonical: "/automatizacion",
    languages: {
      en: "/automation",
      es: "/automatizacion",
    },
  },
  openGraph: {
    title: "Automatización para coaches online | David Navarro",
    description:
      "Notas de clientes, resúmenes de sesión y seguimientos que se hacen solos. Recupera horas cada semana con una auditoría gratuita.",
    url: "/automatizacion",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización para coaches online | David Navarro",
    description:
      "Notas de clientes, resúmenes de sesión y seguimientos que se hacen solos. Recupera horas cada semana con una auditoría gratuita.",
  },
};

// Caso real publicado con permiso de Alfre (llamada del 1 de septiembre de
// 2026). Los números y la cita salen de esa llamada. Pedirle el OK por escrito
// a la redacción exacta de la cita antes de difundir la página.
const content: AutomationLandingContent = {
  lang: "es-ES",
  topRule: "david-navarro.dev / automatización para coaches online",
  hero: {
    h1Before: "Recupera",
    h1Marked: "horas",
    h1After: "cada semana. Acepta más clientes, no más papeleo.",
    subhead:
      "Creo automatizaciones para coaches online para que el alta de clientes, las notas de sesión y los seguimientos se hagan solos.",
    cta: "Pide tu auditoría gratuita",
    micro: ["gratis", "30 minutos", "sin tecnicismos"],
  },
  mailto: {
    subject: "Auditoría gratuita de mi forma de trabajar",
    bodyLines: [
      "Hola David:",
      "",
      "Me gustaría una auditoría gratuita de mi forma de trabajar.",
      "",
      "- Mi nombre:",
      "- Tipo de coaching que hago:",
      "- Número aproximado de clientes:",
      "- La tarea de gestión que más tiempo me quita:",
      "",
      "¡Gracias!",
    ],
  },
  pain: {
    heading: "¿Te suena?",
    items: [
      {
        title: "Notas a las 9 de la noche",
        body: "Terminas tu última sesión y te pasas la noche pasando notas a limpio mientras la cena se enfría.",
      },
      {
        title: "Copiar, pegar, repetir",
        body: "Los mismos datos del cliente acaban escritos en tu hoja de cálculo, tu app de coaching y tu correo. Tres veces.",
      },
      {
        title: "Seguimientos que se escapan",
        body: "Un seguimiento se te pasa, un cliente se siente olvidado y solo te das cuenta cuando deja de responder.",
      },
    ],
  },
  how: {
    heading: "Tres pasos. Tú tienes el control.",
    steps: [
      {
        title: "Una llamada rápida",
        body: "Repasamos cómo organizas tu semana. Identifico dónde se va tu tiempo de verdad y qué puede funcionar solo.",
      },
      {
        title: "Yo lo construyo",
        body: "Conecto las herramientas que ya usas. Tú sigues con tus clientes. Para ellos no cambia nada.",
      },
      {
        title: "Tú lo apruebas",
        body: "Lo revisas todo y das el visto bueno antes de ponerlo en marcha. Nada funciona sin tu OK.",
      },
    ],
  },
  caseStudy: {
    eyebrow: "caso real",
    name: "AlfreHealth",
    story:
      "Alfre lleva AlfreHealth, un negocio de coaching de salud online. Cada cliente nuevo le suponía la misma hora de gestión: capturas del formulario inicial, apuntes de la primera llamada, la ficha del cliente escrita a mano y el plan del primer mes. Le construí una aplicación sencilla que hace esa parte. Pega los apuntes de la llamada, elige el cliente, y la app redacta el resumen de la llamada, el plan del mes uno y el mensaje de bienvenida. Él lo lee, cambia un par de cosas y lo envía.",
    flow: [
      "Junta el formulario inicial y los apuntes de la llamada en una sola ficha de cliente, sin copiar nada a mano.",
      "Redacta el plan del primer mes para que Alfre lo revise. Al cliente no le llega nada hasta que él lo aprueba.",
      "Lo siguiente: elige una de sus propias rutinas de entrenamiento de una lista y la app la mete en el plan.",
    ],
    metrics: [
      { value: "1 h", label: "ahorrada con cada cliente nuevo" },
      { value: "15 min", label: "para dar de alta a un cliente. Antes, más de una hora." },
      { value: "1", label: "doble clic para ejecutarlo. Sin terminal, sin saber de informática." },
    ],
  },
  testimonial: {
    srHeading: "Testimonio",
    quote:
      "Lo ha hecho de locos, lo ha hecho muy bien. Una hora por cliente, una hora por onboarding, está de locos.",
    name: "Alfre, coach de salud online",
  },
  pricing: {
    heading: "Precio cerrado. Pagas cuando funciona.",
    items: [
      {
        title: "Precio por fase",
        body: "Acordamos qué entrega cada fase y cuánto cuesta antes de empezar. No hay contador de horas.",
      },
      {
        title: "Se paga cuando está en marcha",
        body: "Pagas una fase cuando ya está funcionando en tu negocio, no antes.",
      },
      {
        title: "Empezamos por algo pequeño",
        body: "La primera automatización es pequeña a propósito. La ves funcionar antes de hablar de nada más grande.",
      },
    ],
  },
  about: {
    heading: "Hola, soy David.",
    body: "Soy ingeniero sénior y llevo cinco años automatizando el trabajo de grandes empresas. Ahora uso esas mismas habilidades para ayudar a coaches online a trabajar más ligeros: las tareas repetitivas del día a día se hacen solas y tú puedes aceptar más clientes sin quemarte.",
  },
  finalCta: {
    heading: "¿Quieres saber qué podrías delegar?",
    body: "Pide una auditoría gratuita. Vemos cómo organizas tu semana y te digo exactamente qué se puede automatizar para que aceptes más clientes sin añadir horas. Y si no encajamos, te llevas ideas igualmente.",
    cta: "Pide tu auditoría gratuita",
  },
};

export default function AutomatizacionPage() {
  return <AutomationLanding content={content} />;
}
