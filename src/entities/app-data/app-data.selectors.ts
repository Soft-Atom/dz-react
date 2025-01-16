import { createSelector } from '@reduxjs/toolkit';
import { TPersistedUser } from './app-data.types';

//правильно ли я тут сделал?
export const selectUserFavorites = createSelector(
	(state: TRootState) => state.appData.users,
	(_: TRootState, login: TPersistedUser['login']) => login,
	(appUsers, login) => ({
		favorites: appUsers.get(login)?.favorites ?? new Map()
	})
);
