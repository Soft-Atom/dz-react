import { z } from 'zod';
import { FavoriteSchemas } from '~entities/favorites/@x/app-data';
import { AppErrors } from '~shared/lib/app-error';

export const UserSchema = z
	.object({
		login: z.string().min(1)
	})
	.merge(FavoriteSchemas.FavoritesSchema);

export const PersistedUserSchema = UserSchema.extend({
	passwordHash: z.string()
});

export const AddUserSchema = UserSchema.omit({ favorites: true }).extend({
	password: z.string().min(4)
});

export const RegisterUserSchema = AddUserSchema.extend({
	password: z.string().min(4, {
		message: AppErrors.AUTH.WRONG_PASSWORD_LENGTH.message
	}),
	confirmPassword: z.string().min(4, {
		message: AppErrors.AUTH.WRONG_PASSWORD_LENGTH.message
	})
}).superRefine((x, ctx) => {
	if (x.password !== x.confirmPassword) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: AppErrors.AUTH.WRONG_PASSWORD_LENGTH.message,
			path: ['confirmPassword']
		});
	}
});
