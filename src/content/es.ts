export const es = {
	site: {
		name: 'Cabañas Los Abetos',
		// TODO: título y descripción finales cuando se escriba el hero/SEO.
		title: 'Cabañas Los Abetos | Parque Ivian, Puerto Varas',
		description: 'Dos cabañas en el sector Parque Ivian, Puerto Varas.',
		lang: 'es',
		// TODO: dominio propio (canonical, Open Graph, sitemap). No se conoce todavía.
		url: null as string | null,
	},
	sections: {
		hero: 'Inicio',
		pillars: 'Por qué Los Abetos',
		cabins: 'Las cabañas',
		gallery: 'Galería',
		reviews: 'Reseñas',
		zone: 'La zona',
		contact: 'Cómo reservar',
		faq: 'Preguntas frecuentes',
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
			// Archivo: src/assets/photos/exterior-frontis2.jpg (1327 px: baja para uso a sangre)
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
	},
	booking: {
		primaryCta: 'Consultar disponibilidad',
		airbnbLabel: 'Airbnb',
		bookingLabel: 'Booking',
		// TODO: datos a confirmar con los anfitriones.
		minStayNights: null as number | null,
		priceFromCLP: null as number | null,
		airbnbUrl: null as string | null,
		bookingUrl: null as string | null,
	},
} as const;
