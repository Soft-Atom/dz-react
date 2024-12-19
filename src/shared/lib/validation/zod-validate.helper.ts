import { TZodType } from './zod.types';

export const zodValidate = <T>(value: unknown, zodObject: TZodType<T>): T => {
	const result = zodObject.safeParse(value);
	if (result.error) {
		const errorsText = result.error.issues
			.map((e) => `subject: ${e.path.join('.')}, error: ${e.message}`)
			.join('|');
		throw new Error(errorsText);
	}
	return result.data;
};
