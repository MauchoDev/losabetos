# Cabañas Los Abetos — Landing v1

## Objetivo
Landing de una sola página para dos cabañas iguales en el sector Parque Ivian, Puerto Varas (Chile).
Meta: consultas directas por formulario (llegan a un mail), con Airbnb y Booking como alternativa.
Público: chilenos y argentinos (familias, parejas, grupos de hasta 5). Inglés después, sin rehacer nada.
Fecha objetivo de publicación (propuesta): 22 de noviembre de 2026.

## Alcance v1 (cerrado)
Una página, español neutro (sin voseo ni chilenismos). Secciones, en este orden:
1. Hero (titular, CTA y datos; la barra de llegada, salida y personas vive en el formulario)
2. Tres pilares (tranquilidad cerca de la ciudad, limpieza y detalle, anfitriones atentos)
3. Las cabañas (comodidades en grilla bento)
4. Galería
5. Reseñas reales
6. La zona (tiempos en auto)
7. Cómo reservar / formulario
8. Preguntas frecuentes
9. Footer

Fuera de alcance (va a `BACKLOG.md`, nunca al código): inglés, invierno y empresas, blog, motor de
reservas, sincronización de calendarios, pagos, panel de administración.

## Stack
- Astro (última estable) + TypeScript estricto. Sitio estático, sin framework de UI.
- CSS con variables (`src/styles/tokens.css`) y estilos scoped por componente. Sin Tailwind:
  los tokens son la única fuente de valores visuales, así nada se inventa sección por sección.
- Fuentes autoalojadas: `@fontsource/cormorant-garamond` (títulos, solo peso 300) y
  `@fontsource-variable/hanken-grotesk` (texto).
- Imágenes con `astro:assets` (`<Image />` / `<Picture />`), formatos avif/webp.
- Motion: CSS + `IntersectionObserver` mínimo. Sin librerías de animación.
- Formulario: Web3Forms (llega al mail). Clave en variable de entorno `PUBLIC_WEB3FORMS_KEY`.
- i18n preparado: Astro i18n con `es` por defecto. Todo el texto vive en `src/content/es.ts`.
- Deploy: Cloudflare Pages (o Vercel). Se publica el esqueleto el día 1 y se mejora desde ahí.

## Estructura
```
src/
  content/es.ts        # único lugar con texto
  styles/tokens.css    # único lugar con valores visuales
  styles/global.css
  components/          # Hero, Pillars, Cabins, Gallery, Reviews, Zone, Contact, Faq, Footer
  components/hero/     # partes del hero (nav, título, texto, datos, foto, botón)
  assets/photos/       # fotos renombradas (ver tabla)
  references/approved/ # capturas del hero aprobado (375, 768, 1280 px)
  pages/index.astro
.claude/skills/los-abetos-design/   # estilo aprobado: tokens, reglas, ritmo y checklist
.claude/agents/design-reviewer.md   # revisor visual de solo lectura
BACKLOG.md
hero-brief.md          # brief de la ronda 1 del hero (histórico; manda la skill)
```

## Fuentes de verdad
- Ningún texto hardcodeado en componentes: todo sale de `es.ts`.
- Ningún color, tamaño, radio, sombra ni duración hardcodeado: todo sale de `tokens.css`.
- Nunca inventar datos (precios, distancias, políticas, horarios, cifras). Si falta un dato, el campo
  queda en `null` con comentario `TODO` y se avisa. No se publica con `null` visibles.
- No agregar `aggregateRating` ni calificaciones en JSON-LD sin datos verificables.

## Antes de tocar UI
Usa la skill `los-abetos-design` y revisa con el agente `design-reviewer`. El hero es el estilo
aprobado y el ejemplo canónico; sus capturas están en `src/references/approved/`.

## Dirección de diseño
Rico y pulido, con la referencia de Stripe y Framer, pero con identidad propia: la madera ámbar de las
cabañas contra el cielo y el lago, sobre fondos fríos de niebla y verdes de pino.
- Paleta (en tokens): niebla, pino, salvia, ámbar, lago. El CTA es siempre ámbar.
- Tipografía: Cormorant Garamond 300 para títulos (serif ligero de alto contraste), Hanken Grotesk para
  texto. Escala fluida de tokens. Líneas de menos de 75 caracteres. Alineación a la izquierda.
- Hero: oscuro, con la foto a la derecha (70 % del ancho) y su borde izquierdo fundido a pino; el
  titular en mayúsculas a gran escala sobre la zona oscura. Es el único momento memorable de la
  página; el resto se mantiene sobrio.
- Ritmo de secciones: alterna oscuro y claro (detalle en la skill).
- Jerarquía de formas: radio grande para fotos, pill para controles, radio chico para chips. Sombras
  teñidas de verde (tokens), nunca gris genérico.
- Comodidades en grilla bento con tamaños distintos según importancia, no tarjetas iguales.
- Movimiento: una sola secuencia orquestada al cargar el hero. Lo demás solo responde a acciones
  (abrir, enviar, enfocar). Respetar `prefers-reduced-motion`.

## Anti-patrones prohibidos
- Fondo crema con serif de contraste y acento terracota.
- Fondo casi negro con un acento fluorescente.
- Gradientes morados o gradientes como decoración de fondo.
- Tarjetas idénticas con la misma sombra y el mismo radio.
- Etiqueta en MAYÚSCULAS sobre cada título (eyebrows).
- Numeración 01 / 02 / 03 donde el contenido no es una secuencia.
- Resaltar una sola palabra de un titular con cursiva o color.
- Flecha `→` en cada botón. Emojis como íconos. Lorem ipsum.
- Entrada fade-and-slide-up en cada sección y hover animado en cada tarjeta.
- Fotos de stock genéricas o generadas por IA.

Excepción aprobada por el cliente, solo para el hero: titular y nav en mayúsculas, y eyebrow sobre el titular.

## Reservas y CTA
- Un solo botón primario, siempre con el mismo texto: «Consultar disponibilidad» (ámbar).
- Secundarios, siempre en este orden y como enlaces de texto: Airbnb, Booking.
- El formulario es una consulta, no una reserva. Mensaje de éxito: «Recibimos tu consulta. Te
  responderemos por correo.» Los errores dicen qué falló y cómo arreglarlo.
- Campos: nombre, correo, WhatsApp (opcional), llegada, salida, personas (1 a 5), cabañas (1 o 2),
  mensaje (opcional). Anti-spam con campo trampa (honeypot).
- La estadía mínima y el precio «desde» salen de `es.ts` (`booking.minStayNights`, `booking.priceFromCLP`).

## Fotos
Cada foto es un «slot» definido en `es.ts` (archivo, alt, uso). Se pueden reemplazar sin tocar el
diseño. Siempre `alt` descriptivo, `width` y `height` para evitar saltos de layout, y `loading="lazy"`
salvo la del hero.

| Archivo original | Nombre en el proyecto | Uso |
|---|---|---|
| 2_exterior_cabaña_1_.jpg | exterior-frontis.jpg | OG image |
| (sin registro) | exterior-frontis2.jpg | Hero (1327 px; pendiente el original en alta resolución y su retoque) |
| IMG-20260415-WA0026.jpg | living.jpg | Cabañas, galería |
| cocina.jpg | comedor-cocina.jpg | Cabañas, galería |
| 3_cama_2_plazas.jpg | dormitorio-matrimonial.jpg | Galería |
| IMG-20260415-WA0023.jpg | dormitorio-dos-camas.jpg | Galería |
| 1_BAÑO.jpg | bano.jpg | Galería |
| IMG-20260415-WA0028.jpg | (reserva) | No usar por ahora |

## Calidad (siempre)
- Responsive: revisar en 375, 768 y 1280 px.
- Accesibilidad: contraste AA, foco visible, labels en el formulario, objetivos táctiles de al menos 44 px.
- Rendimiento: LCP menor a 2,5 s en móvil, sin saltos de layout, JS mínimo, foto del hero con `priority`.
- SEO local: `lang="es"`, título y descripción, canonical, Open Graph, sitemap, JSON-LD
  (`LodgingBusiness` con la dirección de Parque Ivian, Puerto Varas).

## Flujo de trabajo
1. Una sección a la vez. Para cada una: plan breve (con wireframe ASCII), construcción con la skill
   `los-abetos-design`, crítica con capturas en 375, 768 y 1280 px. Solo después se pasa a la siguiente.
2. En la crítica, revisar la sección con `design-reviewer`, contra «Anti-patrones prohibidos» y
   «Definición de listo».
3. Un commit por sección: `feat(sección): …`.
4. Si falta información que cambia el diseño, preguntar antes de decidir.
5. Ideas nuevas van a `BACKLOG.md`. No se agregan al código de v1.

## Definición de listo (cuando se cumple, v1 está terminado)
- [ ] Las 9 secciones construidas con contenido de `es.ts`, sin ningún `null` ni `TODO` visible.
- [ ] Formulario probado de punta a punta: la consulta llega al mail y el honeypot bloquea spam.
- [ ] Links de Airbnb y Booking correctos.
- [ ] Lighthouse móvil de 90 o más en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- [ ] Revisión visual en 375, 768 y 1280 px sin errores.
- [ ] OG image, favicon, sitemap y JSON-LD verificados.
- [ ] Publicado en un dominio propio.
Cuando todo esté marcado, se publica y el proyecto se cierra. Lo demás es v2.

## Estado y pendientes abiertos
Avance: 1. Hero cerrado (fase 2). Siguiente en el orden: 2. Tres pilares.

El hero es la variante A (foto a la derecha con el borde fundido a pino) y es el principal: no se
rediseña sin acuerdo del cliente. Código en `src/components/Hero.astro` y `src/components/hero/`.

Pendientes que condicionan la publicación (no se resuelven inventando):
- Foto del hero (`exterior-frontis2.jpg`, 1327 px): falta el original en alta resolución (~2400 px) y el
  retoque (cielo azul profundo, quitar las sillas blancas). Hoy hay un filtro CSS provisorio.
- Confirmar con los anfitriones los «10 minutos en auto» (`hero.subheadline` y `hero.facts`).
- URL de Airbnb y Booking (`booking.airbnbUrl`, `booking.bookingUrl`): en `null`, los enlaces se ven
  pero no enlazan.
- Preguntas frecuentes: tono oscuro o claro sin definir (la skill propone claro).
- Títulos de sección: tamaño sin aprobar; la primera sección que los use fija el canon en la skill.
- Contraste AA: se mide con un script de Playwright que aún no está en el repo.
- `design-reviewer`: creado pero sin probar en una sección real.
