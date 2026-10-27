---
name: los-abetos-design
description: Estilo visual aprobado de Cabañas Los Abetos (Astro, tokens.css, es.ts). Úsala siempre que se cree o modifique una sección, componente, estilo, token, foto o animación del sitio, y antes de revisar capturas. Define tokens, patrones, ritmo oscuro/claro y checklist; el hero es el ejemplo canónico.
---

# Estilo Los Abetos

El hero es el estilo aprobado y el ejemplo canónico: `src/components/Hero.astro` y sus partes en
`src/components/hero/`. Capturas aprobadas en `src/references/approved/` (`hero-375.png`,
`hero-768.png`, `hero-1280.png`, `hero-375-menu.png`). Inspiración original:
`src/references/hero-ref-cabin-wild.png.webp`. `hero-brief.md` es histórico: manda esta skill.
Si el brief de una sección contradice esta skill, no decidir solo: preguntar.

## Antes de escribir código
1. Leer `CLAUDE.md`, esta skill y las partes del hero parecidas a lo que se va a construir.
2. Texto en `src/content/es.ts`. Valores visuales en `src/styles/tokens.css`. Si falta un token se
   agrega ahí, con comentario; nunca un número o color suelto en el componente.
3. Al terminar: capturas en 375, 768 y 1280 px y revisión con el agente `design-reviewer`.

## Ritmo de secciones (alternar oscuro y claro)
| # | Sección | Tono | Fondo | Texto | Ancla |
|---|---|---|---|---|---|
| 1 | Hero | oscuro | `--bg-dark` | `--text-on-dark` | `#inicio` |
| 2 | Las cabañas | claro | `--bg` | `--text` | `#cabanas` |
| 3 | Reseñas | oscuro | `--bg-dark` | `--text-on-dark` | `#resenas` |
| 4 | La zona | claro | `--bg` | `--text` | `#zona` |
| 5 | Reservar | oscuro | `--bg-dark` | `--text-on-dark` | `#reservar` |
| – | Footer | claro | `--bg-alt` | `--text` | `#footer` |
- El tono del footer no lo definió el cliente: sigue la alternancia (claro tras Reservar oscuro).
- Los cortes entre secciones son limpios, sin degradé decorativo.
- `--bg-alt` es para superficies dentro de una sección clara (fichas, paneles), no para el fondo.
- En oscuro valen las reglas del hero: `--line-on-dark`, `--text-on-dark-muted`, velos si hay foto.

## Color (semánticos; nunca `--color-*` en componentes)
- Oscuro: fondo `--bg-dark` (pino-900, `#0f2a24`), texto `--text-on-dark`, secundario
  `--text-on-dark-muted`, líneas finas `--line-on-dark` (niebla al 35 %).
- Claro: fondo `--bg`, texto `--text`, secundario `--text-muted`, bordes `--border`. Líneas finas
  (par de `--line-on-dark`): `--line-on-light`; `--border` es demasiado tenue sobre niebla. Panel o
  ficha con relleno: `--bg-panel` (salvia suave), la única superficie rellena de la sección.
- CTA: `--cta-bg` ámbar (hover `--cta-bg-hover`), texto `--cta-text`. Es lo único saturado de la
  interfaz. Enlaces `--link`. Foco `--focus-ring`, `--focus-width`, `--focus-offset` (ya global).

## Tipografía
- Títulos: Cormorant Garamond 300 (`--font-display`, `--weight-display`). `global.css` lo aplica a
  h1–h3 con `--leading-display` y tracking 0. Solo el peso 300 está instalado: sin negrita ni cursiva.
- Texto: Hanken Grotesk (`--font-body`), `--text-base`, `--leading-body`, línea máxima `--measure`
  (columnas angostas `--measure-narrow`). Negrita solo con `--weight-strong`. Alineado a la izquierda.
- Hero medido: titular `--step-hero` (`--step-hero-compact`, ×0,82, desde 48rem): 38 px a 375, 50 px a
  768, 75 px a 1280. «LEJOS DEL RUIDO.» ocupa 81–83 % del ancho a 375, 51–52 % a 768 y 46–47 % a 1280
  (54 % del contenedor). Un titular nuevo se mide en el navegador, no se estima.
- Eyebrow y nav: `--text-xs`, mayúsculas, `--tracking-caps`. Texto del hero: `--text-base`, color
  `--text-on-dark-muted`, `--measure-narrow`. Datos: `--text-xs` (móvil) y `--text-sm` desde 48rem.
- Mayúsculas y eyebrow: excepción aprobada SOLO para el hero (titular, nav y eyebrow). En el resto,
  minúscula normal y sin eyebrow.
- Títulos de sección: token `--step-section` (= `--text-2xl`), medido en Las cabañas: 31, 41 y 52 px a
  375, 768 y 1280, siempre menos que el hero (38, 50 y 75). `--text-3xl` pasa al hero a 1280: no usarlo.
  Las cabañas (ronda 1, sin aprobar por el cliente) lo pone en mayúsculas, como el hero, porque su brief
  lo pide y dice que manda sobre `CLAUDE.md`. Queda por confirmar si Reseñas, La zona y Reservar siguen
  igual; hasta entonces la excepción de mayúsculas de arriba sigue siendo solo del hero y de Las cabañas.

## Formas, espacio y controles
- Fotos fuera del hero: `--radius-photo`. Controles: `--radius-pill`. Chips: `--radius-chip`. Sombras:
  solo `--shadow-*` (teñidas de pino). El hero no usa radios ni sombras: lo separan líneas finas.
- Grilla: `.container` (`--container` 76rem, `--gutter`), una columna alineada a la izquierda; sin
  grilla de 12 columnas en el hero. Secciones: `.section` (`padding-block: var(--section-y)`).
- Espaciado solo con `--space-*`. Hero: bloques a `--space-8` y `--space-12`, titular a `--space-6`.
- Todo control mide al menos `--tap-min` de alto (logo, menú, enlaces de texto incluidos).
  Botón principal y circular: `--control-lg`.
- Botón primario: `<a>` pill ámbar, `--weight-strong`, `padding-inline: var(--space-8)`, texto
  `booking.primaryCta`, sin flecha. Secundarios: enlaces de texto subrayados (`--underline-offset`),
  Airbnb y luego Booking, en `--text-sm`.
- Botón circular (solo hero, baja a `#cabanas`): `--radius-pill` sobre un cuadrado de `--control-lg`,
  borde `--line-on-dark`, flecha SVG con `--stroke-icon`; en hover se llena de `--text-on-dark`.
- Fila de datos: 3 columnas iguales bajo una línea fina `--line-on-dark`, sin números.
- Campos de formulario: sin aprobar. La sección Reservar (oscura) fija el canon con las reglas de
  arriba: pill o `--radius-chip`, `--tap-min`, bordes `--line-on-dark`, foco `--focus-ring`.

## Fotos
- `<Picture>` de `astro:assets` (avif y webp), `width`/`height` y `alt` del slot en `es.ts`. La del
  hero lleva `priority`; las demás `loading="lazy"`.
- Retoque provisorio: `--photo-hero-filter` (saturación 0,85, brillo 0,85). Úsalo en todas hasta
  tener el original retocado.
- Fotos ampliables (Las cabañas): cada una es un `<button>` con `aria-label` «Ampliar foto: pie» que abre
  un `<dialog>` modal (`CabinsViewer.astro`): cerrar, anterior y siguiente (botón circular del hero),
  Esc y flechas, foco atrapado, el foco vuelve a la foto, pie de foto. Sin transiciones. La vista usa el
  ancho del archivo como tope, nunca más. En una columna, `--photo-max-width`; en la fila con scroll-snap
  (variante B), `--strip-h`.
- Texto sobre foto: la oscuridad va en velos (`--scrim-*`, `mask-image`), nunca bajando el color del
  texto. Contraste AA medido: 4,5:1 normal, 3:1 si el texto mide 24 px o más.
- La foto del hero (1327×1043) se escala para cubrir su caja: se amplía por encima de su resolución
  en pantallas de más de ~1900 px de ancho o ~1050 px de alto y en densidad ×2. No usar otra foto
  de 1327 px a ese tamaño; el original en alta resolución sigue pendiente.
- El texto no tapa ventanales ni terraza de la cabaña.

## Movimiento
- Única secuencia, solo en el hero y solo con `prefers-reduced-motion: no-preference`: las dos
  líneas del titular suben una tras otra (máscara `overflow: hidden`, `--duration-reveal`,
  `--delay-hero-start` y `--delay-hero-step`, `--mask-offset`) y la foto hace zoom de `--zoom-from`
  a 1 en `--duration-zoom`. La foto nunca parte con opacidad 0 (retrasa el LCP).
- Todo lo demás responde solo a acciones (hover, foco, abrir, enviar) con `--duration-fast` o
  `--duration-base` y `--ease-out`. Sin entradas por scroll. `global.css` ya reduce todo a
  `--duration-instant` con `prefers-reduced-motion: reduce`.

## Hero: ejemplo canónico (qué copiar)
- Móvil primero, apilado: foto completa arriba (`--ratio-hero-photo`), fundida hacia abajo
  (`--hero-fade-v`); el texto sube `--space-12` sobre el fundido. Alto: el del contenido.
- Desde 48rem: `min-height: var(--hero-height)`. Foto a la derecha (`--hero-photo-width`, 70 %), anclada
  a la izquierda (`--hero-photo-pos`), con `mask-image` doble: borde izquierdo (`--hero-fade-from` a
  `--hero-fade-to`) y borde inferior (`--hero-scrim-bottom`). A 1280 px es transparente hasta el 38 %
  del ancho y nítida desde el 62 %; el titular entra en el fundido y no llega a la parte nítida.
- Velo superior `--hero-scrim-top` (`--scrim-75` a transparente) para el contraste del nav.
- Texto centrado en vertical a la izquierda; abajo, la fila de datos y el botón circular.
- Nav (`--hero-nav-h`, `--z-nav`): logo a la izquierda en `--weight-strong`, 4 enlaces a la derecha;
  en móvil, `<details>` con panel `--bg-dark` y bordes `--line-on-dark`, que se cierra al elegir un
  enlace. Hover del enlace: subrayado.
- Un solo foco visual: titular y foto. El CTA ámbar es lo único saturado.
- Excepciones a «sin valores sueltos»: los breakpoints `48rem`, `64rem` (ficha junto a la lista) y `76rem`
  (= `--container`, donde la fila de fotos deja de salir al borde); CSS no admite variables en `@media`,
  `#000` en `mask-image` (es alfa), `sizes` y `widths` de `<Picture>` (el `70vw` copia
  `--hero-photo-width`) y valores estructurales (`0`, `100%`, `auto`, `1fr`, `repeat(3, …)`).

## Qué NO hacer
- Bricolage Grotesque, otras familias o pesos distintos de 300 en títulos.
- Valores sueltos (px, rem, ms, colores, sombras, z-index) en componentes; `--color-*` directo; texto
  en el markup.
- Los anti-patrones de `CLAUDE.md`: crema con serif y terracota, casi negro con acento fluorescente,
  gradientes decorativos (los velos de contraste sí valen), tarjetas idénticas, eyebrows fuera del
  hero, numeración 01/02/03, palabra resaltada en un titular, flecha en cada botón, emojis como
  íconos, fade-and-slide en cada sección, hover animado en cada tarjeta, fotos de stock o generadas.
- Más de un botón primario por pantalla, o un texto distinto de `booking.primaryCta`.
- Mostrar `null` o `TODO`; inventar precios, distancias, políticas o cifras.
- Agregar secciones fuera de la tabla de ritmo (Pilares, Galería y Preguntas frecuentes salieron de v1).

## Checklist por sección
- [ ] Todo el texto sale de `es.ts`; ningún `null` ni `TODO` visible.
- [ ] Sin valores sueltos. Grep: `[0-9.]+(px|rem|em|ms|vw)\b|#[0-9a-f]{3,8}\b|rgba?\(|font-weight: *[0-9]|--color-|z-index: *[0-9]`.
- [ ] Tono según la tabla de ritmo y tokens semánticos del tono; el vecino tiene el tono opuesto.
- [ ] Títulos en Cormorant 300, minúscula normal, línea menor a 75 caracteres, alineados a la izquierda.
- [ ] Formas: foto `--radius-photo`, controles pill, tarjetas no idénticas.
- [ ] Un foco visual; CTA ámbar solo si corresponde; sin anti-patrones.
- [ ] Texto sobre foto con AA medido (píxel más claro detrás del texto) y sin tapar la cabaña.
- [ ] Movimiento: solo respuestas a acciones; `prefers-reduced-motion` respetado.
- [ ] Foco visible, objetivos de `--tap-min` de alto, `alt` descriptivo, `width` y `height` en fotos.
- [ ] Capturas en 375, 768 y 1280 px sin desborde horizontal ni palabras cortadas.
- [ ] `design-reviewer` sin desviaciones P0 ni P1 pendientes.

## Capturas (sin dependencias)
Con el sitio servido (`npm run build` y `npx astro preview`, o `astro dev --background`):
`msedge --headless=new --disable-gpu --hide-scrollbars --screenshot=<ruta>.png --window-size=<ancho>,<alto> --virtual-time-budget=4000 <url>`
(Windows: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`). Tamaños: 375×812,
768×1024 y 1280×800. `--virtual-time-budget` deja terminar la secuencia del hero antes de capturar.
