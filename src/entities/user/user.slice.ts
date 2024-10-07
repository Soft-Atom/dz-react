import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from './user.types';

export interface IUserState {
	appUsers: Map<TUser['login'], TUser>;
	currentUser?: TUser | null;
}

const initialState: IUserState = { appUsers: new Map(), currentUser: null };

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, { payload: user }: PayloadAction<TUser>) => {
			if (state.appUsers.has(user.login)) return;
			state.appUsers.set(user.login, user);
		}
	}
});

export const usersActions = userSlice.actions;
