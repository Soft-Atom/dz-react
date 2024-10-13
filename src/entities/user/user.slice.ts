import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCurrentUser, TUser } from './user.types';

export interface IUserState {
	appUsers: Map<TUser['login'], TUser>;
	currentUser: TCurrentUser | null;
	loading: boolean;
	erroMessage?: string;
}

const initialState: IUserState = {
	appUsers: new Map(),
	currentUser: null,
	loading: false
};

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
		setCurrentUser: (state, { payload }: PayloadAction<TCurrentUser>) => {
			state.currentUser = payload;
		},
		logout: (state) => {
			state.currentUser = null;
		}
	}
});

export const usersActions = userSlice.actions;
