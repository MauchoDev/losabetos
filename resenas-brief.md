# Sección 3: Reseñas — brief de diseño (versión 3, última corrección)

Reemplaza a las versiones anteriores. Tiene prioridad sobre `CLAUDE.md` en todo lo que toque a esta sección. Usa la skill
`los-abetos-design` y el subagente `design-reviewer` si existen. Referencias visuales (estructura de tarjeta, sin
redondeos ni degradados): `references/resenas-ref-1.png` y `references/resenas-ref-2.png`.

## Qué cambió respecto a la versión 2
- Se eliminan los avatares con inicial y el campo `avatar` de `es.ts`. Las tarjetas ya no llevan imagen de perfil.
- El pie de la tarjeta se reorganiza (nombre, procedencia y fecha) y se reajustan relleno y alturas.
- El botón final se prueba en dos versiones: ámbar relleno y más discreto (A), o enlace con subrayado en ámbar (B).
- Esta es la última ronda de la sección. Al elegir el botón, se congela.

## Reglas congeladas
- El hero y la sección 2 no se tocan. No cambiar el valor de ningún token existente; si falta uno, crear uno nuevo.
- `git diff hero-congelado --stat` y `git diff seccion2-v1 --stat` no deben mostrar cambios en sus archivos.
- Si algo exige tocarlos, detenerse y preguntar al cliente.

## Modo layout
El cliente acepta un 7 sobre 10; el pulido va a la pasada global. Sin extras ni variantes más allá de las dos del botón.

## Decisiones sobre los datos
- Sin widget ni plugin: las reseñas se escriben a mano en `es.ts`.
- Estrellas: sí, una fila de 5 por reseña (las capturas de Airbnb del cliente muestran 5 estrellas en cada una).
- Promedio y número total de reseñas: solo si el cliente entrega el dato de su anuncio. Si `rating` y `count` son `null`, no se muestra nada.
- Sin avatares ni fotos de perfil. No descargar ni enlazar imágenes de Airbnb.

## Fondo y estilo
- Fondo oscuro con el verde pino del hero (leer el token del código). Texto en niebla. Formas rectas (radio 0).
- Tokens ya creados: `--surface-on-dark`, `--border-on-dark`, `--shadow-card-dark`. No cambiar sus valores.

## Composición
```
[ LO QUE DICEN     ]                              [ VER TODAS EN AIRBNB → ]
[ SUS HUÉSPEDES    ]
──────────────────────────────────────────────────────────────────────────
[ tarjeta 1 ][ tarjeta 2 ][ tarjeta 3 ]
[ tarjeta 4 .......... ][ tarjeta 5 .......... ]
──────────────────────────────────────────────────────────────────────────
[ botón final: versión A o B ]
```
- Cuadrícula de 6 columnas: 3 tarjetas arriba (2 columnas cada una) y 2 abajo (3 columnas cada una). Separación de 24 px.
  Mismo alto dentro de cada fila, sin huecos vacíos.
- Móvil (375 px): una columna, tarjetas apiladas, botón a ancho completo.

## Tarjeta (sin avatar)
- Relleno de 24 px. Contenido de arriba abajo:
  1. Cinco estrellas en SVG, de 14 px, color ámbar (el del hero), separación de 2 px. `aria-label`: «5 de 5 estrellas».
  2. Texto: fuente del cuerpo, 16 px, interlínea 1,6, niebla al 90 %, máximo 4 líneas y ancho máximo de línea de 52 caracteres.
  3. Pie anclado al fondo de la tarjeta (`margin-top: auto`), para que los nombres queden alineados en cada fila:
     línea fina de `rgb(237 241 238 / 0.08)` arriba, 16 px de espacio, nombre en 14 px (niebla) y debajo procedencia y
     fecha en 13 px (niebla al 60 %). Si no hay procedencia, solo la fecha.
- Espacio de 16 px entre las estrellas y el texto, y de 24 px entre el texto y el pie.
- Sin hover, sin animaciones y sin sombras más fuertes que `--shadow-card-dark`.

## Botón final: dos versiones seleccionables con `?cta=a` y `?cta=b`
- A, relleno y más discreto: ámbar (el del hero), texto en pino, mayúsculas de 12 px con tracking, relleno de 14 px por
  26 px, radio 0. Hover: el fondo se oscurece.
- B, enlace: sin fondo, texto en ámbar en mayúsculas pequeñas con tracking (como el nav), la misma flecha SVG fina del
  enlace «VER TODAS EN AIRBNB →», subrayado de 1 px en ámbar con 8 px de separación. Alineado a la izquierda.
  Hover: la flecha se desplaza 4 px. Respetar `prefers-reduced-motion`.
- Texto en ambas: `booking.primaryCta`. Al elegir una, se borra la otra y se retira el parámetro `?cta`.

## Copy (`reviews` en `es.ts`; sin cambios salvo quitar `avatar`)
- `title`: "Lo que dicen sus huéspedes" (en dos líneas)
- `linkLabel`: "Ver todas en Airbnb" → `booking.airbnbUrl` // TODO: link al anuncio
- `rating`: `null` // TODO: promedio que muestra el anuncio de Airbnb
- `count`: `null` // TODO: número de reseñas del anuncio
- `items` (textos exactos, cortados solo al final de una oración; cada uno con `stars: 5`):
  1. Nicole, Punta Arenas, Chile, enero de 2025:
     "Excelente estadía, todo muy limpio, cercano a la ciudad pero al mismo tiempo alejado del ruido"
  2. Constanza, Antofagasta, Chile, noviembre de 2024:
     "Lugar hermoso e impecable. Cuidaron hasta el último detalle de la cabaña."
  3. Ricardo, Chillán, Chile, febrero de 2024:
     "El lugar muy tranquilo y privado. La cabaña impecable, todo limpio, ordenado y espacioso."
  4. Laura, septiembre de 2025 (sin procedencia):
     "La cabaña preciosa, limpia, con detalles muy cuidados y todo lo necesario para una estadía cómoda."
  5. Analia, Bella Vista, Argentina, febrero de 2025:
     "Hermoso alojamiento y la atención. Y la amabilidad de Romina impecable."
- `from` es opcional: si es `null`, no se muestra. Solo se muestran nombre de pila, procedencia y mes y año. // TODO: confirmar con el cliente

## Crítica antes de mostrar
- Capturas de las dos versiones del botón en 375, 768 y 1280 px, comparadas con el hero y la sección 2 (`design-reviewer`).
- Comprobar: el hero y la sección 2 no cambiaron; no queda ningún avatar; los nombres quedan alineados en cada fila;
  las tarjetas no tienen espacios vacíos grandes; las citas son exactas; contraste AA.

## Definición de listo
- [ ] Hero y sección 2 idénticos (sin cambios en `git diff`).
- [ ] 5 tarjetas con estrellas, texto exacto y pie alineado, sin avatares.
- [ ] Una versión del botón elegida, la otra eliminada y el parámetro `?cta` retirado.
- [ ] Enlace de Airbnb funcionando.
- [ ] Revisión visual en 375, 768 y 1280 px sin errores.
- [ ] Aprobada por el cliente. Lo que quede va a `BACKLOG.md`.