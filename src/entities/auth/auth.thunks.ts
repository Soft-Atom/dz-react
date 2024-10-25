import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserThunks, UserTypes } from '~entities/users/@x/auth';
import { TCurrentUser } from './auth.types';

export const register = createAsyncThunk<
	TCurrentUser,
	UserTypes.TAddUser,
	{ state: TRootState }
>('auth/register', async (registerData, thunkAPI) => {
	const actionRes = await thunkAPI.dispatch(UserThunks.addUser(registerData));
	if (UserThunks.addUser.fulfilled.match(actionRes)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { favorites, passwordHash, ...currentUser } = actionRes.payload;
		return currentUser;
	} else {
		console.error('Ошибка при добавлении пользователя', actionRes);
		throw new Error('d');
	}
});
