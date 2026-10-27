# Sección 2: Las cabañas — brief de diseño

Este brief tiene prioridad sobre `CLAUDE.md` en todo lo que toque a esta sección.
Antes de empezar: usa la skill `los-abetos-design` si existe. Si no existe, lee el código del hero
aprobado y las capturas de `references/approved/`. Esta sección debe sentirse del mismo sitio que el hero.
No inventes valores: tipografía, tamaños, radios, degradados y tratamiento de foto se leen del hero y de `tokens.css`.

## Objetivo
Que quien llega entienda en menos de 30 segundos cómo son las cabañas, cuántos caben, qué incluyen
y cuánto cuestan, y que tenga el botón de consulta a mano. Es la sección con más peso de conversión.

## Orden del contenido (de arriba hacia abajo)
1. Titular y párrafo corto.
2. Fotos (galería integrada).
3. Qué incluye y ficha de precio con CTA.
Este orden sigue lo que pide un huésped: ver, entender, decidir.

## Fondo y coherencia con el hero
- Fondo claro (`--color-niebla`), texto en `--color-pino`. El hero es oscuro, así que esta sección es el
  descanso visual de la página.
- Misma disposición que el hero: titular grande a la izquierda y párrafo corto a la derecha, a la altura
  del titular, con una línea fina debajo.
- Mismo estilo de titular que el hero (misma fuente, mayúsculas y tracking). Tamaño menor,
  con un token intermedio, nunca el del hero. Texto pequeño con la fuente del cuerpo.
- Mismo tratamiento de bordes y radios que el hero para las fotos.
- Botón principal en ámbar, igual que en el hero. Los enlaces a Airbnb y Booking, como texto.

## Cambio respecto al plan anterior
Las comodidades ya no van en tarjetas bento. Con las fotos de celular y la línea editorial del hero, una
grilla de tarjetas se vería como una web genérica de SaaS. En su lugar: fotos en una rejilla editorial
asimétrica y las comodidades en una lista con líneas finas, como la fila inferior del hero.

## Copy (reemplaza `cabins` en `es.ts`; sin tarjetas ni `size`)
- `title`: "Dos cabañas iguales" (en dos líneas si hace falta)
- `intro`: "Cada una tiene dos dormitorios, living con futón-cama, cocina con comedor y baño. Ideales para 4 personas, caben hasta 5."
- `photoNote`: "Las fotos corresponden a una de las cabañas; la otra es idéntica." // TODO: confirmar
- `included` (lista de dos columnas con líneas finas, texto pequeño, sin íconos):
  - "Cocina equipada" — "Cocina completa con comedor."
  - "Dos dormitorios" — "Uno matrimonial y otro con dos camas."
  - "Living con futón-cama" — "Con TV."
  - "Baño con agua caliente"
  - "Internet rápido y WiFi"
  - "Ropa de cama incluida"
  - "Terraza"
  - "Parrilla"
  - "Estacionamiento"
  - "Entre pinos" — "Árboles grandes alrededor y un patio tranquilo."
- Ficha (panel a la derecha de la lista):
  - Precio: "Desde $110.000 CLP por noche" y debajo "Temporada alta". // TODO: confirmar si es por cabaña
  - "Ideales para 4, hasta 5 personas"
  - "Estadía mínima: 1 noche" (sale de `booking.minStayNights`)
  - CTA: `booking.primaryCta`, y debajo los enlaces de Airbnb y Booking.
- Pies de foto, cortos y factuales: "Living", "Comedor y cocina", "Dormitorio matrimonial",
  "Dormitorio con dos camas", "Baño".

## Fotos (usar solo estas)
| Archivo | Orientación | Rol |
|---|---|---|
| living.jpg | horizontal | Protagonista: la más grande |
| dormitorio-dos-camas.jpg | vertical (3:4) | Pieza alta, aprovecha el formato |
| cocina.jpg | horizontal | Segundo plano grande |
| dormitorio-matrimonial.jpg | horizontal | Mediana |
| bano.jpg | horizontal | La más pequeña |

- No usar `exterior-frontis.jpg` (ya está en el hero) ni la foto reservada de la cocina.
- Todas pasan por el mismo preset de retoque que el hero: corrección de lente, verticales rectas,
  balance de blancos cálido y consistente. La del dormitorio matrimonial tiene un tinte azulado que hay que corregir.
- Nunca mostrar una foto por encima de su resolución real. En escritorio, el ancho máximo de cada foto
  no puede superar el de su archivo. Si falta resolución, la foto va más pequeña en la rejilla.

## Layout de escritorio (12 columnas)
```
[ DOS CABAÑAS         ]                        [ párrafo corto  ]
[ IGUALES.            ]
─────────────────────────────────────────────────────────────────
[ living (grande, 7 col) ........ ][ dos camas (vertical, 5 col)]
[                                 ][                            ]
[ comedor-cocina (5) ][ matrimonial (4) ][ baño (3)             ]
   nota de fotos (texto pequeño)
─────────────────────────────────────────────────────────────────
[ Qué incluye: lista en 2 columnas (7 col) ][ ficha: precio, CTA (5 col) ]
```
- Alturas distintas y separación generosa entre bloques. Nada de cuadrícula uniforme.
- La ficha puede tener fondo `--color-salvia-suave`. Es la única superficie con relleno en la sección.
- Móvil (375 px): una columna, fotos apiladas con sus proporciones, lista en una columna y ficha al final.

## Interacción y movimiento
- Al hacer clic o tocar una foto, se abre una vista ampliada con `<dialog>`: botón de cerrar, flechas
  anterior y siguiente, teclado (Esc, flechas), foco atrapado y pie de foto. Es la única interacción.
- Sin animaciones de entrada ni hover animado en esta sección. El único momento memorable es el del hero.
- Respetar `prefers-reduced-motion`.

## Ronda 1: dos variantes, mismas reglas
- `/cabanas-a` — rejilla editorial asimétrica como en el wireframe de arriba.
- `/cabanas-b` — fila horizontal de fotos con `scroll-snap`, altura fija y dos botones circulares de
  flecha (mismo estilo que el botón circular del hero), y debajo la lista y la ficha.
Después de elegir una, se integra en `index` y se borra la otra. Máximo dos rondas de ajuste.

## Crítica antes de mostrar
- Capturas en 375, 768 y 1280 px, comparadas con las de `references/approved/` (usar `design-reviewer` si existe).
- Verificar: ninguna foto pixelada ni estirada; las más débiles son las más pequeñas; el precio y el CTA se
  ven sin volver al hero; la lista se lee sin esfuerzo; contraste AA; solo tokens, sin valores hardcodeados.
- Revisar contra los anti-patrones de `CLAUDE.md`: sin tarjetas idénticas, sin íconos genéricos, sin
  numeración, sin eyebrow sobre el titular, sin animaciones de entrada.

## Definición de listo
- [ ] Contenido completo desde `es.ts`, sin `null` visibles.
- [ ] Vista ampliada de fotos funcionando con teclado y en móvil.
- [ ] Revisión visual en 375, 768 y 1280 px sin errores.
- [ ] Aprobado por el cliente en máximo dos rondas.