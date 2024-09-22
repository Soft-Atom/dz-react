import { z } from 'zod';
import {
	MovieDtoSchema,
	MovieSchema,
	MoviesDtoSchema,
	MovieShortSchema,
	MoviesSchema
} from './movie.contracts';

export type TMovie = z.infer<typeof MovieSchema>;
export type TMovieShort = z.infer<typeof MovieShortSchema>;
export type TMovies = z.infer<typeof MoviesSchema>;

export type TMovieDto = z.infer<typeof MovieDtoSchema>;
export type TMoviesDto = z.infer<typeof MoviesDtoSchema>;
