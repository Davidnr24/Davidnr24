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
    "Automatizo con inteligencia artificial el trabajo repetitivo de tu negocio y simplifico las herramientas que usas. Altas de clientes, notas, resúmenes y seguimientos que se hacen solos. La consulta es gratis.",
  keywords: [
    "automatización con IA para negocios",
    "automatización para coaches",
    "automatización de procesos",
    "alta de clientes automática",
    "simplificar herramientas",
    "consulta gratuita automatización",
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
      "Automatización con IA del trabajo repetitivo con tus clientes, y menos herramientas para llevarlo. La consulta es gratis.",
    url: "/automatizacion",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización para coaches online | David Navarro",
    description:
      "Automatización con IA del trabajo repetitivo con tus clientes, y menos herramientas para llevarlo. La consulta es gratis.",
  },
};

// Caso real publicado con permiso de Alfre (llamada del 1 de septiembre de
// 2026). Los números y la cita salen de esa llamada. Pedirle el OK por escrito
// a la redacción exacta de la cita antes de difundir la página.
const content: AutomationLandingContent = {
  lang: "es-ES",
  hero: {
    h1Before: "Recupera",
    h1Marked: "horas",
    h1After: "cada semana. Acepta más clientes, no más papeleo.",
    subhead:
      "Uso inteligencia artificial para automatizar el trabajo repetitivo con tus clientes, y reduzco el montón de herramientas que necesitas para llevar tu negocio.",
    cta: "Pide tu consulta gratuita",
    micro: ["totalmente gratis", "30 minutos", "sin tecnicismos"],
  },
  mailto: {
    subject: "Consulta gratuita",
    bodyLines: [
      "Hola David:",
      "",
      "Me gustaría pedir la consulta gratuita.",
      "",
      "- Mi nombre:",
      "- A qué se dedica mi negocio:",
      "- Número aproximado de clientes:",
      "- La tarea que más tiempo me quita cada semana:",
      "",
      "¡Gracias!",
    ],
  },
  services: {
    heading: "Qué hago",
    items: [
      {
        title: "Automatizo tus procesos con IA",
        body: "Alta de clientes, notas de sesión, resúmenes, seguimientos. El trabajo que repites con cada cliente pasa a hacerlo el software, y tú lo revisas antes de que le llegue nada a nadie.",
      },
      {
        title: "Simplifico tus herramientas",
        body: "Casi todo el mundo paga cinco herramientas que se solapan a medias, y aun así copia los mismos datos de una a otra. Lo reduzco a lo que de verdad usas y hago que el resto se entienda entre sí.",
      },
      {
        title: "Construyo lo que falta",
        body: "Cuando nada de lo que hay encaja con tu forma de trabajar, te construyo una aplicación pequeña que hace justo eso y nada más.",
      },
    ],
  },
  how: {
    heading: "Cómo funciona",
    lede: "Tres pasos, y el primero no cuesta nada.",
    steps: [
      {
        title: "Una llamada gratuita",
        body: "Treinta minutos sobre cómo llevas tu semana de verdad: qué haces cada día, qué repites con cada cliente y qué vas dejando para después. Sin coste, sin compromiso y sin tecnicismos.",
      },
      {
        title: "Identifico qué te está costando tiempo",
        body: "Reviso tu día a día y vuelvo con las pocas cosas que merece la pena arreglar primero, y con las horas que te está costando cada una.",
      },
      {
        title: "Lo construyo y tú lo apruebas",
        body: "Conecto las herramientas que ya usas. Nada se pone en marcha hasta que lo has visto y lo has aprobado, y para tus clientes no cambia nada.",
      },
    ],
  },
  caseStudy: {
    label: "Caso real",
    name: "AlfreHealth",
    story:
      "Alfre lleva un negocio de coaching de salud online. Cada cliente nuevo le suponía la misma hora de gestión: capturas del formulario inicial, apuntes de la primera llamada, la ficha del cliente escrita a mano y el plan del primer mes. Le construí una aplicación sencilla que hace esa parte. Pega los apuntes de la llamada, elige el cliente, y la aplicación redacta el resumen, el plan del mes uno y el mensaje de bienvenida. Él lo lee, cambia lo que quiere y lo envía.",
    metrics: [
      { value: "1 h", label: "ahorrada con cada cliente nuevo" },
      { value: "15 min", label: "para dar de alta a un cliente, antes más de una hora" },
      { value: "0", label: "pasos que tiene que recordar" },
    ],
  },
  testimonial: {
    srHeading: "Testimonio",
    quote:
      "Lo ha hecho muy bien. Una hora ahorrada por cliente, en cada onboarding. Está de locos.",
    name: "Alfre, coach de salud online",
  },
  pricing: {
    heading: "Cuánto cuesta",
    items: [
      {
        title: "La consulta es gratis",
        body: "La llamada, y lo que salga de ella, no te cuestan nada. Da igual que luego trabajemos juntos o no.",
      },
      {
        title: "Precio cerrado por fase",
        body: "Acordamos qué entrega cada fase y cuánto cuesta antes de empezar. No hay contador de horas.",
      },
      {
        title: "Pagas cuando está funcionando",
        body: "Una fase se paga cuando ya funciona en tu negocio, no antes.",
      },
    ],
  },
  about: {
    heading: "Hola, soy David.",
    body: "Soy ingeniero sénior. Llevo cinco años automatizando el trabajo de grandes empresas, de esas que miden el ahorro en horas de ingeniería al mes. Ahora hago lo mismo para negocios pequeños, donde una hora al día importa muchísimo más.",
  },
  finalCta: {
    heading: "Vamos a encontrar una hora en tu semana.",
    body: "Pide la llamada. Repasamos cómo llevas la semana y te digo qué podría funcionar sin ti. Si no encajamos, las ideas te las quedas igual.",
    cta: "Pide tu consulta gratuita",
    note: "Gratis y sin compromiso.",
  },
};

export default function AutomatizacionPage() {
  return <AutomationLanding content={content} />;
}
