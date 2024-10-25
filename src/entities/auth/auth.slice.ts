import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCurrentUser } from './auth.types';

export interface IAuthState {
	currentUser: TCurrentUser | null;
	loading: boolean;
	erroMessage?: string;
}

const initialState: IAuthState = {
	currentUser: null,
	loading: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, { payload }: PayloadAction<TCurrentUser>) => {
			state.currentUser = payload;
			state.loading = false;
			state.erroMessage = undefined;
		},
		logout: (state) => {
			state.currentUser = null;
			state.loading = false;
			state.erroMessage = undefined;
		}
	}
});

export const AuthActions = authSlice.actions;
