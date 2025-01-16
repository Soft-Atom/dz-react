import { z } from 'zod';
import { MovieSchemas } from '../movie/@x/favorites';

export const FavoriteSchema = MovieSchemas.MovieShortSchema;

export const FavoritesSchema = z.object({
	favorites: z.map(z.string(), FavoriteSchema)
});
