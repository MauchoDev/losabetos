export const es = {
	site: {
		name: 'Cabañas Los Abetos',
		// TODO: título y descripción finales cuando se escriba el hero/SEO.
		title: 'Cabañas Los Abetos | Parque Ivian, Puerto Varas',
		description: 'Dos cabañas en el sector Parque Ivian, Puerto Varas.',
		lang: 'es',
		// Formato de números y moneda (precio en pesos chilenos: $110.000)
		locale: 'es-CL',
		// TODO: dominio propio (canonical, Open Graph, sitemap). No se conoce todavía.
		url: null as string | null,
	},
	sections: {
		hero: 'Inicio',
		// `cabins` y `gallery` son las etiquetas de los enlaces #cabanas y #galeria del nav del hero (congelado).
		// Ambos ids viven en la sección «Lo que destaca» (highlights).
		cabins: 'Las cabañas',
		gallery: 'Galería',
		reviews: 'Reseñas',
		zone: 'La zona',
		contact: 'Cómo reservar',
	},
	hero: {
		// Los textos van en minúscula normal; el hero los pone en mayúsculas con CSS (hero-brief.md).
		eyebrow: 'Parque Ivian, Puerto Varas',
		headline: ['Cerca de todo.', 'Lejos del ruido.'],
		subheadline:
			'Dos cabañas de madera entre pinos, a 10 minutos en auto del centro de Puerto Varas.',
		facts: ['Dos cabañas iguales', '10 minutos en auto al centro', 'Ideales para 4, hasta 5'],
		nav: {
			label: 'Navegación principal',
			menu: 'Menú',
		},
		scrollLabel: 'Ver las cabañas',
	},
	photos: {
		exteriorFrontisHero: {
			// Archivo: src/assets/photos/exterior-frontis2.jpg (1327 px: se amplía en pantallas grandes o de densidad x2; falta el original)
			alt: 'Cabaña de madera con terraza y ventanales, y una segunda cabaña al fondo entre los árboles',
			width: 1327,
			height: 1043,
			use: 'Hero',
		},
		exteriorFrontis: {
			// Archivo: src/assets/photos/exterior-frontis.jpg (el hero usa exteriorFrontisHero)
			alt: 'Cabaña de madera con terraza y ventanales, y una segunda cabaña al fondo entre los árboles',
			width: 1280,
			height: 960,
			use: 'OG image',
		},
		// Lo que destaca. Los alt describen lo que muestra cada archivo, no el pie de foto.
		living: {
			// Archivo: src/assets/fotos/living.jpg (1600 × 1200) = IMG-20260415-WA0026.jpg (el living con el macramé).
			// Hasta la ronda 1 este archivo era «living cocina.jpg», una foto de la cocina.
			// TODO: el brief dice «con TV» y la foto no muestra la TV; confirmar el texto de highlights.spaces.
			alt: 'Living luminoso con futón gris, dos sillones, mesas de centro de madera sobre una alfombra de yute, un macramé en la pared y la cocina al fondo bajo vigas de madera',
			caption: 'Living',
			width: 1600,
			height: 1200,
			use: 'Lo que destaca',
		},
		dormitorioDosCamas: {
			// Archivo: src/assets/fotos/dormitorio-dos-camas.jpg (1200 × 1600, vertical)
			alt: 'Dormitorio con dos camas individuales de cobertor verde, una ventana al jardín y vigas de madera en el techo',
			caption: 'Dormitorio con dos camas',
			width: 1200,
			height: 1600,
			use: 'Lo que destaca',
		},
		cocina: {
			// Archivo: src/assets/fotos/cocina.jpg (1280 × 960)
			alt: 'Cocina con isla y banquetas, horno eléctrico, refrigerador y una ventana con marco de madera',
			caption: 'Cocina y comedor',
			width: 1280,
			height: 960,
			use: 'Lo que destaca',
		},
		dormitorioMatrimonial: {
			// Archivo: src/assets/fotos/dormitorio-matrimonial.jpg (1280 × 960)
			// TODO: el piso refleja azul. Se probó una corrección automática y dejó manchas: va con el retoque manual.
			alt: 'Dormitorio matrimonial con cama de dos plazas de cobertor verde, closet de madera y una ventana que da a los árboles',
			caption: 'Dormitorio matrimonial',
			width: 1280,
			height: 960,
			use: 'Lo que destaca',
		},
		bano: {
			// Archivo: src/assets/fotos/bano.jpg (1280 × 960)
			alt: 'Baño con ducha de vidrio, lavamanos con mueble blanco, espejo con marco de madera y repisa de bambú',
			caption: 'Baño',
			width: 1280,
			height: 960,
			use: 'Lo que destaca',
		},
	},
	highlights: {
		// Espacio duro (\u00a0) entre «a» y «notar»: el titular no se corta en medio de «vas a notar».
		title: 'Lo que vas a\u00a0notar al llegar',
		// Ya no se muestra junto al titular (ronda 2). Se conserva aquí para el SEO (meta description u otro uso).
		intro:
			'Dos cabañas iguales en una parcela entre pinos. Tranquilas, cuidadas al detalle y a pocos minutos de todo.',
		// Enlace a la derecha del titular: baja a #galeria
		viewCabins: 'Ver cabañas',
		// `icon` es la clave del SVG de Lucide copiado en src/assets/icons (ver HighlightsPoints.astro).
		points: [
			{ icon: 'treePine', title: 'Entre pinos', text: 'Privacidad y silencio' },
			{
				icon: 'mapPin',
				title: 'A 10\u00a0minutos del centro',
				// TODO: confirmar los 20 minutos al lago (y los 10 al centro, ver hero) con los anfitriones.
				text: 'Lago a unos 20\u00a0minutos',
			},
			{ icon: 'bedDouble', title: 'Impecables por dentro', text: 'Limpias y bien cuidadas' },
			{ icon: 'cookingPot', title: 'Con todo para quedarte', text: 'Cocina completa y WiFi rápido' },
		],
		// `photo` es la clave del slot en es.photos; el pie y el alt de la foto salen de ahí.
		spaces: [
			{ photo: 'living', title: 'Living', text: 'Luminoso, con futón-cama, TV y vigas de madera a la vista.' },
			{ photo: 'cocina', title: 'Cocina y comedor', text: 'Equipada, con isla y bancos.' },
			{
				photo: 'dormitorioMatrimonial',
				title: 'Dormitorios',
				text: 'Uno matrimonial y otro con dos camas. Ropa de cama incluida.',
			},
		],
		viewPhotos: 'Ver fotos',
		// Nombre accesible del enlace de cada tarjeta; {title} se reemplaza por el título del espacio.
		viewPhotosOf: 'Ver fotos: {title}',
		viewAllPhotos: 'Ver todas las fotos',
		alsoTitle: 'Y además',
		also: [
			'Terraza',
			'Parrilla',
			'Estacionamiento',
			'Baño con agua caliente',
			'Ropa de cama incluida',
			'TV e internet rápido',
		],
		// TODO: confirmar con los anfitriones.
		photoNote: 'Las fotos corresponden a una de las cabañas; la otra es idéntica.',
		viewer: {
			label: 'Fotos de las cabañas',
			close: 'Cerrar',
			prev: 'Foto anterior',
			next: 'Foto siguiente',
		},
	},
	// Sección 3, «Reseñas» (resenas-brief.md, versión 3). Las reseñas se escriben a mano, sin widget de terceros. Los textos
	// van EXACTOS: solo se cortan al final de una oración. Cada tarjeta muestra 5 estrellas, el texto y, en el pie, el nombre
	// de pila con procedencia y fecha; sin avatares ni fotos de perfil. Cuando lleguen reseñas nuevas se agregan aquí.
	reviews: {
		// Mayúsculas por CSS, con el mismo estilo y tamaño del titular de Lo que destaca (el diagrama del brief las dibuja así).
		title: 'Lo que dicen sus huéspedes',
		// Enlace a la derecha del titular: va a booking.airbnbUrl
		linkLabel: 'Ver todas en Airbnb',
		// TODO: promedio que muestra el anuncio de Airbnb. Con null no se muestra nada de eso.
		// Sin render todavía (modo layout): cuando llegue el dato, se agrega la línea bajo el enlace (ver BACKLOG.md).
		rating: null as number | null,
		// TODO: número de reseñas del anuncio. Con null no se muestra nada de eso. Sin render todavía, igual que `rating`.
		count: null as number | null,
		// Nombre accesible de la fila de estrellas; {stars} se reemplaza por items[].stars
		starsLabel: '{stars} de 5 estrellas',
		// `from` es opcional (null = no se muestra, no es un dato pendiente). No se descargan ni enlazan imágenes de Airbnb.
		// TODO: confirmar con el cliente que se muestren solo nombre de pila, procedencia y mes y año.
		items: [
			{
				name: 'Nicole',
				from: 'Punta Arenas, Chile' as string | null,
				date: 'enero de 2025',
				stars: 5,
				quote:
					'Excelente estadía, todo muy limpio, cercano a la ciudad pero al mismo tiempo alejado del ruido',
			},
			{
				name: 'Constanza',
				from: 'Antofagasta, Chile' as string | null,
				date: 'noviembre de 2024',
				stars: 5,
				quote: 'Lugar hermoso e impecable. Cuidaron hasta el último detalle de la cabaña.',
			},
			{
				name: 'Ricardo',
				from: 'Chillán, Chile' as string | null,
				date: 'febrero de 2024',
				stars: 5,
				quote: 'El lugar muy tranquilo y privado. La cabaña impecable, todo limpio, ordenado y espacioso.',
			},
			{
				// Figuraba dos veces en la primera versión: son oraciones contiguas de la misma reseña, se unen en una cita.
				name: 'Laura',
				from: null as string | null,
				date: 'septiembre de 2025',
				stars: 5,
				quote: 'La cabaña preciosa, limpia, con detalles muy cuidados y todo lo necesario para una estadía cómoda.',
			},
			{
				name: 'Analia',
				from: 'Bella Vista, Argentina' as string | null,
				date: 'febrero de 2025',
				stars: 5,
				quote: 'Hermoso alojamiento y la atención. Y la amabilidad de Romina impecable.',
			},
		],
	},
	booking: {
		primaryCta: 'Consultar disponibilidad',
		airbnbLabel: 'Airbnb',
		bookingLabel: 'Booking',
		// TODO: confirmar con los anfitriones (valores del brief de Las cabañas, aún sin confirmar).
		minStayNights: 1 as number | null,
		priceFromCLP: 110000 as number | null,
		airbnbUrl: null as string | null,
		bookingUrl: null as string | null,
		// Ficha de precio y consulta: ya no está en Lo que destaca; la usa Reservar (src/components/booking/PricePanel.astro, sin usar).
		panel: {
			label: 'Precio y consulta',
			priceFrom: 'Desde',
			priceUnit: 'CLP por noche',
			// TODO: confirmar con los anfitriones si el precio es por cabaña.
			season: 'Temporada alta',
			capacity: 'Ideales para 4, hasta 5 personas',
			minStay: { label: 'Estadía mínima', one: 'noche', other: 'noches' },
		},
	},
} as const;
