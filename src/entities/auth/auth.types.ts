import { z } from 'zod';
import { AppDataTypes } from '~entities/app-data/@x/auth';
import { LoginSchema, RegisterSchema } from './auth.schemas';

export type TCurrentUser = Omit<
	AppDataTypes.TPersistedUser,
	'passwordHash' | 'favorites'
>;
export type TRegister = z.infer<typeof RegisterSchema>;
export type TLogin = z.infer<typeof LoginSchema>;
