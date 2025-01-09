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
			{ payload: { favorites } }: PayloadAction<TFavorites>
		) => {
			state.favorites = favorites;
		}
	}
});

export const FavoritesActions = favoritesSlice.actions;
