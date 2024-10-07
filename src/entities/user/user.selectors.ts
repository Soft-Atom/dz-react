import { createSelector } from '@reduxjs/toolkit';
import { TUser } from './user.types';

//правильно ли я тут сделал?
export const selectUsers = createSelector(
	(state: TRootState) => state.users.appUsers,
	(users) => Array.from(users.values())
);
// и тут
export const selectUserByLogin = createSelector(
	(state: TRootState) => state.users.appUsers,
	(_: TRootState, login: TUser['login']) => login,
	(users, login) => users.get(login)
);
