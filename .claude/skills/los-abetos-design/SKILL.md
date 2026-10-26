---
name: los-abetos-design
description: Estilo visual aprobado de Cabañas Los Abetos (Astro, tokens.css, es.ts). Úsala siempre que se cree o modifique una sección, componente, estilo, token, foto o animación del sitio, y antes de revisar capturas. Define tokens, patrones, ritmo oscuro/claro y checklist; el hero es el ejemplo canónico.
---

# Estilo Los Abetos

El hero es el estilo aprobado: `src/components/Hero.astro` y sus partes en `src/components/hero/`.
Capturas aprobadas: `src/references/approved/` (`hero-375.png`, `hero-768.png`, `hero-1280.png`,
`hero-375-menu.png`). Inspiración original: `src/references/hero-ref-cabin-wild.png.webp`.
`hero-brief.md` es histórico (ronda 1): manda esta skill.

## Antes de escribir código
1. Leer `CLAUDE.md`, esta skill y las partes del hero parecidas a lo que se va a construir.
2. Texto en `src/content/es.ts`. Valores visuales en `src/styles/tokens.css`. Si falta un token se
   agrega ahí, con comentario; nunca un número o color suelto en el componente.
3. Al terminar: capturas en 375, 768 y 1280 px y revisión con el agente `design-reviewer`.

## Color (siempre semánticos; nunca `--color-*` en componentes)
- Oscuro: fondo `--bg-dark` (pino), texto `--text-on-dark`, secundario `--text-on-dark-muted`,
  líneas finas `--line-on-dark`.
- Claro: fondo `--bg` o `--bg-alt` (alternar), texto `--text`, secundario `--text-muted`, bordes `--border`.
- CTA: `--cta-bg` ámbar (hover `--cta-bg-hover`), texto `--cta-text`. Es el único color saturado de
  la interfaz. Enlaces `--link`. Foco `--focus-ring` con `--focus-width` (ya global).

## Tipografía
- Títulos: Cormorant Garamond 300 (`--font-display`, `--weight-display`). `global.css` ya lo aplica a
  h1–h3 con `--leading-display` y tracking 0. Solo el peso 300 está instalado: no pedir negrita ni cursiva.
- Texto: Hanken Grotesk (`--font-body`), `--text-base`, `--leading-body`, línea máxima `--measure`
  (columnas angostas: `--measure-narrow`). Negrita solo con `--weight-strong`. Alineado a la izquierda.
- Titular del hero: `--step-hero`, y `--step-hero-compact` desde 48rem. «LEJOS DEL RUIDO.» mide 58 %
  del ancho a 1280 y cabe en una línea a 375. Un titular nuevo se mide igual, no se estima.
- Mayúsculas, tracking `--tracking-caps` y eyebrow: excepción aprobada SOLO para el hero (titular, nav
  y eyebrow). En el resto, minúscula normal y sin eyebrow.
- Títulos de sección: sin aprobar todavía. Punto de partida `--text-2xl` o `--text-3xl`; la primera
  sección que los use fija el canon y se anota aquí.

## Formas, espacio y controles
- Foto: `--radius-photo`. Controles: `--radius-pill`. Chips: `--radius-chip`. Sombras: solo `--shadow-*`
  (teñidas de pino). El hero no usa sombras; lo separan líneas finas.
- Contenedor: clase `.container` (`--container`, `--gutter`). Secciones: `.section`
  (`padding-block: var(--section-y)`). El hero define su propio alto con `--hero-height`.
- Espaciado solo con `--space-*`. Hero: bloques a `--space-8`/`--space-12`, título a `--space-6`.
- Todo control mide al menos `--tap-min`. Botón principal y botón circular: `--control-lg`.
- Botón primario: `<a>` pill ámbar, `--weight-strong`, `padding-inline: var(--space-8)`, texto
  `booking.primaryCta`, sin flecha. Secundarios: enlaces de texto subrayados (`--underline-offset`),
  Airbnb y luego Booking, del tamaño `--text-sm`.
- Botón circular (solo hero, baja a `#cabanas`): borde `--line-on-dark`, flecha SVG con `--stroke-icon`;
  al pasar el cursor se llena de `--text-on-dark`.
- Fila de datos: 3 columnas iguales bajo una línea fina `--line-on-dark`, sin números.

## Fotos
- `<Picture>` de `astro:assets` (avif y webp), `width`/`height` y `alt` del slot en `es.ts`. La del
  hero lleva `priority`; las demás `loading="lazy"`.
- Retoque provisorio: `--photo-hero-filter`. Hasta tener el original retocado, usarlo en todas.
- Texto sobre foto: se oscurece con velos (`--scrim-*`, `mask-image`) y nunca bajando el color del
  texto. Contraste AA medido: 4,5:1 normal y 3:1 si el texto mide 24 px o más.
- La foto del hero mide 1327 px de ancho: no mostrarla a sangre más allá de ~1344 px sin avisar.
- El texto no debe tapar ventanales ni terraza de la cabaña.

## Movimiento
- Única secuencia, solo en el hero y solo con `prefers-reduced-motion: no-preference`: las dos líneas
  del titular suben una tras otra (máscara `overflow: hidden`, `--duration-reveal`, retardos
  `--delay-hero-start` y `--delay-hero-step`, `--mask-offset`) y la foto hace zoom de `--zoom-from` a 1
  en `--duration-zoom`. La foto nunca parte con opacidad 0 (retrasa el LCP).
- Todo lo demás solo responde a acciones (hover, foco, abrir, enviar) con `--duration-fast` o
  `--duration-base` y `--ease-out`. Sin entradas por scroll.

## Composición del hero (patrón a reutilizar)
- Móvil primero, apilado: foto completa arriba (`--ratio-hero-photo`) fundida hacia abajo a pino
  (`--hero-fade-v`); el texto sube sobre el fundido. Desde 48rem: foto a la derecha
  (`--hero-photo-width`), borde izquierdo fundido (`--hero-fade-from`/`--hero-fade-to`) y texto sobre
  la zona oscura, centrado en vertical; datos y botón circular abajo.
- Nav: logo a la izquierda y 4 enlaces a la derecha (`--text-xs`, mayúsculas); en móvil, `<details>`
  con panel `--bg-dark`. Va sobre la foto, protegido por el velo superior (`--hero-scrim-top`).
- Un solo foco visual: titular y foto. El CTA ámbar es lo único saturado.
- Breakpoints fijos: `48rem` y `72rem` (CSS no admite variables en `@media`). Única excepción a
  «sin valores sueltos», junto con `#000` en `mask-image` (es alfa, no color).

## Qué NO hacer
- Bricolage Grotesque, otras familias o pesos distintos de 300 en títulos.
- Valores sueltos (px, rem, ms, colores, sombras) en componentes; `--color-*` directo; texto en el markup.
- Los anti-patrones de `CLAUDE.md`: crema con serif y terracota, casi negro con acento fluorescente,
  gradientes decorativos (los velos de contraste sí valen), tarjetas idénticas, eyebrows fuera del hero,
  numeración 01/02/03, palabra resaltada en un titular, flecha en cada botón, emojis como íconos,
  fade-and-slide en cada sección, hover animado en cada tarjeta, fotos de stock o generadas.
- Más de un botón primario por pantalla, o un texto distinto de `booking.primaryCta`.
- Mostrar `null` o `TODO`; inventar precios, distancias, políticas o cifras.

## Ritmo de secciones (alternar oscuro y claro)
| Sección | Tono | Fondo | Texto |
|---|---|---|---|
| Hero | oscuro | `--bg-dark` | `--text-on-dark` |
| Tres pilares | claro | `--bg` | `--text` |
| Las cabañas | claro | `--bg-alt` | `--text` |
| Galería | oscuro | `--bg-dark` | `--text-on-dark` |
| Reseñas | claro | `--bg` | `--text` |
| La zona | oscuro | `--bg-dark` | `--text-on-dark` |
| Formulario | claro | `--bg-alt` | `--text` |
| Preguntas frecuentes | sin definir | proponer `--bg`; confirmar con el cliente | `--text` |
| Footer | oscuro | `--bg-dark` | `--text-on-dark` |
Pilares y cabañas son claras seguidas: se distinguen alternando `--bg` y `--bg-alt`. Los cortes entre
secciones son limpios, sin degradé decorativo. En oscuro valen las reglas del hero (`--line-on-dark`,
`--text-on-dark-muted`, velos si hay foto).

## Checklist por sección
- [ ] Todo el texto sale de `es.ts`; ningún `null` ni `TODO` visible.
- [ ] Sin valores sueltos: revisar con Grep (`px|rem|ms|#hex|rgb(|font-weight: [0-9]|--color-`).
- [ ] Tono según la tabla de ritmo y tokens semánticos del tono.
- [ ] Títulos en Cormorant 300, minúscula normal, línea menor a 75 caracteres, alineados a la izquierda.
- [ ] Formas: foto `--radius-photo`, controles pill, tarjetas no idénticas.
- [ ] Un foco visual; CTA ámbar solo si corresponde; sin anti-patrones.
- [ ] Texto sobre foto con AA medido (píxel más claro detrás del texto) y sin tapar la cabaña.
- [ ] Movimiento: solo respuestas a acciones; `prefers-reduced-motion` respetado.
- [ ] Foco visible, objetivos táctiles de `--tap-min`, `alt` descriptivo, `width` y `height` en fotos.
- [ ] Capturas en 375, 768 y 1280 px sin desborde horizontal ni palabras cortadas.
- [ ] `design-reviewer` sin desviaciones P0 ni P1 pendientes.

## Capturas (sin dependencias)
Con el sitio servido (`npm run build` y `npx astro preview`, o `astro dev --background`):
`msedge --headless=new --disable-gpu --hide-scrollbars --screenshot=<ruta>.png --window-size=<ancho>,<alto> --virtual-time-budget=4000 <url>`
(en Windows: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`). Tamaños: 375×812,
768×1024 y 1280×800. `--virtual-time-budget` deja terminar la secuencia del hero antes de capturar.
