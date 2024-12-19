import { z } from 'zod';
import { MovieDtoSchema, MoviesDtoSchema } from './movie.contracts';

export type TMovieDto = z.infer<typeof MovieDtoSchema>;
export type TMoviesDto = z.infer<typeof MoviesDtoSchema>;
