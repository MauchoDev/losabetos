---
name: los-abetos-design
description: Estilo visual aprobado de Cabañas Los Abetos (Astro, tokens.css, es.ts). Úsala siempre que se cree o modifique una sección, componente, estilo, token, foto o animación del sitio, y antes de revisar capturas. Define tokens, patrones, ritmo oscuro/claro y checklist; el hero es el ejemplo canónico.
---

# Estilo Los Abetos

El hero es el estilo aprobado y el ejemplo canónico: `src/components/Hero.astro` y sus partes en
`src/components/hero/`. Capturas aprobadas en `src/references/approved/` (`hero-375.png`,
`hero-768.png`, `hero-1280.png`, `hero-375-menu.png`). Inspiración original:
`src/references/hero-ref-cabin-wild.png.webp`. `hero-brief.md` es histórico: manda esta skill.
**El hero está congelado:** no se toca su componente, sus estilos, su nav, su copy, su foto ni el valor de ningún
token existente (si falta un valor, se crea un token nuevo). Control: `src/references/approved/hero-antes-375.png`
y `hero-antes-1280.png`, y `git diff` sin cambios en `Hero.astro` ni `hero/`.
`DESTACADOS-BRIEF.md` (Lo que destaca) manda sobre esta skill y sobre `CLAUDE.md` en lo que toque a su sección.
Si el brief de otra sección contradice esta skill, no decidir solo: preguntar.

## Antes de escribir código
1. Leer `CLAUDE.md`, esta skill y las partes del hero parecidas a lo que se va a construir.
2. Texto en `src/content/es.ts`. Valores visuales en `src/styles/tokens.css`. Si falta un token se
   agrega ahí, con comentario; nunca un número o color suelto en el componente.
3. Si la sección lleva un titular con enlace, una franja de íconos, tarjetas con foto, una lista con líneas finas o
   botones, se parte de los «Patrones aprobados de la sección 2» (más abajo) en vez de diseñarlos de nuevo.
4. Al terminar: capturas en 375, 768 y 1280 px y revisión con el agente `design-reviewer`.

## Ritmo de secciones (alternar oscuro y claro)
| # | Sección | Tono | Fondo | Texto | Ancla |
|---|---|---|---|---|---|
| 1 | Hero | oscuro | `--bg-dark` | `--text-on-dark` | `#inicio` |
| 2 | Lo que destaca | claro | `--bg-alt` | `--text` | `#cabanas` (inicio) y `#galeria` (bloque de espacios con fotos) |
| 3 | Reseñas | oscuro | `--bg-dark` | `--text-on-dark` | `#resenas` |
| 4 | La zona | claro | `--bg` | `--text` | `#zona` |
| 5 | Reservar | oscuro | `--bg-dark` | `--text-on-dark` | `#reservar` |
| – | Footer | claro | `--bg-alt` | `--text` | `#footer` |
- El tono del footer no lo definió el cliente: sigue la alternancia (claro tras Reservar oscuro).
- Los cortes entre secciones son limpios, sin degradé decorativo.
- `--bg-alt` es para superficies dentro de una sección clara (fichas, paneles), no para el fondo. Excepción: Lo que
  destaca lo usa de fondo (ronda 2) para que las tarjetas blancas se separen del lienzo: sobre `--bg` la razón
  era 1,07:1 y sobre `--bg-alt` sube a 1,16:1, sin más sombra. Si otra sección clara lleva tarjetas blancas, vale lo mismo.
- En oscuro valen las reglas del hero: `--line-on-dark`, `--text-on-dark-muted`, velos si hay foto.

## Color (semánticos; nunca `--color-*` en componentes)
- Oscuro: fondo `--bg-dark` (pino-900, `#0f2a24`), texto `--text-on-dark`, secundario
  `--text-on-dark-muted`, líneas finas `--line-on-dark` (niebla al 35 %).
- Claro: fondo `--bg`, texto `--text`, secundario `--text-muted`, bordes `--border`. Líneas finas
  (par de `--line-on-dark`): `--line-on-light`; `--border` es demasiado tenue sobre niebla. Panel o
  ficha con relleno: `--bg-panel` (salvia suave). Tarjeta elevada con foto: `--bg-raised` (blanco) con borde
  `--border-width` en `--line-card` y la sombra `--shadow-card` (ver Formas).
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
- Mayúsculas y eyebrow: excepción aprobada para el hero (titular, nav y eyebrow). Lo que destaca suma las
  mayúsculas en el titular de sección y en el texto de los botones (lo pide su brief), pero sin eyebrow. En el
  resto, minúscula normal y sin eyebrow. Los subtítulos (h3) van siempre en serif y en minúscula normal.
- Títulos de sección: token `--step-section` (= `--text-2xl`), medido en Lo que destaca: 31, 41 y 53 px a
  375, 768 y 1280, siempre menos que el hero (38, 50 y 75). `--text-3xl` pasa al hero a 1280: no usarlo.
  Lo que destaca (ronda 1, sin aprobar por el cliente) lo pone en mayúsculas, con el mismo estilo del hero,
  porque su brief lo pide. Queda por confirmar si Reseñas, La zona y Reservar siguen igual; hasta entonces la
  excepción de mayúsculas de arriba es solo del hero y de Lo que destaca.
- Cormorant trae cifras de estilo antiguo (el «1» parece una «ı»): todo título o cifra con números lleva
  `font-variant-numeric: lining-nums` (el hero no tiene cifras y no se toca `global.css`).
- Subtítulos dentro de una sección (puntos, tarjetas, «Y además»): `--text-xl`; solo los 4 puntos en fila
  (desde 76rem) bajan a `--text-lg`. Cormorant 300 pesa poco: a 375 y 768 el título del punto debe leerse
  claramente mayor que su texto (medido 26,9 px sobre 14,5 px a 768). Excepción documentada: el título de las
  tarjetas de foto baja a `--text-lg` entre 48 y 76rem, donde las 3 tarjetas miden ~210 px y «Cocina y comedor» no
  cabe en una línea con `--text-xl`.
- Cortes de línea: espacio duro (`\u00a0` en `es.ts`) donde un corte confunde, por ejemplo «vas a\u00a0notar» en
  el titular y «10\u00a0minutos»; `text-wrap: balance` en titulares y `pretty` en textos cortos.

## Formas, espacio y controles
- **Formas rectas fuera del hero.** Las esquinas rectas dan elegancia y delicadeza: radio 0
  (`--radius-square`) en botones, fotos, tarjetas, paneles, campos y controles. La jerarquía la dan las líneas
  finas: `--line-on-light` (estructura), `--border-hairline` (`1px solid var(--border)`, filas de listas) y
  `--line-on-dark`.
- **Elevación discreta: permitida SOLO en tarjetas** (`--shadow-card`; al pasar el cursor `--shadow-card-hover`,
  y solo cambia la sombra: la tarjeta no se mueve ni se escala). Ningún otro elemento lleva sombra: ni botones, ni
  fotos sueltas, ni paneles, ni la ficha de precio. Una tarjeta es `--bg-raised`, radio 0, borde de 1 px en
  `--line-card`, mismo alto que sus vecinas, y toda ella es el área de clic.
- **Íconos:** solo los de Lucide copiados a `src/assets/icons/` (ISC, con su licencia; sin instalar la
  librería) e inlinados con `?raw`: `tree-pine`, `map-pin`, `bed-double`, `cooking-pot`, `arrow-right` y
  `arrow-left` (las flechas del visor y la del enlace «Ver cabañas»). Trazo
  `--stroke-lucide` (1,25), `stroke-linecap: square`, `stroke-linejoin: miter`, pino (`currentColor`), 30 px
  (`--icon-size-lg`; la flecha del enlace, `--icon-size-sm`). Los atributos del SVG original (trazo 2, round) los
  pisa el CSS. Un ícono nuevo se copia igual; el set propio llegará con el logotipo. No se dibuja una X para cerrar.
- Lo único redondo es el hero (botón en píldora y flecha circular): diferencia conocida y aceptada. No se copia
  fuera de él. `--radius-photo`, `--radius-chip`, `--radius-pill` y `--shadow-sm/md/lg` quedan reservados y sin
  uso en las demás secciones; no se cambian sus valores.
- Botón (`src/components/ui/Button.astro`, `variant`): principal con fondo `--cta-bg` (el ámbar del hero) y
  texto `--cta-text` (pino), `--text-xs`, mayúsculas, `--tracking-caps`, `--weight-strong`, relleno
  `--space-8`, alto `--control-lg`; hover: `--cta-bg-hover`, sin escala ni sombra. Secundario: contorno de
  `--border-width` en `--text` (pino) y fondo transparente; hover: se rellena de pino con texto
  `--text-on-dark` (solo sobre fondo claro). En móvil, `wide` los lleva a ancho completo. Solo cambia el
  color (`--duration-fast`).
- Controles de flecha (visor): cuadrados de `--control-square` (48 px) con borde de `--border-width`, no
  circulares; trazo `square` y `miter`. «Cerrar» es un botón de texto (mayúsculas pequeñas) del mismo alto: no
  se dibuja una X, porque fuera de las flechas no hay íconos. Hover del visor: `--text-on-dark` con texto
  `--bg-dark`.
- Enlaces de texto: subrayado fino (`text-decoration-thickness: var(--border-width)`, `--underline-offset`),
  como el hero. Foco visible, también cuadrado (el contorno global sigue el radio 0).
- Enlace de encabezado «Ver cabañas» (`HighlightsHead.astro`): a la derecha del titular y en su base (se alinea
  con el último renglón, medido ±1 px a 768 y 1280); mayúsculas, `--text-xs` y `--tracking-caps` como el nav del
  hero; subrayado de `--border-width` con offset `--space-2` (8 px) solo bajo el texto; flecha SVG
  (`arrow-right`, `--icon-size-sm`) después. Hover: la flecha se corre `--arrow-nudge` (4 px), solo dentro de
  `prefers-reduced-motion: no-preference`; con `reduce` no se mueve y el aviso de hover es el subrayado, que se
  engrosa al doble. El SVG de Lucide deja ~4 px vacíos a la derecha: un margen negativo hace que la PUNTA de la
  flecha caiga en el borde del contenedor (medido ±1,5 px). En tablet el titular ocupa 8 columnas (2 líneas) y
  desde 76rem, 6. En móvil el enlace va debajo del titular, a la izquierda. `#galeria` lleva `scroll-margin-top`
  de `--space-12` para que las tarjetas no queden pegadas al borde al llegar.
- Grilla: `.container` (`--container` 76rem, `--gutter`), una columna alineada a la izquierda; sin
  grilla de 12 columnas en el hero. Secciones: `.section` (`padding-block: var(--section-y)`).
- Espaciado solo con `--space-*`. Hero: bloques a `--space-8` y `--space-12`, titular a `--space-6`.
- Todo control mide al menos `--tap-min` de alto (logo, menú, enlaces de texto incluidos).
  Botón principal y circular: `--control-lg`.
- Botón primario del hero: `<a>` pill ámbar, `--weight-strong`, `padding-inline: var(--space-8)`, texto
  `booking.primaryCta`, sin flecha. Fuera del hero el primario es recto (ver arriba). Secundarios de
  reserva: enlaces de texto subrayados (`--underline-offset`), Airbnb y luego Booking, en `--text-sm`.
- Botón circular (solo hero, baja a `#cabanas`): `--radius-pill` sobre un cuadrado de `--control-lg`,
  borde `--line-on-dark`, flecha SVG con `--stroke-icon`; en hover se llena de `--text-on-dark`.
- Fila de datos: 3 columnas iguales bajo una línea fina `--line-on-dark`, sin números.
- Campos de formulario: sin aprobar. La sección Reservar (oscura) fija el canon con las reglas de
  arriba: formas rectas (`--radius-square`), `--tap-min`, bordes `--line-on-dark`, foco `--focus-ring`.
- Ficha de precio: `src/components/booking/PricePanel.astro`, recta y SIN USAR hasta que se construya
  Reservar (va antes del formulario). Su texto vive en `es.booking.panel`.

## Patrones aprobados de la sección 2 (reutilizar)
Aprobados por el cliente el 27 de octubre de 2026 (sección 2, v1, etiqueta `seccion2-v1`). Una sección nueva parte de
ellos con otro texto en `es.ts` y los mismos tokens; no se reinventan ni se cambian sus medidas sin acuerdo. El código
está en `src/components/highlights/` y `src/components/ui/`: se copia y se renombra. Aún no hay versión genérica y no se
abstrae hasta que una segunda sección los pida. Capturas: `src/references/destacados-ronda2/variante-b-*.png`
(el estado aprobado; el nombre es de la ronda en que había dos variantes).

### 1. Titular con enlace «VER … →» (`HighlightsHead.astro`)
- Cuándo: encabezado de una sección clara con un único destino interno. No lleva párrafo al lado.
- Titular: `h2` en `--step-section`, mayúsculas, `text-wrap: balance`; columnas 1–8 en tablet y 1–6 desde 76rem.
- Enlace: columnas 9–12, a la derecha; `--text-xs`, mayúsculas y `--tracking-caps` (igual que el nav del hero);
  subrayado de `--border-width` con offset `--space-2` (8 px) solo bajo el texto; flecha `arrow-right` de Lucide
  (`--icon-size-sm`) después, con `margin-inline-end: calc(var(--icon-size-sm) * -0.2)` para que la PUNTA quede en el
  borde del contenedor; `padding-block: var(--space-4)` (objetivo táctil de 52 px).
- Alineación: `align-items: last baseline` (respaldo `end`) pone la base del enlace sobre la del último renglón del
  titular (medido ±1 px a 768 y 1280). Debajo de 48rem el enlace va bajo el titular, a la izquierda.
- Hover: la flecha se corre `--arrow-nudge` (4 px) solo con `prefers-reduced-motion: no-preference`; con `reduce`
  no se mueve y el subrayado se engrosa al doble. El texto sale de `es.ts` y el destino es un ancla de la misma página.

### 2. Franja de íconos centrados (`HighlightsPoints.astro`)
- Cuándo: 3 o 4 datos cortos que se leen de un vistazo. Si el texto no cabe en una línea a 375 px, se acorta.
- Cada ítem, centrado en su propio eje: ícono de Lucide (30 px `--icon-size-lg`, trazo `--stroke-lucide`, square y
  miter, pino; archivo en `src/assets/icons/` importado con `?raw`; el CSS pisa los atributos del SVG), `h3` en serif y
  UNA línea de `--text-sm` en `--text-muted`. Datos en `es.ts` (`icon`, `title`, `text`). El ícono lleva
  `margin-bottom: var(--space-3)` y el ítem `gap: var(--space-2)`.
- Título `--text-xl`, y `--text-lg` desde 76rem (4 columnas). Con cifras, `font-variant-numeric: lining-nums` y espacio
  duro entre número y unidad.
- Líneas: `--line-on-light` arriba y abajo de la fila, y entre filas en móvil (1 columna) y tablet (2 × 2). Nunca
  verticales. Desde 76rem, 4 columnas iguales (`column-gap: var(--space-8)`) sin ninguna línea entre ellas.
  `padding-block`: `--space-6` en móvil y `--space-8` desde 48rem.
- CSS: `li + li` pesa más que `li:nth-child(n + 3)`; por eso la tablet y el escritorio usan `li + li:nth-child(n + 3)`
  y cada ancho deshace lo del anterior. Se comprueba con el estilo calculado, no solo a ojo.
- Estado: el cliente aún debe decidir si la franja se queda (BACKLOG); la sección no depende de ella.

### 3. Tarjeta con elevación discreta (`HighlightsSpaces.astro`)
- Receta: `--bg-raised` (blanco), radio 0, borde `--border-width` en `--line-card`, `--shadow-card` y, al pasar el
  cursor, `--shadow-card-hover` con `transition: box-shadow var(--duration-fast) var(--ease-out)`. La tarjeta no se
  mueve ni se escala. La sombra existe SOLO en tarjetas.
- Marco: `padding: var(--space-4)` (16 px) alrededor de la foto, como una copia montada; el texto va debajo, dentro de
  la misma tarjeta, sin relleno lateral propio (arranca en el borde de la foto) y con `padding: var(--space-6) 0
  var(--space-2)`, `gap: var(--space-3)`.
- Foto: `aspect-ratio: var(--ratio-card-photo)` (4/3), `object-fit: cover`, `--photo-hero-filter`, radio 0. Las
  tarjetas de una fila miden lo mismo (la rejilla las estira); el enlace baja con `margin-top: auto`.
- Rejilla: `gap: var(--space-8)`; 1 columna (con `max-width: var(--photo-max-width)`) y 3 desde 48rem. Título
  `--text-xl`; entre 48 y 76rem (tarjetas de ~210 px) `--text-lg`. Texto `--text-sm`, `--text-muted`, `text-wrap: pretty`.
- Clic: el enlace «Ver fotos» extiende su área con `::after { position: absolute; inset: 0 }` (la tarjeta es
  `position: relative`); toda la tarjeta es el área de clic, así que el enlace no lleva `min-height`. Un solo punto de
  foco, y el contorno de foco rodea la tarjeta entera (`.card:has(.more:focus-visible)` dentro de
  `@supports selector(:has(*))`).
- Fondo de la sección: `--bg-alt`. Sobre `--bg` la tarjeta blanca casi no se distingue (1,07:1); sobre `--bg-alt`
  sube a 1,16:1, sin más sombra.
- Palabras con guion («futón-cama»): `nowrap` (`keepHyphenated`); no se usa U+2011 porque Hanken Grotesk no lo trae.

### 4. Lista con líneas finas (`HighlightsAlso.astro`)
- Cuándo: comodidades o datos secundarios en lista, sin viñetas ni íconos.
- `h3` en serif (`--text-xl`) y una `ul` de 2 columnas iguales (`column-gap` `--space-6`, y `--space-8` desde 48rem). Cada
  `li`: `padding-block: var(--space-4)`, `border-top: var(--border-hairline)`; la `ul` cierra con `border-bottom:
  var(--border-hairline)`. Texto `--text-sm`, `--leading-snug`, color `--text`. Sin descripciones largas.
- El bloque se separa del anterior con `--line-on-light` (borde superior) y `padding-top: var(--space-12)`. Desde
  76rem la lista ocupa las columnas 1–5 y los botones van a la derecha (columnas 6–12, alineados al final); debajo
  de 76rem, los botones van bajo la lista.
- Las filas usan `--border-hairline` (decorativo, ~1,16:1 sobre `--bg-alt`): se leen apenas. Si hay que reforzarlas,
  `--line-on-light` (queda al peso de la línea estructural).

### 5. Botones rectos (`ui/Button.astro`)
- `<Button href="…">` es un enlace; sin `href`, un `<button type="button">` (por ejemplo para abrir la vista ampliada).
  `variant="primary"` (por defecto) o `"secondary"`; `wide` lo lleva a ancho completo en móvil. El texto va en el slot
  y sale de `es.ts`; el CSS lo pone en mayúsculas.
- Medidas: alto `--control-lg` (55 px), `padding-inline: var(--space-8)`, `--text-xs`, `--tracking-caps`,
  `--weight-strong`, borde de `--border-width`, radio 0. Primario: `--cta-bg` y `--cta-text` (contraste 7,07:1; hover
  `--cta-bg-hover`, 5,65:1). Secundario: contorno y texto en `--text`, fondo transparente; hover se rellena de `--text`
  con texto `--text-on-dark`.
- Solo el color cambia en hover (`--duration-fast`); sin escala ni sombra. Un solo primario por pantalla, con el texto
  de `booking.primaryCta`. El secundario es solo para fondos claros: en una sección oscura hará falta una variante nueva.
- La ficha de precio (`booking/PricePanel.astro`) usa este botón y está guardada sin usar para Reservar.

## Fotos
- `<Picture>` de `astro:assets` (avif y webp), `width`/`height` y `alt` del slot en `es.ts`. La del
  hero lleva `priority`; las demás `loading="lazy"`.
- Retoque provisorio: `--photo-hero-filter` (saturación 0,85, brillo 0,85). Úsalo en todas hasta
  tener el original retocado.
- Tarjetas de foto (Lo que destaca): ver el patrón 3 de «Patrones aprobados». En una columna, el ancho máximo es
  `--photo-max-width` (la mitad del archivo más chico) para no pasar de la resolución real ni en pantallas ×2. Se
  mide el archivo servido, no `naturalWidth` (con `srcset` y `sizes` ese valor viene en px CSS).
- Qué foto es cuál: `living.jpg` = `IMG-20260415-WA0026.jpg` (1600×1200, el living con macramé, futón y
  sillones); `cocina.jpg` = el `cocina.jpg` original (isla y banquetas; el brief la llama `comedor-cocina.jpg`).
  Hasta la ronda 1 `living.jpg` era `living cocina.jpg`, otra foto de la cocina: se comprueba por hash, no por el nombre.
- Vista ampliada (`HighlightsViewer.astro`): un `<dialog>` modal con las 5 fotos (`viewerOrder` en
  `highlights/photos.ts`). Cada disparador lleva `data-viewer-open="clave"` y abre en esa foto: «Ver fotos» de
  cada tarjeta (el botón extiende su área a toda la tarjeta con `::after`, un solo punto de foco) y «Ver todas
  las fotos». Cerrar, anterior y siguiente, Esc y flechas, foco atrapado, el foco vuelve al disparador, pie de
  foto. Sin transiciones. Tope de resolución: píxeles del archivo ÷ `devicePixelRatio` (`--cap-w` y `--cap-h`,
  que pone el script al abrir cada foto): en una pantalla ×2 una foto de 1280 px no pasa de 640 px CSS.
- Tarjeta de foto clicable: «Ver fotos» extiende su área a toda la tarjeta (`::after`), así que el área de clic
  es la tarjeta entera y el enlace no lleva `min-height` de `--tap-min` (solo agregaba aire muerto). El hover solo
  cambia la sombra y el foco de teclado rodea la tarjeta entera con el contorno global, que sigue el radio 0.
- Palabras con guion («futón-cama»): no usar U+2010 ni U+2011, Hanken Grotesk no los trae y el navegador los
  dibuja con otra fuente. Se envuelven en un `nowrap` (ver `keepHyphenated` en `HighlightsSpaces.astro`).
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
- Excepciones a «sin valores sueltos»: los breakpoints `48rem` y `76rem` (= `--container`, donde los 4 puntos
  pasan a una fila y «Y además» se pone junto a los botones); CSS no admite variables en `@media`,
  `#000` en `mask-image` (es alfa), `sizes` y `widths` de `<Picture>` (el `70vw` copia
  `--hero-photo-width`) y valores estructurales (`0`, `100%`, `auto`, `1fr`, `repeat(3, …)`).

## Qué NO hacer
- Bricolage Grotesque, otras familias o pesos distintos de 300 en títulos.
- Valores sueltos (px, rem, ms, colores, sombras, z-index) en componentes; `--color-*` directo; texto
  en el markup.
- Los anti-patrones de `CLAUDE.md`: crema con serif y terracota, casi negro con acento fluorescente,
  gradientes decorativos (los velos de contraste sí valen), tarjetas idénticas (salvo las 3 de Lo que destaca,
  que su brief pide del mismo alto y con la misma elevación), eyebrows fuera del
  hero, numeración 01/02/03, palabra resaltada en un titular, flecha en cada botón, emojis como
  íconos, fade-and-slide en cada sección, hover animado en cada tarjeta, fotos de stock o generadas.
- Más de un botón primario por pantalla, o un texto distinto de `booking.primaryCta`.
- Mostrar `null` o `TODO`; inventar precios, distancias, políticas o cifras.
- Agregar secciones fuera de la tabla de ritmo (Pilares, Galería y Preguntas frecuentes salieron de v1).
- Esquinas redondeadas fuera del hero; sombras fuera de las tarjetas; íconos que no sean de Lucide copiados a
  `src/assets/icons/`; modificar el hero o el valor de un token existente.

## Checklist por sección
- [ ] Todo el texto sale de `es.ts`; ningún `null` ni `TODO` visible.
- [ ] Sin valores sueltos. Grep: `[0-9.]+(px|rem|em|ms|vw)\b|#[0-9a-f]{3,8}\b|rgba?\(|font-weight: *[0-9]|--color-|z-index: *[0-9]`.
- [ ] Tono según la tabla de ritmo y tokens semánticos del tono; el vecino tiene el tono opuesto.
- [ ] Títulos en Cormorant 300, minúscula normal, línea menor a 75 caracteres, alineados a la izquierda.
- [ ] Formas rectas: `--radius-square` en fotos, botones, tarjetas y paneles; sombra solo en tarjetas
      (`--shadow-card`); íconos solo de Lucide en `src/assets/icons/`; el hero no cambió (capturas
      `hero-antes-*` idénticas y `git diff` limpio en `Hero.astro` y `hero/`).
- [ ] Un foco visual; CTA ámbar solo si corresponde; sin anti-patrones.
- [ ] Texto sobre foto con AA medido (píxel más claro detrás del texto) y sin tapar la cabaña.
- [ ] Movimiento: solo respuestas a acciones; `prefers-reduced-motion` respetado.
- [ ] Foco visible, objetivos de `--tap-min` de alto, `alt` descriptivo, `width` y `height` en fotos.
- [ ] Capturas en 375, 768 y 1280 px sin desborde horizontal ni palabras cortadas.
- [ ] Líneas finas por ancho comprobadas con el estilo calculado, no solo a ojo: una regla `li + li` le gana en
      especificidad a `li:nth-child(n + 3)` y una línea puede desaparecer sin que la captura lo delate.
- [ ] `design-reviewer` sin desviaciones P0 ni P1 pendientes.

## Capturas (sin dependencias)
Con el sitio servido (`npm run build` y `npx astro preview`, o `astro dev --background`):
`msedge --headless=new --disable-gpu --hide-scrollbars --screenshot=<ruta>.png --window-size=<ancho>,<alto> --virtual-time-budget=4000 <url>`
(Windows: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`). Tamaños: 375×812,
768×1024 y 1280×800. `--virtual-time-budget` deja terminar la secuencia del hero antes de capturar.
