import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from './user.types';

export interface IUsersState {
	us: Map<TUser['login'], TUser>;
	currentUser?: TUser;
}

const initialState: IUsersState = { us: new Map() };

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, { payload: user }: PayloadAction<TUser>) => {
			if (state.us.has(user.login)) return;
			state.us.set(user.login, user);
		}
	}
});

export const usersActions = usersSlice.actions;
