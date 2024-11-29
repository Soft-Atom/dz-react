import { createSelector } from '@reduxjs/toolkit';
import { TPersistedUser } from './app-data.types';

//правильно ли я тут сделал?
export const selectAll = createSelector(
	(state: TRootState) => state.users.users,
	(appUsers) => appUsers.values()
);
// и тут
export const selecByLogin = createSelector(
	(state: TRootState) => state.users.users,
	(_: TRootState, login: TPersistedUser['login']) => login,
	(appUsers, login) => appUsers.get(login)
);
