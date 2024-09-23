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

const MovieDtoSchema = z.object({
	short: ShortSchema,
	imdbId: z.string()
});

export const MovieSchema = MovieDtoSchema.transform(({ short, imdbId }) => {
	const {
		aggregateRating: { ratingValue },
		'@type': type,
		...rest
	} = short;
	return {
		id: imdbId,
		type,
		ratingValue,
		...rest
	};
});

const MovieShortDtoSchema = z.object({
	'#IMDB_ID': z.string(),
	'#TITLE': z.string(),
	'#IMG_POSTER': z.string().url(),
	'#RANK': z.number()
});

const MoviesDtoSchema = z.object({
	ok: z.boolean(),
	description: z.array(MovieShortDtoSchema),
	error_code: z.number()
});

export const MoviesSchema = MoviesDtoSchema.transform(
	({ description }) =>
		new Map(
			description.map((x) => {
				const {
					'#IMDB_ID': id,
					'#TITLE': name,
					'#IMG_POSTER': image,
					'#RANK': ratingValue
				} = x;
				return [id, { id, name, image, ratingValue }];
			})
		)
);
