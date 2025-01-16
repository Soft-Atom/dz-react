import { z } from 'zod';
import { FavoriteSchema, FavoritesSchema } from './favorites.schemas';

export type TFavorite = z.infer<typeof FavoriteSchema>;
export type TFavorites = z.infer<typeof FavoritesSchema>;
