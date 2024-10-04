import { z } from 'zod';

export const UserSchema = z.object({
	login: z.string(),
	passwordHash: z.string()
});
