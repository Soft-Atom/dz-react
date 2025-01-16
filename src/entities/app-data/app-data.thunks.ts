import { createAsyncThunk } from '@reduxjs/toolkit';
import { compare, genSalt, hash } from 'bcryptjs';
import { AppErrors, handleAppError } from '~shared/lib/app-error';
import {
	TAddUser,
	TLogin,
	TPersistedUser,
	TRegisterUser,
	TUser
} from './app-data.types';

export const addUser = createAsyncThunk<
	TPersistedUser,
	TAddUser,
	TThunkApiConfig
>('user/addUser', async ({ password, ...addUserData }, thunkAPI) => {
	const {
		appData: { users }
	} = thunkAPI.getState();
	if (users.has(addUserData.login)) {
		return thunkAPI.rejectWithValue(AppErrors.USER.ALREADY_EXISTS);
	}
	try {
		const passwordHash = await hash(password, await genSalt(10));
		return {
			passwordHash,
			favorites: new Map(),
			...addUserData
		};
	} catch {
		return thunkAPI.rejectWithValue(AppErrors.USER.CREATE_ERROR);
	}
});

export const registerUser = createAsyncThunk<
	TUser,
	TRegisterUser,
	TThunkApiConfig
>('auth/register', async ({ confirmPassword, ...registerData }, thunkAPI) => {
	if (confirmPassword !== registerData.password) {
		thunkAPI.rejectWithValue(AppErrors.AUTH.WRONG_CONFIRM_PASSWORD);
	}
	const payloadRes = await thunkAPI.dispatch(addUser(registerData));
	if (addUser.fulfilled.match(payloadRes)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { passwordHash, ...currentUser } = payloadRes.payload;
		return currentUser;
	}
	return thunkAPI.rejectWithValue(handleAppError(payloadRes.payload));
});

export const loginUser = createAsyncThunk<TUser, TLogin, TThunkApiConfig>(
	'auth/register',
	async ({ login, password }, thunkAPI) => {
		const {
			appData: { users }
		} = thunkAPI.getState();
		const foundUser = users.get(login);
		if (!foundUser || !(await compare(password, foundUser.passwordHash))) {
			return thunkAPI.rejectWithValue(AppErrors.USER.WRONG_CRED);
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { passwordHash, ...currentUser } = foundUser;
		return currentUser;
	}
);
