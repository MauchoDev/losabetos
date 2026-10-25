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
	booking: {
		// TODO: datos a confirmar con los anfitriones.
		minStayNights: null as number | null,
		priceFromCLP: null as number | null,
		airbnbUrl: null as string | null,
		bookingUrl: null as string | null,
	},
} as const;
