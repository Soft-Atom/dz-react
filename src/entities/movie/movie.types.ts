import { z } from 'zod';
import {
	MovieSchema,
	MovieShortSchema,
	MoviesShortSchema
} from './movie.schemas';

export type TMovie = z.infer<typeof MovieSchema>;
export type TMovieShort = z.infer<typeof MovieShortSchema>;
export type TMoviesShort = z.infer<typeof MoviesShortSchema>;
