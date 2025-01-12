import { z } from 'zod';
import {
	FindOneResponseSchema,
	FindManyResponseSchema,
	FindManyRequestSchema,
	FindOneRequestSchema,
	SearchSchema
} from './movie.contracts';

export type TMovieFindOneRequest = z.infer<typeof FindOneRequestSchema>;
export type TMovieFindManyRequest = z.infer<typeof FindManyRequestSchema>;

export type TFindOneResponse = z.infer<typeof FindOneResponseSchema>;
export type TFindManyResponse = z.infer<typeof FindManyResponseSchema>;

export type TSearch = z.infer<typeof SearchSchema>;
