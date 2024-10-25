import { z } from 'zod';
import { FavoriteSchemas } from '~entities/favorites/@x/users';

export const UserSchema = z
	.object({
		login: z.string().min(1),
		passwordHash: z.string()
	})
	.merge(FavoriteSchemas.FavoritesSchema);

export const AddUserSchema = UserSchema.omit({ passwordHash: true })
	.partial({ favorites: true })
	.extend({
		password: z.string().min(4)
	});
