import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserThunks } from '~entities/users/@x/auth';
import { TCurrentUser, TRegister } from './auth.types';

export const register = createAsyncThunk<
	TCurrentUser,
	TRegister,
	TThunkApiConfig
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
>('auth/register', async ({ confirmPassword, ...registerData }, thunkAPI) => {
	const payloadRes = await thunkAPI.dispatch(UserThunks.addUser(registerData));
	if (UserThunks.addUser.fulfilled.match(payloadRes)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { favorites, passwordHash, ...currentUser } = payloadRes.payload;
		return currentUser;
	}
	return thunkAPI.rejectWithValue(payloadRes.payload);
});
