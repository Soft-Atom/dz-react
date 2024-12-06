import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDataThunks } from '~entities/app-data/@x/auth';
import { handleAppError } from '~shared/lib/app-error';
import { TCurrentUser, TRegister } from './auth.types';

export const register = createAsyncThunk<
	TCurrentUser,
	TRegister,
	TThunkApiConfig
>('auth/register', async (registerData, thunkAPI) => {
	const payloadRes = await thunkAPI.dispatch(
		AppDataThunks.registerUser(registerData)
	);
	if (AppDataThunks.registerUser.fulfilled.match(payloadRes)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { favorites, ...currentUser } = payloadRes.payload;
		return currentUser;
	}
	return thunkAPI.rejectWithValue(handleAppError(payloadRes.payload));
});
