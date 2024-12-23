import { z } from 'zod';
import {
	FindOneResponseSchema,
	FindManyResponseSchema,
	FindManyRequestSchema,
	FindOneRequestSchema
} from './movie.contracts';

export type TMovieFindOneRequest = z.infer<typeof FindOneRequestSchema>;
export type TMovieFindManyRequest = z.infer<typeof FindManyRequestSchema>;

export type TFindOneResponse = z.infer<typeof FindOneResponseSchema>;
export type TFindManyResponse = z.infer<typeof FindManyResponseSchema>;
