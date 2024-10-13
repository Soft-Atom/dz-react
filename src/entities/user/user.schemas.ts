import { z } from 'zod';
import { WRONG_PASSWORD_LENGTH } from './user.constants';

export const UserSchema = z.object({
	login: z.string(),
	passwordHash: z.string()
});

export const UserRegisterSchema = UserSchema.omit({
	passwordHash: true
}).extend({
	password: z.string().min(6, {
		message: WRONG_PASSWORD_LENGTH
	})
});

export const UserLoginSchema = UserSchema.omit({
	passwordHash: true
}).extend({
	password: z.string().min(6)
});
