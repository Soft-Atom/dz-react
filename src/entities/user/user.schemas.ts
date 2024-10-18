import { z } from 'zod';
import { WRONG_PASSWORD_LENGTH } from './user.constants';

export const UserSchema = z.object({
	login: z.string().min(1),
	passwordHash: z.string()
});

export const RegisterSchema = UserSchema.omit({
	passwordHash: true
}).extend({
	password: z.string().min(4, {
		message: WRONG_PASSWORD_LENGTH
	})
});

export const LoginSchema = UserSchema.omit({
	passwordHash: true
}).extend({
	password: z.string().min(4)
});
