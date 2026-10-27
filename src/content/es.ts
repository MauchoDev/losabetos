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
		// Las cabañas. Los alt describen lo que muestra cada archivo, no el pie de foto.
		living: {
			// Archivo: src/assets/fotos/living.jpg (1280 × 960)
			// TODO: esta foto muestra la cocina con isla y banquetas, casi igual a cocina.jpg; no se ve el futón-cama
			// ni la TV. Falta una foto del living (el pie «Living» sale del brief).
			alt: 'Cocina y comedor con isla de cuarzo y tres banquetas de metal, vigas de madera a la vista y un mueble bajo con cuadros en la pared',
			caption: 'Living',
			width: 1280,
			height: 960,
			use: 'Las cabañas',
		},
		dormitorioDosCamas: {
			// Archivo: src/assets/fotos/dormitorio-dos-camas.jpg (1200 × 1600, vertical)
			alt: 'Dormitorio con dos camas individuales de cobertor verde, una ventana al jardín y vigas de madera en el techo',
			caption: 'Dormitorio con dos camas',
			width: 1200,
			height: 1600,
			use: 'Las cabañas',
		},
		cocina: {
			// Archivo: src/assets/fotos/cocina.jpg (1280 × 960)
			alt: 'Cocina con isla y banquetas, horno eléctrico, refrigerador y una ventana con marco de madera',
			caption: 'Comedor y cocina',
			width: 1280,
			height: 960,
			use: 'Las cabañas',
		},
		dormitorioMatrimonial: {
			// Archivo: src/assets/fotos/dormitorio-matrimonial.jpg (1280 × 960)
			// TODO: el piso refleja azul. Se probó una corrección automática y dejó manchas: va con el retoque manual.
			alt: 'Dormitorio matrimonial con cama de dos plazas de cobertor verde, closet de madera y una ventana que da a los árboles',
			caption: 'Dormitorio matrimonial',
			width: 1280,
			height: 960,
			use: 'Las cabañas',
		},
		bano: {
			// Archivo: src/assets/fotos/bano.jpg (1280 × 960)
			alt: 'Baño con ducha de vidrio, lavamanos con mueble blanco, espejo con marco de madera y repisa de bambú',
			caption: 'Baño',
			width: 1280,
			height: 960,
			use: 'Las cabañas',
		},
	},
	cabins: {
		title: 'Dos cabañas iguales',
		intro:
			'Cada una tiene dos dormitorios, living con futón-cama, cocina con comedor y baño. Ideales para 4 personas, caben hasta 5.',
		// TODO: confirmar con los anfitriones.
		photoNote: 'Las fotos corresponden a una de las cabañas; la otra es idéntica.',
		openPhoto: 'Ampliar foto',
		viewer: {
			label: 'Fotos de las cabañas',
			close: 'Cerrar',
			prev: 'Foto anterior',
			next: 'Foto siguiente',
		},
		stripNav: {
			label: 'Navegar las fotos',
			prev: 'Ver fotos anteriores',
			next: 'Ver más fotos',
		},
		includedTitle: 'Qué incluye',
		included: [
			{ name: 'Cocina equipada', detail: 'Cocina completa con comedor.' },
			{ name: 'Dos dormitorios', detail: 'Uno matrimonial y otro con dos camas.' },
			{ name: 'Living con futón-cama', detail: 'Con TV.' },
			{ name: 'Baño con agua caliente' },
			{ name: 'Internet rápido y WiFi' },
			{ name: 'Ropa de cama incluida' },
			{ name: 'Terraza' },
			{ name: 'Parrilla' },
			{ name: 'Estacionamiento' },
			{ name: 'Entre pinos', detail: 'Árboles grandes alrededor y un patio tranquilo.' },
		],
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
	booking: {
		primaryCta: 'Consultar disponibilidad',
		airbnbLabel: 'Airbnb',
		bookingLabel: 'Booking',
		// TODO: confirmar con los anfitriones (valores del brief de Las cabañas, aún sin confirmar).
		minStayNights: 1 as number | null,
		priceFromCLP: 110000 as number | null,
		airbnbUrl: null as string | null,
		bookingUrl: null as string | null,
	},
} as const;
