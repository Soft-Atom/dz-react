import { createSlice } from '@reduxjs/toolkit';
import { TPersistedUser } from './app-data.types';
import { addUser } from './app-data.thunks';

export interface IAppDataState {
	users: Map<TPersistedUser['login'], TPersistedUser>;
}

const initialState: IAppDataState = {
	users: new Map()
};

export const appDataSlice = createSlice({
	name: 'appData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(addUser.fulfilled, (state, { payload: newUser }) => {
			state.users.set(newUser.login, newUser);
		});
	}
});

export const AppDataActions = appDataSlice.actions;
