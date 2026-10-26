# Hero — brief de diseño (ronda 1)

Este archivo tiene prioridad sobre `CLAUDE.md` en todo lo que toque al hero.
Referencia visual: `references/hero-ref-cabin-wild.png` (guardar la imagen en esa ruta y mirarla antes de diseñar).
Foto base: `src/assets/photos/exterior-frontis.jpg`.

## Qué tomamos de la referencia
- Titular en serif ligero de alto contraste, en MAYÚSCULAS, dos líneas, alineado a la izquierda y de gran tamaño.
- Texto claro sobre una zona oscura y profunda, con la cabaña pequeña rodeada de bosque.
- Disposición de elementos:
  1. Nav arriba: logo a la izquierda, enlaces a la derecha, todo pequeño, en mayúsculas y con tracking amplio.
  2. Una línea pequeña sobre el titular (eyebrow).
  3. Titular a media altura, a la izquierda.
  4. Párrafo corto a la derecha, a media altura.
  5. Fila inferior de 3 elementos con una línea fina encima.
  6. Un botón circular con flecha.

## Qué NO tomamos
- Numeración 01 / 02 / 03: nuestro contenido no es una secuencia. La fila inferior lleva 3 datos, sin números.
- Redes sociales, slider, texto "Cover cabin" ni la etiqueta "Index".
- La oscuridad de escena nocturna: nuestra foto es diurna. La llevamos a un grado más profundo, no a la noche.

## Reglas del hero
- Estas excepciones a los anti-patrones de `CLAUDE.md` están aprobadas por el cliente solo para el hero:
  titular y nav en mayúsculas, eyebrow sobre el titular.
- Tipografía de títulos: serif ligero de alto contraste (reemplaza a Bricolage Grotesque).
  Candidatas a probar en una ruta `/type-test` con el titular real: Cormorant Garamond (300 y 400),
  Instrument Serif y Bodoni Moda. El cliente elige una. Texto pequeño y nav: Hanken Grotesk.
- Tamaño del titular: la línea más larga («LEJOS DEL RUIDO.») tiene 16 caracteres, casi el doble que
  en la referencia. Dimensionarlo para que esa línea ocupe como máximo 55 a 60 % del ancho en escritorio.
  Token sugerido: `--step-hero: clamp(2.75rem, 1.4rem + 5.2vw, 6.5rem)`.
- Agregar a `tokens.css`: `--tracking-caps: 0.12em` y `--leading-display: 1`.
- Color del texto: `--color-niebla`. CTA: `--color-ambar`. Fondo oscuro: `--color-pino`.
- Movimiento: una sola secuencia al cargar. Las dos líneas del titular suben una tras otra (máscara
  con `overflow: hidden`, 900 ms, `--ease-out`) y la foto hace un zoom lento de 1,06 a 1 en 1,6 s.
  Nada más se anima. Respetar `prefers-reduced-motion`.
- Contraste: todo texto sobre la foto debe cumplir AA. Si no, oscurecer la zona con el degradé, no el texto.

## Copy (agregar a `es.ts` en `hero`)
- `eyebrow`: "PARQUE IVIAN, PUERTO VARAS"
- `headline`: "CERCA DE TODO." / "LEJOS DEL RUIDO." (dos líneas)
- `subheadline`: "Dos cabañas de madera entre pinos, a 10 minutos en auto del centro de Puerto Varas."
- CTA principal: `booking.primaryCta`. Debajo, dos enlaces de texto: Airbnb y Booking.
- `facts` (fila inferior, sin números):
  - "Dos cabañas iguales"
  - "10 minutos en auto al centro"
  - "Ideales para 4, hasta 5"
- Botón circular: flecha hacia abajo que lleva a `#cabanas`.
- La barra de llegada, salida y personas sale del hero y pasa a la sección del formulario.

## Foto: cómo adaptarla
1. Resolución: la foto actual mide unos 1300 px de ancho. Para usarla a sangre en pantallas grandes,
   conseguir el original del celular (no el de WhatsApp, que lo comprime) y exportarlo a 2400 px de ancho.
2. Retoque (Lightroom o Snapseed): bajar exposición cerca de -0,5; bajar luces altas; en el cielo,
   azul con menos saturación y menos luminancia (azul profundo, no celeste); mantener la madera cálida;
   viñeta suave; grano fino. Quitar las sillas blancas de plástico de la terraza.
3. Mientras no esté el retoque, probar con CSS: `filter: saturate(0.85) brightness(0.85)` y un degradé.
4. Guardar el resultado como `exterior-frontis-hero.jpg` y usar el mismo preset en el resto de la galería.

## Ronda 1: tres variantes, mismas reglas, rutas separadas
- `/hero-a` — Foto a la derecha (≈70 % del ancho) con el borde izquierdo fundido a verde pino mediante
  `mask-image`. El titular vive sobre la zona oscura sin tapar la cabaña. Es la más fiel a la referencia
  y no depende de la resolución.
- `/hero-b` — Foto a sangre completa con degradé oscuro desde abajo y desde la izquierda. Titular en el
  tercio inferior izquierdo, sobre el pasto. Requiere la foto original en alta resolución.
- `/hero-c` — Foto enmarcada con radio grande sobre fondo pino. El titular se superpone al borde del marco.
  Es la opción segura si la foto sigue siendo de baja resolución.

Las tres usan el mismo contenido y los mismos tokens. Después de elegir una, se borran las otras dos.

## Crítica antes de mostrar (cada variante)
- Capturas en 375, 768 y 1280 px.
- Comprobar: el titular no tapa la terraza ni los ventanales; no hay texto ilegible sobre la foto;
  la foto no se ve pixelada; en móvil el titular cabe sin cortar palabras; hay un solo foco visual.
- Revisar contra los anti-patrones de `CLAUDE.md` y contra este brief.