import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUserRegister } from './user.types';
import { USER_ALREADY_EXISTS } from './user.constants';
import { genSalt, hash } from 'bcryptjs';

export const registerUserThunk = createAsyncThunk<
	void,
	TUserRegister,
	{ state: TRootState }
>('user/register', async ({ login, password }, thunkAPI) => {
	const { users } = thunkAPI.getState();
	if (users.appUsers.has(login))
		return thunkAPI.rejectWithValue({ errorMessage: USER_ALREADY_EXISTS });
	const passwordHash = await hash(password, await genSalt(10));
	thunkAPI.dispatch();
});
