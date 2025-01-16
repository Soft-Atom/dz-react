import { createSelector } from '@reduxjs/toolkit';
import { TFavorite } from './favorites.types';

const selectBase = (state: TRootState) => state.favorites;

export const selectAll = createSelector(
	selectBase,
	({ favorites }) => favorites
);

export const selectHasMovie = createSelector(
	selectBase,
	(_: TRootState, id: TFavorite['id']) => id,
	({ favorites }, id) => favorites.has(id)
);
