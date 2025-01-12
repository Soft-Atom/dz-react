import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFavorites } from './favorites.types';
import { MovieTypes } from '../movie/@x/favorites';

const initialState: TFavorites = {
	favorites: new Map()
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toogleFavorites: (
			state,
			{ payload: movieShort }: PayloadAction<MovieTypes.TMovieShort>
		) => {
			if (state.favorites.has(movieShort.id)) {
				state.favorites.delete(movieShort.id);
			} else {
				state.favorites.set(movieShort.id, movieShort);
			}
		},
		setFavorites: (
			state,
			{ payload }: PayloadAction<TFavorites['favorites']>
		) => {
			state.favorites = payload;
		},
		clearFavorites: (state) => {
			state.favorites = initialState.favorites;
		}
	}
});

export const FavoritesActions = favoritesSlice.actions;
