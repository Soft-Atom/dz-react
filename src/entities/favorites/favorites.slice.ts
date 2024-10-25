import { createSlice } from '@reduxjs/toolkit';
import { TFavorites } from './favorites.types';

const initialState: TFavorites = {
	favorites: new Map()
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {}
});

export const FavoritesActions = favoritesSlice.actions;
