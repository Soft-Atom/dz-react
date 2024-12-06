import { z } from 'zod';
import {
	AddUserSchema,
	RegisterUserSchema,
	PersistedUserSchema,
	UserSchema
} from './app-data.schemas';
import { MovieTypes } from '../movie/@x/app-data';

export type TUser = z.infer<typeof UserSchema>;
export type TPersistedUser = z.infer<typeof PersistedUserSchema>;
export type TAddUser = z.infer<typeof AddUserSchema>;
export type TRegisterUser = z.infer<typeof RegisterUserSchema>;

export type TToogleUserFavorites = {
	userLogin: TUser['login'];
	movie: MovieTypes.TMovieShort;
};
