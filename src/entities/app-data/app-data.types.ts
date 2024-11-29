import { z } from 'zod';
import {
	AddUserSchema,
	RegisterUserSchema,
	PersistedUserSchema,
	UserSchema
} from './app-data.schemas';

export type TUser = z.infer<typeof UserSchema>;
export type TPersistedUser = z.infer<typeof PersistedUserSchema>;
export type TAddUser = z.infer<typeof AddUserSchema>;
export type TRegisterUser = z.infer<typeof RegisterUserSchema>;
