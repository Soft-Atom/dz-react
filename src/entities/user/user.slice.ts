import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from './user.types';

export interface IUserState {
	appUsers: Map<TUser['login'], TUser>;
	currentUser?: TUser['login'];
}

const initialState: IUserState = { appUsers: new Map() };

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (
			state,
			{ payload: { login, passwordHash } }: PayloadAction<TUser>
		) => {
			state.appUsers.set(login, { login, passwordHash });
		},
		setCurrentUser: (state, { payload }: PayloadAction<TUser['login']>) => {
			state.appUsers.set(login, { login, passwordHash });
		}
	}
});

export const usersActions = userSlice.actions;
