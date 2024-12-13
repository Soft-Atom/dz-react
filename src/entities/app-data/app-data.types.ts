import { z } from 'zod';
import { MovieTypes } from '~entities/movie/@x/app-data';
import { FavoriteTypes } from '~entities/favorites/@x/app-data';
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

export type TToogleUserFavorite = {
	userLogin: TUser['login'];
	movie: MovieTypes.TMovieShort;
};

export type TAddFavoritesToUser = {
	userLogin: TUser['login'];
} & FavoriteTypes.TFavorites;
