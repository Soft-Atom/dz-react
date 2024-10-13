import { createSlice } from '@reduxjs/toolkit';

export interface IFavoritesState {
	favoriteMovies: Map<string, { id: string }>;
}

const initialState: IFavoritesState = {
	favoriteMovies: new Map()
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {}
});

export const favoritessActions = favoritesSlice.actions;
