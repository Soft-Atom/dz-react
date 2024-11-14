import { z } from 'zod';
import { UserSchemas } from '~entities/users/@x/auth';
import { AppErrors } from '~shared/lib/app-error';

export const RegisterSchema = UserSchemas.AddUserSchema.omit({
	favorites: true
})
	.extend({
		password: z.string().min(4, {
			message: AppErrors.AUTH.WRONG_PASSWORD_LENGTH.message
		}),
		confirmPassword: z.string().min(4, {
			message: AppErrors.AUTH.WRONG_PASSWORD_LENGTH.message
		})
	})
	.superRefine((x, ctx) => {
		if (x.password !== x.confirmPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: AppErrors.AUTH.WRONG_PASSWORD_LENGTH.message,
				path: ['confirmPassword']
			});
		}
	});
