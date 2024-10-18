import { createTransform } from 'redux-persist';
import { IFavoritesState, favoritesSlice } from './favorites.slice';
import { TSerializedMap } from '~shared/lib/utils';

export const favoritesTransform = createTransform<
	IFavoritesState,
	TSerializedMap<IFavoritesState>,
	{ [favoritesSlice.name]: IFavoritesState }
>(
	(inState) => ({
		...inState,
		favoriteMovies: inState.favoriteMovies.size
			? Array.from(inState.favoriteMovies.values())
			: []
	}),
	(outState) => ({
		...outState,
		favoriteMovies: new Map(outState.favoriteMovies.map((f) => [f.id, f]))
	}),

	{
		whitelist: [favoritesSlice.name]
	}
);
