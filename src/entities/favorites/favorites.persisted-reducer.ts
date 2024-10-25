import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesSlice } from './favorites.slice';
import { favoritesTransform } from './favorites.transform';

export const favoritesPersistedReducer = persistReducer(
	{
		key: favoritesSlice.name,
		storage,
		transforms: [favoritesTransform]
	},
	favoritesSlice.reducer
);
