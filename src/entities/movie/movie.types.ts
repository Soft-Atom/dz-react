import { z } from 'zod';
import { MovieSchema, MoviesSchema } from './movie.contracts';

type TInferMapValue<T> = T extends Map<unknown, infer V> ? V : never;
export type TMovie = z.infer<typeof MovieSchema>;
export type TMovies = z.infer<typeof MoviesSchema>;
export type TMovieShort = TInferMapValue<TMovies>;
