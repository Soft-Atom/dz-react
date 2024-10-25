import { createSlice } from '@reduxjs/toolkit';
import { TUser } from './users.types';
import { addUser } from './users.thunks';

export interface IUserState {
	appUsers: Map<TUser['login'], TUser>;
}

const initialState: IUserState = {
	appUsers: new Map()
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addUser.fulfilled, (state, { payload: newUser }) => {
			state.appUsers.set(newUser.login, newUser);
		});
	}
});

export const UsersActions = userSlice.actions;
