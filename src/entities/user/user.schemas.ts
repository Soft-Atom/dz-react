import { z } from 'zod';

export const UserSchema = z.object({
	login: z.string(),
	passwordHash: z.string()
});

export const UserRegisterSchema = UserSchema.omit({
	passwordHash: true
}).extend({
	password: z.string().min(6, {
		message: 'Password must be at least 8 characters.'
	})
});

export const UserLoginSchema = UserSchema.omit({
	passwordHash: true
}).extend({
	password: z.string().min(6)
});
