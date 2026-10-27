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

// Vista ampliada: el archivo a su ancho real, nunca más grande (ver --photo-max-width en tokens.css)
export async function viewerSrc(key: PhotoKey): Promise<string> {
	const image = await getImage({ src: sources[key], width: es.photos[key].width, format: 'webp' });
	return image.src;
}
