import { ZodType, ZodTypeDef, input, ZodObject } from 'zod';

export type TZodType<T> = ZodType<
	T,
	ZodTypeDef,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	input<ZodObject<any, any, any, T>>
>;
