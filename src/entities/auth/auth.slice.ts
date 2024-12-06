import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCurrentUser } from './auth.types';
import { register } from './auth.thunks';

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
	},
	extraReducers: (builder) => {
		builder.addCase(register.fulfilled, (state, { payload }) => {
			state.currentUser = payload;
		});
	}
});

export const AuthActions = authSlice.actions;
