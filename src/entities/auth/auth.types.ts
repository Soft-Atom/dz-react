import { z } from 'zod';
import { UserTypes } from '~entities/app-data/@x/auth';
import { RegisterSchema } from './auth.schemas';

export type TCurrentUser = Omit<
	UserTypes.TPersistedUser,
	'passwordHash' | 'favorites'
>;
export type TRegister = z.infer<typeof RegisterSchema>;
