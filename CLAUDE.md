# Cabañas Los Abetos — Landing v1

## Objetivo
Landing de una sola página para dos cabañas iguales en el sector Parque Ivian, Puerto Varas (Chile).
Meta: consultas directas por formulario (llegan a un mail), con Airbnb y Booking como alternativa.
Público: chilenos y argentinos (familias, parejas, grupos de hasta 5). Inglés después, sin rehacer nada.
Fecha objetivo de publicación (propuesta): 22 de noviembre de 2026.

## Alcance v1 (cerrado)
Una página, español neutro (sin voseo ni chilenismos). 5 secciones más el footer, en este orden:
1. Hero (titular, CTA y datos). Congelado: no se modifica sin acuerdo del cliente.
2. Lo que destaca (enlace «Ver cabañas», 4 puntos con ícono, 3 tarjetas con foto y vista ampliada, lista «Y además»;
   brief en `DESTACADOS-BRIEF.md` y ronda 2 del cliente, que reemplazan a «Las cabañas» y a `cabanas.md`)
3. Reseñas reales (muro de citas; no repite los puntos de la sección 2)
4. La zona (tiempos en auto)
5. Cómo reservar / formulario (la ficha de precio va aquí, antes del formulario)
- Footer

Fuera de alcance (va a `BACKLOG.md`, nunca al código): Tres pilares, galería aparte y preguntas
frecuentes (salieron de v1 el 26 de octubre de 2026), inglés, invierno y empresas, blog, motor de
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
  components/          # Hero, Highlights, Reviews, Zone, Contact, Footer
  components/hero/     # partes del hero (nav, eyebrow, título, texto, datos, foto, botón circular)
  components/highlights/ # partes de Lo que destaca (titular, puntos, espacios, «Y además», vista ampliada, photos.ts)
  components/ui/       # piezas compartidas fuera del hero (Button: principal ámbar y secundario con contorno)
  components/booking/  # PricePanel.astro: ficha de precio, guardada SIN USAR para la sección Reservar
  assets/photos/       # exteriores (hero y OG image), renombradas (ver tabla)
  assets/fotos/        # interiores, renombrados (ver tabla); pendiente unificar con photos/
  assets/icons/        # SVG de Lucide copiados tal cual (ISC; LICENSE-lucide.txt): tree-pine, map-pin, bed-double, cooking-pot, arrow-right, arrow-left
  references/approved/ # capturas del hero aprobado (375, 768 y 1280 px, y el menú móvil)
  pages/index.astro
.claude/skills/los-abetos-design/   # estilo aprobado: tokens, reglas, ritmo y checklist
.claude/agents/design-reviewer.md   # revisor visual de solo lectura
BACKLOG.md
DESTACADOS-BRIEF.md    # brief de la sección 2, Lo que destaca (en curso). Manda sobre este archivo en su sección
cabanas.md             # brief de Las cabañas (histórico: lo reemplazó DESTACADOS-BRIEF.md)
hero-brief.md          # brief de la ronda 1 del hero (histórico; manda la skill)
```

## Fuentes de verdad
- Ningún texto hardcodeado en componentes: todo sale de `es.ts`.
- Ningún color, tamaño, radio, sombra ni duración hardcodeado: todo sale de `tokens.css`.
- Nunca inventar datos (precios, distancias, políticas, horarios, cifras). Si falta un dato, el campo
  queda en `null` con comentario `TODO` y se avisa. No se publica con `null` visibles.
- No agregar `aggregateRating` ni calificaciones en JSON-LD sin datos verificables.

## Antes de tocar UI
Antes de tocar UI, usa la skill `los-abetos-design` y revisa con `design-reviewer`. El hero es el
estilo aprobado y el ejemplo canónico; sus capturas están en `src/references/approved/`.

## Dirección de diseño
Rico y pulido, con la referencia de Stripe y Framer, pero con identidad propia: la madera ámbar de las
cabañas contra el cielo y el lago, sobre fondos fríos de niebla y verdes de pino.
- Paleta (en tokens): niebla, pino, salvia, ámbar, lago. El CTA es siempre ámbar.
- Tipografía: Cormorant Garamond 300 para títulos (serif ligero de alto contraste), Hanken Grotesk para
  texto. Escala fluida de tokens. Líneas de menos de 75 caracteres. Alineación a la izquierda.
- Hero: oscuro, con la foto a la derecha (70 % del ancho) y su borde izquierdo fundido a pino; el
  titular en mayúsculas a gran escala sobre la zona oscura. Es el único momento memorable de la
  página; el resto se mantiene sobrio.
- Ritmo de secciones: Hero oscuro, Lo que destaca claro, Reseñas oscuro, La zona claro, Reservar oscuro,
  footer claro (detalle en la skill).
- Formas rectas fuera del hero: esquinas con radio 0 (`--radius-square`) en botones, fotos, tarjetas y
  paneles; la jerarquía la dan las líneas finas (`--line-on-light`, `--border-hairline`). Sombras: solo la
  elevación discreta de las tarjetas (`--shadow-card`, y `--shadow-card-hover` al pasar el cursor, sin mover la
  tarjeta); ningún otro elemento lleva sombra. Íconos: solo los de Lucide copiados a `src/assets/icons/`. El
  hero conserva su botón en píldora y su flecha circular (diferencia conocida y aceptada).
- Lo que destaca (`DESTACADOS-BRIEF.md`, ronda 2): titular a la izquierda y, a la derecha y en su base, el
  enlace «Ver cabañas» con flecha SVG; fila de 4 puntos centrados (ícono, título y una línea, sin líneas
  verticales); 3 tarjetas blancas del mismo alto, con elevación, 16 px de marco alrededor de la foto y «Ver fotos»;
  y lista «Y además» en dos columnas con líneas finas. Fondo `--bg-alt` para que la tarjeta blanca se distinga del
  lienzo. Los patrones aprobados están en la skill (`los-abetos-design`).
- Movimiento: una sola secuencia orquestada al cargar el hero. Lo demás solo responde a acciones
  (abrir, enviar, enfocar). Respetar `prefers-reduced-motion`.

## Anti-patrones prohibidos
- Fondo crema con serif de contraste y acento terracota.
- Fondo casi negro con un acento fluorescente.
- Gradientes morados o gradientes como decoración de fondo.
- Tarjetas idénticas con la misma sombra y el mismo radio. (Excepción pedida por el cliente en la ronda 2: las 3
  tarjetas de Lo que destaca llevan la misma elevación y el mismo alto; es una sola fila de fotos distintas.)
- Etiqueta en MAYÚSCULAS sobre cada título (eyebrows).
- Numeración 01 / 02 / 03 donde el contenido no es una secuencia.
- Resaltar una sola palabra de un titular con cursiva o color.
- Flecha `→` en cada botón. Emojis como íconos. Lorem ipsum.
- Entrada fade-and-slide-up en cada sección y hover animado en cada tarjeta.
- Fotos de stock genéricas o generadas por IA.

Excepción aprobada por el cliente, solo para el hero: titular y nav en mayúsculas, y eyebrow sobre el titular.
Lo que destaca también pone en mayúsculas el titular de sección y el texto de sus botones, porque su brief lo
pide; sin eyebrow. Sus subtítulos van en serif y en minúscula.

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
| IMG-20260415-WA0026.jpg | living.jpg | Lo que destaca (el living con macramé, 1600×1200; hasta la ronda 1 este archivo era por error `living cocina.jpg`, otra foto de la cocina) |
| cocina.jpg | cocina.jpg | Lo que destaca (el brief la llama `comedor-cocina.jpg`) |
| 3_cama_2_plazas.jpg | dormitorio-matrimonial.jpg | Lo que destaca |
| IMG-20260415-WA0023.jpg | dormitorio-dos-camas.jpg | Lo que destaca (solo en la vista ampliada) |
| 1_BAÑO.jpg | bano.jpg | Lo que destaca (solo en la vista ampliada) |
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
- [ ] Las 5 secciones y el footer construidos con contenido de `es.ts`, sin ningún `null` ni `TODO` visible.
- [ ] Formulario probado de punta a punta: la consulta llega al mail y el honeypot bloquea spam.
- [ ] Links de Airbnb y Booking correctos.
- [ ] Lighthouse móvil de 90 o más en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- [ ] Revisión visual en 375, 768 y 1280 px sin errores.
- [ ] OG image, favicon, sitemap y JSON-LD verificados.
- [ ] Publicado en un dominio propio.
Cuando todo esté marcado, se publica y el proyecto se cierra. Lo demás es v2.

## Estado y pendientes abiertos
Avance: 1. Hero cerrado y congelado. 2. Lo que destaca: cerrada como v1 el 27 de octubre de 2026 (etiqueta
`seccion2-v1`; `Highlights.astro`, ids `cabanas` y `galeria`). Quedó la tarjeta con 16 px de marco alrededor de la foto:
la otra variante y el parámetro `?tarjetas` se eliminaron. Las variantes A y B de «Las cabañas» (`/cabanas-a`,
`/cabanas-b`) se eliminaron al reemplazarse la sección; siguen en el historial de git. `index.astro` ya tiene solo las
secciones del alcance (Hero, Lo que destaca, Reseñas, La zona, Reservar y el footer). Siguiente en el orden: Reseñas.
Capturas de Lo que destaca (375, 768 y 1280 px): `src/references/destacados-ronda1/` y `destacados-ronda2/` (en esta
última, `variante-b-*` es el estado aprobado). Ideas y decisiones para después de v1: `BACKLOG.md`.

El hero es la variante A (foto a la derecha con el borde fundido a pino) y es el principal: no se
modifica ni una línea sin acuerdo del cliente (capturas de control: `src/references/approved/hero-antes-*.png`).
Código en `src/components/Hero.astro` y `src/components/hero/`. Los valores de los tokens existentes no se
cambian: si falta uno, se agrega uno nuevo.

Pendientes que condicionan la publicación (no se resuelven inventando):
- Foto del hero (`exterior-frontis2.jpg`, 1327 px): falta el original en alta resolución (~2400 px) y el
  retoque (cielo azul profundo, quitar las sillas blancas). Hoy hay un filtro CSS provisorio.
- Confirmar con los anfitriones los «10 minutos en auto» (`hero.subheadline`, `hero.facts` y el punto «A 10
  minutos del centro») y los «20 minutos» al lago (`highlights.points`).
- URL de Airbnb y Booking (`booking.airbnbUrl`, `booking.bookingUrl`): en `null`, los enlaces se ven
  pero no enlazan.
- Mayúsculas en títulos: Lo que destaca las usa porque su brief lo pide. Falta confirmar si Reseñas, La zona
  y Reservar siguen igual o solo el hero y Lo que destaca (hoy la skill lo deja abierto).
- Precio «desde» ($110.000 CLP) y estadía mínima (1 noche) siguen en `es.ts` (`booking.priceFromCLP`,
  `booking.minStayNights`) sin confirmar con los anfitriones. La ficha ya no está en Lo que destaca: se
  muda a Reservar (`components/booking/PricePanel.astro`, sin usar). No se publica sin esa confirmación.
- Fotos de Lo que destaca: `living.jpg` ya es `IMG-20260415-WA0026.jpg` (el living con macramé; antes era una
  segunda foto de la cocina). La foto muestra el futón-cama pero no la TV, y el texto del brief dice «con TV»:
  confirmar. El piso de `dormitorio-matrimonial.jpg` refleja azul y el armario se ve inclinado: una corrección
  automática dejó manchas, va con retoque manual (como lente y verticales rectas de todas, que necesitan los
  originales: hoy son archivos de WhatsApp de 1280 a 1600 px).
- `photoNote` («la otra es idéntica») sigue sin confirmar con los anfitriones.
- Footer: tono claro propuesto para seguir la alternancia tras Reservar oscuro; sin confirmar.
- Campos del formulario: sin aprobar; Reservar fija el canon en la skill.
- Íconos: por ahora los de Lucide copiados a `src/assets/icons/`; se dibujará un set propio cuando el logotipo
  esté definido.
- Nav del hero (congelado): «Las cabañas» y «Galería» llevan a la sección «Lo que vas a notar al llegar»; si el
  cliente quiere que las etiquetas coincidan, hay que descongelar el nav.
- Contraste AA: se mide con un script de Playwright que aún no está en el repo (se midió en la carpeta
  temporal de la sesión: texto secundario 6,28:1 sobre niebla y botones 5,65:1 o más).
- `design-reviewer`: no está registrado como agente en las sesiones hasta ahora; la crítica la hace un
  subagente que sigue `.claude/agents/design-reviewer.md`.
