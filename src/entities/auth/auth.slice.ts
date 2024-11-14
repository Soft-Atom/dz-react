import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCurrentUser } from './auth.types';

export interface IAuthState {
	currentUser: TCurrentUser | null;
}

const initialState: IAuthState = {
	currentUser: null
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, { payload }: PayloadAction<TCurrentUser>) => {
			state.currentUser = payload;
		},
		logout: (state) => {
			state.currentUser = null;
		}
	}
});

export const AuthActions = authSlice.actions;
