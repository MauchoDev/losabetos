# Sección 2: Lo que destaca — brief de diseño (versión 2, ronda 2)

Reemplaza a `CABANAS-BRIEF.md` y a la versión 1 de este archivo. Tiene prioridad sobre `CLAUDE.md` en todo lo
que toque a esta sección. Usa la skill `los-abetos-design` y el subagente `design-reviewer` si existen.
Si no, lee el código del hero.
Referencia visual de la transición: `references/section2-ref-fern.png`.

## Qué cambió respecto a la versión 1
- El párrafo a la derecha del titular se reemplaza por el enlace «VER CABAÑAS» con flecha.
- La franja de 4 puntos pierde las líneas verticales y el texto largo, y gana iconos. Cada ítem va centrado en su propio eje.
- Las tarjetas de espacios pasan a ser tarjetas reales, con una elevación discreta. Se prueban dos variantes.
- Quedan permitidos: los 4 iconos de la franja y la sombra suave de las tarjetas. Antes estaban prohibidos.
- Se corrige la foto de la tarjeta «Living», que mostraba la de la cocina.
- «Y además» y el resto no cambian.
- Esta es la ronda 2 de 2. Al elegir la variante de tarjetas, la sección se congela.

## Regla n.º 1: el hero está congelado
No se modifica ni una línea del diseño del hero.
- No tocar el componente del hero, sus estilos, su nav, su copy, su foto ni su retoque.
- No cambiar el valor de ningún token existente. Si falta un valor, crear un token nuevo.
- Referencia: `references/approved/hero-antes-*.png`. Al terminar, capturar de nuevo y comparar.
  `git diff hero-congelado --stat` no debe mostrar cambios en archivos del hero.
- Si algo exige tocar el hero, detenerse y preguntar al cliente.
- Los enlaces del nav del hero apuntan a `#cabanas`, `#galeria`, `#zona` y `#reservar`. Esta sección lleva los ids
  `cabanas` (inicio de la sección) y `galeria` (inicio del bloque de tarjetas).
- Diferencia conocida y aceptada: el hero tiene botón en píldora y flecha circular. Se deja así.

## Qué tomamos de la referencia
- La transición tras el hero: una fila de 4 puntos destacados y después tarjetas con foto.
- Titular editorial arriba, línea fina y contenido en columnas.

## Qué NO tomamos
- Barra de reserva, esquinas redondeadas, sección oscura de bienestar ni precios.
- Iconos: solo los 4 de la franja. Se redibujarán propios cuando el logotipo esté definido.
- Sombras: solo la elevación discreta de las tarjetas.

## Lenguaje de formas (para todo lo que no sea el hero)
Las formas rectas dan elegancia y delicadeza: esquinas con radio 0 en botones, fotos, tarjetas y paneles.
- Tokens: `--radius-square: 0`, `--border-hairline: 1px solid var(--border)`.
- Tokens nuevos de elevación (solo para tarjetas):
  - `--shadow-card: 0 1px 2px rgb(20 40 31 / 0.06), 0 14px 32px -16px rgb(20 40 31 / 0.22)`
  - `--shadow-card-hover: 0 2px 4px rgb(20 40 31 / 0.08), 0 20px 40px -16px rgb(20 40 31 / 0.28)`
- Botón principal: fondo ámbar (el del hero, leerlo del código), texto en pino, mayúsculas pequeñas, tracking amplio.
  Hover: el fondo se oscurece, sin escala ni sombra.
- Botón secundario: contorno de 1 px en pino, fondo transparente. Hover: se rellena de pino.
- Controles de flecha: cuadrados, con borde de 1 px.
- Enlaces de texto: subrayado fino. Foco visible, también recto.

## Estructura de la página (5 secciones + footer)
1. Hero (congelado)
2. Lo que destaca (esta sección)
3. Reseñas (muro de citas)
4. La zona
5. Reservar (la ficha de precio vive aquí, antes del formulario)

## Composición
Fondo claro. Misma disposición que el hero: titular a la izquierda, enlace a la derecha, línea fina debajo.
```
[ LO QUE VAS A NOTAR   ]                         [ VER CABAÑAS  → ]
[ AL LLEGAR            ]                         (subrayado fino)
──────────────────────────────────────────────────────────────────
[  icono  ]   [  icono  ]   [  icono  ]   [  icono  ]    (sin líneas verticales)
[  título ]   [  título ]   [  título ]   [  título ]    (cada uno centrado en su propio eje)
[ 1 línea ]   [ 1 línea ]   [ 1 línea ]   [ 1 línea ]
──────────────────────────────────────────────────────────────────
[ tarjeta living ] [ tarjeta cocina y comedor ] [ tarjeta dormitorios ]
   nota de fotos
──────────────────────────────────────────────────────────────────
Y además: lista de dos columnas       [ CONSULTAR DISPONIBILIDAD ] [ VER TODAS LAS FOTOS ]
```
- Móvil (375 px): franja en 2 columnas o en una, tarjetas apiladas, botones a ancho completo.

### Enlace «VER CABAÑAS»
- Mayúsculas pequeñas con tracking, como el nav. Flecha fina dibujada en SVG (no un carácter de texto).
- Subrayado de 1 px con separación de 8 px. Alineado a la derecha y a la base del titular. Lleva a `#galeria`.
- Hover: la flecha se desplaza 4 px. Respetar `prefers-reduced-motion`.

### Franja de 4 puntos
- Sin tarjetas, sin fondos y sin líneas verticales. Cada ítem centrado en su propio eje.
- Icono arriba, título en serif y una sola línea de texto de máximo 5 palabras.
- Iconos de Lucide, copiados como SVG a `src/assets/icons/` (sin instalar la librería): `tree-pine`, `map-pin`,
  `bed-double`, `cooking-pot`. Trazo de 1,25 px, `stroke-linecap: square`, `stroke-linejoin: miter`, 30 px,
  color pino. Si tras esta ronda la franja no convence, se elimina y se pasa directo a las tarjetas.

### Tarjetas: dos variantes, seleccionables con `?tarjetas=a` y `?tarjetas=b`
Comunes: radio 0, fondo `--bg-raised`, borde `1px solid rgb(20 40 31 / 0.06)`, `--shadow-card`, separación de
32 px entre tarjetas, mismo alto, y toda la tarjeta abre la vista ampliada. En hover cambia solo la sombra
(`--shadow-card-hover`) y la tarjeta no se mueve.
- A, foto a sangre: la foto ocupa el borde superior de la tarjeta y el texto va debajo con relleno de 28 px.
- B, foto enmarcada: la tarjeta tiene 16 px de relleno alrededor de la foto, como una copia montada, y el texto va debajo.
Si la tarjeta blanca casi no se distingue del lienzo, oscurecer un poco el fondo de la sección con un token existente,
no aumentar la sombra. Al elegir variante, se borra la otra y se retira el parámetro `?tarjetas`.

## Copy (es.ts)
- `title`: "Lo que vas a notar al llegar" (sin cambios)
- `viewCabins`: "Ver cabañas"
- `intro`: se conserva en `es.ts` (se usa para SEO) pero ya no se muestra en esta sección.
- `highlights` (título / línea):
  1. "Entre pinos" / "Privacidad y silencio"
  2. "A 10 minutos del centro" / "Lago a unos 20 minutos" // TODO: confirmar los 20 minutos
  3. "Impecables por dentro" / "Limpias y bien cuidadas"
  4. "Con todo para quedarte" / "Cocina completa y WiFi rápido"
- `spaces`:
  - "Living" — "Luminoso, con futón-cama, TV y vigas de madera a la vista."
  - "Cocina y comedor" — "Equipada, con isla y bancos."
  - "Dormitorios" — "Uno matrimonial y otro con dos camas. Ropa de cama incluida."
- `alsoTitle` y `also`: sin cambios («Y además»: Terraza, Parrilla, Estacionamiento, Baño con agua caliente,
  Ropa de cama incluida, TV e internet rápido).
- `photoNote`: "Las fotos corresponden a una de las cabañas; la otra es idéntica." // TODO: confirmar
- Botones: `booking.primaryCta` y "Ver todas las fotos"

## Fotos
- Tarjetas: `living.jpg` debe ser el original `IMG-20260415-WA0026.jpg` (living con macramé y sillón azul),
  `comedor-cocina.jpg` debe ser el original `cocina.jpg`, y `dormitorio-matrimonial.jpg` el original `3_cama_2_plazas.jpg`.
  Verificar que ninguna tarjeta repita foto.
- Vista ampliada con `<dialog>`: `living`, `comedor-cocina`, `dormitorio-matrimonial`, `dormitorio-dos-camas`,
  `bano`, con teclado, foco atrapado y pie de foto. Un clic en la tarjeta abre la foto correspondiente.
- Mismo preset de retoque que el hero. Ninguna foto se muestra por encima de su resolución real.

## Movimiento
Sin animaciones de entrada. Permitidos solo: el cambio de color de los botones, el desplazamiento de 4 px de la flecha
del enlace y el cambio de sombra de las tarjetas en hover. Respetar `prefers-reduced-motion`.

## Crítica antes de mostrar
- Capturas en 375, 768 y 1280 px, comparadas con el hero (`design-reviewer`).
- Comprobar: el hero no cambió; no hay esquinas redondeadas fuera del hero; los únicos iconos son los 4 de la franja;
  las únicas sombras son las de las tarjetas; las tarjetas se distinguen del lienzo sin verse pesadas; las tres tienen
  el mismo alto; ninguna foto se repite; solo se usan tokens.
- La transición desde el hero se siente continua: misma tipografía, mismo ámbar y mismas líneas finas.

## Definición de listo
- [ ] Hero idéntico al de `hero-antes-*` (sin cambios en `git diff`).
- [ ] Ids `cabanas` y `galeria` funcionando desde el nav del hero.
- [ ] Contenido completo desde `es.ts`, sin `null` visibles.
- [ ] Vista ampliada probada con teclado y en móvil.
- [ ] Una variante de tarjetas elegida, la otra eliminada y el parámetro `?tarjetas` retirado.
- [ ] Aprobado por el cliente. Es la última ronda: lo que quede va a `BACKLOG.md`.