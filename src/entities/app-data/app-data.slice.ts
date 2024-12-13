import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	TAddFavoritesToUser,
	TPersistedUser,
	TToogleUserFavorite
} from './app-data.types';
import { addUser } from './app-data.thunks';

export interface IAppDataState {
	users: Map<TPersistedUser['login'], TPersistedUser>;
}

const initialState: IAppDataState = {
	users: new Map()
};

export const appDataSlice = createSlice({
	name: 'appData',
	initialState,
	reducers: {
		toogleFavorites: (
			state,
			{ payload: { userLogin, movie } }: PayloadAction<TToogleUserFavorite>
		) => {
			const user = state.users.get(userLogin);
			if (!user) return;
			if (user.favorites.has(movie.id)) {
				user.favorites.delete(movie.id);
			} else {
				user.favorites.set(movie.id, movie);
			}
		},
		addFavorites: (
			state,
			{ payload: { userLogin, favorites } }: PayloadAction<TAddFavoritesToUser>
		) => {
			const user = state.users.get(userLogin);
			if (!user) return;
			favorites.forEach((v, k) => user.favorites.set(k, v));
		}
	},
	extraReducers: (builder) => {
		builder.addCase(addUser.fulfilled, (state, { payload: newUser }) => {
			state.users.set(newUser.login, newUser);
		});
	}
});

export const AppDataActions = appDataSlice.actions;
