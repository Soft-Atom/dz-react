import { z } from 'zod';

export const SearchSchema = z.object({
	q: z.string().min(3)
});

export const FindOneRequestSchema = z.object({
	tt: z.string().min(1)
});

export const FindManyRequestSchema = SearchSchema;

export const FindOneShortSchema = z.object({
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
		dateCreated: z.coerce.date(),
		reviewBody: z.string()
	})
});

export const FindOneResponseSchema = z.object({
	short: FindOneShortSchema,
	imdbId: z.string()
});

const FindManyShortSchema = z.object({
	'#IMDB_ID': z.string(),
	'#TITLE': z.string(),
	'#IMG_POSTER': z.string().optional().default('/movie-without-image.jpg'),
	'#RANK': z.number()
});

export const FindManyResponseSchema = z.object({
	ok: z.boolean(),
	description: z.array(FindManyShortSchema),
	error_code: z.number()
});
