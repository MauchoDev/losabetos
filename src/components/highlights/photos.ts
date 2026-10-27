import { getImage } from 'astro:assets';
import { es } from '../../content/es';
import living from '../../assets/fotos/living.jpg';
import dormitorioDosCamas from '../../assets/fotos/dormitorio-dos-camas.jpg';
import cocina from '../../assets/fotos/cocina.jpg';
import dormitorioMatrimonial from '../../assets/fotos/dormitorio-matrimonial.jpg';
import bano from '../../assets/fotos/bano.jpg';

// Cada clave es un slot de es.photos (alt, pie, medidas). Cambiar un archivo no toca el diseño.
export const sources = { living, dormitorioDosCamas, cocina, dormitorioMatrimonial, bano };

export type PhotoKey = keyof typeof sources;

// Orden de la vista ampliada: las 5 fotos. Las tres primeras son las de las tarjetas.
export const viewerOrder: readonly PhotoKey[] = [
	'living',
	'cocina',
	'dormitorioMatrimonial',
	'dormitorioDosCamas',
	'bano',
];

// Vista ampliada: el archivo a su ancho real, nunca más grande
export async function viewerSrc(key: PhotoKey): Promise<string> {
	const image = await getImage({ src: sources[key], width: es.photos[key].width, format: 'webp' });
	return image.src;
}
