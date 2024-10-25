import { createSelector } from '@reduxjs/toolkit';
import { TUser } from './users.types';

//правильно ли я тут сделал?
export const selectAll = createSelector(
	(state: TRootState) => state.users.appUsers,
	(appUsers) => Array.from(appUsers.values())
);
// и тут
export const selecByLogin = createSelector(
	(state: TRootState) => state.users.appUsers,
	(_: TRootState, login: TUser['login']) => login,
	(appUsers, login) => appUsers.get(login)
);
