import { z } from 'zod';
import { MovieContractsDto } from '~shared/api/movie';

export const MovieSchema = MovieContractsDto.ShortSchema.omit({
	'@type': true,
	aggregateRating: true
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

export const MoviesShortSchema = z.object({
	movies: z.map(z.string(), MovieShortSchema)
});
