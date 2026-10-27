# Backlog (fuera de v1)

- Inglés
- Invierno y empresas
- Blog
- Motor de reservas
- Sincronización de calendarios
- Pagos
- Panel de administración

## Secciones que salieron de v1 (26 de octubre de 2026)
- Tres pilares (tranquilidad cerca de la ciudad, limpieza y detalle, anfitriones atentos)
- Galería como sección aparte (las fotos van dentro de Las cabañas)
- Preguntas frecuentes

## Pendientes tras la sección 2 (27 de octubre de 2026)
- Pulido general de espaciados y tamaños, de todas las secciones juntas cuando estén las cinco.
- Decidir si la franja de 4 puntos se queda (la sección no depende de ella; si se quita, se borran
  `HighlightsPoints.astro`, su uso en `Highlights.astro` y `highlights.points` de `es.ts`).
- Unificar los botones del hero (píldora y círculo) con el sistema recto. Decisión del cliente: el hero está
  congelado hasta que la tome.
- Retoque de fotos con preset: reemplazar el filtro provisorio `--photo-hero-filter` por el retoque real. Hace falta
  recuperar los originales en alta resolución (hoy son archivos de WhatsApp de 1280 a 1600 px; la del hero mide 1327 px).
- Logo nuevo. Con él, dibujar el set propio de íconos que reemplace a los de Lucide copiados a `src/assets/icons/`.

## Pendientes tras la sección 3 (27 de octubre de 2026, brief v3: tarjetas sin avatar y dos botones)
- Elegir el botón final, A o B (`?cta=a` y `?cta=b`; sin parámetro se ve la A). Al elegir, se congela la sección y se limpia:
  en `reviews/ReviewsCta.astro`, borrar el `<a>` perdedor, el script inline, `data-reviews-cta` y `data-version`, y retirar `?cta`.
  Si gana A, borrar el import de `arrow-right` de ese archivo; si gana B, borrar `--cta-compact-pad-y` y `--cta-compact-pad-x`.
  - A (ámbar relleno, 44 px de alto) deja tres tamaños de botón primario en la página: hero 55 px en píldora, sección 2 de
    55 px recto y esta de 44 px recto. Unificar en la pasada global o dejarlo escrito en la skill.
  - B (enlace ámbar con flecha) choca con «un solo botón primario ámbar» de la skill y de `CLAUDE.md`, y sería el único primario
    de la página sin relleno; Reservar (oscura) tendrá que decidir cuál sigue.
  - Recomendación del revisor: A, porque coincide con el primario del hero y de la sección 2 y deja al botón como único acento
    fuerte (con B, la sección termina con dos enlaces gemelos, niebla y ámbar).
- URL de Airbnb (`booking.airbnbUrl`, hoy `null`): «Ver todas en Airbnb» se ve pero no enlaza. Es lo único, además de elegir
  el botón, que impide dar la sección por lista según su brief. Cuando llegue, revisar el foco por teclado sobre pino
  (`--focus-ring` da ~3,9:1 calculado).
- Promedio y número de reseñas (`reviews.rating` y `reviews.count`, hoy `null`): el brief los muestra bajo el enlace solo si el
  cliente entrega el dato del anuncio. Las claves existen pero no hay render todavía: se escribe cuando haya dato que probar.
- Confirmar con el cliente que solo se muestren nombre de pila, procedencia y mes y año (TODO en `es.ts`) y que «Romina»
  (la anfitriona) pueda nombrarse en la reseña de Analia.
- Abstraer el enlace con flecha («VER … →») en `ui/` con una prop de tono (claro u oscuro). Hoy está copiado en
  `highlights/HighlightsHead.astro` y `reviews/ReviewsHead.astro` (y ya divergió: la copia de Reseñas solo reacciona al hover
  con `href`); la versión B del botón sería una tercera copia. Abstraerlo obliga a tocar la sección 2, congelada. Lo mismo con
  el botón A: duplica unas 10 declaraciones de `ui/Button.astro`; decidir si pasa a ser un tamaño compacto de `Button`.
- Tablet (768 px): el brief define 3 columnas y móvil, no tablet. Se usan 2 columnas con la quinta tarjeta a todo el ancho (con 3
  el texto pasa de 4 líneas); su texto, limitado a 52 caracteres, deja aire a la derecha. Confirmar en la pasada general.
- Tamaños de la tarjeta: se usan `--text-base`, `--text-sm` y `--text-xs` (fluidos) en lugar de los 16/14/13 px del brief (y
  `--text-xs` en lugar de los 12 px del botón A); el texto de la reseña llega a 17,9 px a 1280. Si el cliente quiere los px
  exactos, hace falta un token fijo.
- Estrellas: la caja es de 14 px (`--star-size`, lo que pide el brief) pero el glifo de Lucide mide ~10–11 px. Si se ven chicas,
  subir `--star-size` (~1,1 rem). Son rellenas y sin trazo, a diferencia del resto de íconos (trazo 1,25). Son 25 estrellas
  ámbar en la sección, aunque la skill reserva el ámbar para el CTA.
- Tarjetas con la misma sombra y el mismo radio, y mayúsculas en el titular, el enlace y el botón de Reseñas: el brief las dibuja
  así, pero la skill y `CLAUDE.md` las limitan a la sección 2 y al hero. Tampoco recogen la estrella rellena ni la tarjeta
  oscura (`--shadow-card-dark`); `CLAUDE.md` sigue diciendo «muro de citas» y su lista de íconos no incluye `star`.
  Pendiente de que el cliente lo apruebe para escribirlo.
- En una fila con tarjetas de 2 y de 3 líneas de texto, las más cortas dejan ~29 px más de aire sobre la línea del pie (el
  pie va anclado al fondo para que los nombres queden alineados, como pide el brief). Aceptable; revisar en la pasada general.

## Ideas nuevas (27 de octubre de 2026)
- Calendario de disponibilidad
- WhatsApp
- Inglés (ya figura arriba; el texto está preparado para i18n en `es.ts`)
- «Un día en Los Abetos»
