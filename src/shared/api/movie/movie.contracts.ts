import { z } from 'zod';

export const ShortSchema = z.object({
	name: z.string(),
	description: z.string(),
	aggregateRating: z.object({
		ratingValue: z.number()
	}),
	// тут должен быть енам
	'@type': z.string(),
	datePublished: z.coerce.date(),
	duration: z.string(),
	// тут должен быть масив енам
	genre: z.array(z.string()),
	image: z.string().url(),
	//вынести в отдельную схему вопрос как быть с импортами entity на одном уровне
	//импорт из ревью в муви
	review: z.object({
		name: z.string(),
		date: z.coerce.date(),
		reviewBody: z.string()
	})
});

export const MovieDtoSchema = z.object({
	short: ShortSchema,
	imdbId: z.string()
});

const MovieShortDtoSchema = z.object({
	'#IMDB_ID': z.string(),
	'#TITLE': z.string(),
	'#IMG_POSTER': z.string().optional().default('/movie-without-image.jpg'),
	'#RANK': z.number()
});

export const MoviesDtoSchema = z.object({
	ok: z.boolean(),
	description: z.array(MovieShortDtoSchema),
	error_code: z.number()
});
