# Cabañas Los Abetos — Landing v1

## Objetivo
Landing de una sola página para dos cabañas iguales en el sector Parque Ivian, Puerto Varas (Chile).
Meta: consultas directas por formulario (llegan a un mail), con Airbnb y Booking como alternativa.
Público: chilenos y argentinos (familias, parejas, grupos de hasta 5). Inglés después, sin rehacer nada.
Fecha objetivo de publicación (propuesta): 22 de noviembre de 2026.

## Alcance v1 (cerrado)
Una página, español neutro (sin voseo ni chilenismos). Secciones, en este orden:
1. Hero con barra de consulta
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
- Fuentes autoalojadas: `@fontsource-variable/bricolage-grotesque` (títulos) y
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
  assets/photos/       # fotos renombradas (ver tabla)
  pages/index.astro
BACKLOG.md
```

## Fuentes de verdad
- Ningún texto hardcodeado en componentes: todo sale de `es.ts`.
- Ningún color, tamaño, radio, sombra ni duración hardcodeado: todo sale de `tokens.css`.
- Nunca inventar datos (precios, distancias, políticas, horarios, cifras). Si falta un dato, el campo
  queda en `null` con comentario `TODO` y se avisa. No se publica con `null` visibles.
- No agregar `aggregateRating` ni calificaciones en JSON-LD sin datos verificables.

## Dirección de diseño
Rico y pulido, con la referencia de Stripe y Framer, pero con identidad propia: la madera ámbar de las
cabañas contra el cielo y el lago, sobre fondos fríos de niebla y verdes de pino.
- Paleta (en tokens): niebla, pino, salvia, ámbar, lago. El CTA es siempre ámbar.
- Tipografía: Bricolage Grotesque para títulos (grande, apretada, con peso), Hanken Grotesk para texto.
  Escala fluida de tokens. Líneas de menos de 75 caracteres. Alineación a la izquierda.
- Hero: la foto del frontis a sangre y el titular a gran escala. Es el único momento memorable de la
  página; el resto se mantiene sobrio.
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
| 2_exterior_cabaña_1_.jpg | exterior-frontis.jpg | Hero, OG image |
| IMG-20260415-WA0026.jpg | living.jpg | Cabañas, galería |
| cocina.jpg | comedor-cocina.jpg | Cabañas, galería |
| 3_cama_2_plazas.jpg | dormitorio-matrimonial.jpg | Galería |
| IMG-20260415-WA0023.jpg | dormitorio-dos-camas.jpg | Galería |
| 1_BAÑO.jpg | bano.jpg | Galería |
| IMG-20260415-WA0028.jpg | (reserva) | No usar por ahora |

## Calidad (siempre)
- Responsive: revisar en 375, 768 y 1280 px.
- Accesibilidad: contraste AA, foco visible, labels en el formulario, objetivos táctiles de al menos 44 px.
- Rendimiento: LCP menor a 2,5 s en móvil, sin saltos de layout, JS mínimo, hero con preload.
- SEO local: `lang="es"`, título y descripción, canonical, Open Graph, sitemap, JSON-LD
  (`LodgingBusiness` con la dirección de Parque Ivian, Puerto Varas).

## Flujo de trabajo
1. Una sección a la vez. Para cada una: plan breve (con wireframe ASCII), construcción, crítica
   con capturas en 375, 768 y 1280 px. Solo después se pasa a la siguiente.
2. En la crítica, revisar la sección contra «Anti-patrones prohibidos» y «Definición de listo».
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
