import { z } from 'zod';

const ShortSchema = z.object({
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

export const MovieShortDtoSchema = z.object({
	'#IMDB_ID': z.string(),
	'#TITLE': z.string(),
	'#IMG_POSTER': z.string().url(),
	'#RANK': z.number()
});

export const MoviesDtoSchema = z.object({
	ok: z.boolean(),
	description: z.array(MovieShortDtoSchema),
	error_code: z.number()
});

export const MovieSchema = ShortSchema.omit({
	aggregateRating: true,
	'@type': true
}).extend({
	id: z.string(),
	type: z.string(),
	ratingValue: z.number()
});

export const MovieShortSchema = MovieSchema.pick({
	id: true,
	name: true,
	image: true,
	ratingValue: true
});

export const MoviesSchema = z.map(MovieShortSchema.shape.id, MovieShortSchema);
