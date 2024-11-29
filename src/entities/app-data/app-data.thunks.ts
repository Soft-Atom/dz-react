import { createAsyncThunk } from '@reduxjs/toolkit';
import { genSalt, hash } from 'bcryptjs';
import { AppErrors, handleAppError } from '~shared/lib/app-error';
import {
	TAddUser,
	TPersistedUser,
	TRegisterUser,
	TUser
} from './app-data.types';

export const addUser = createAsyncThunk<
	TPersistedUser,
	TAddUser,
	TThunkApiConfig
>(
	'user/addUser',
	async ({ password, favorites = new Map(), ...addUserData }, thunkAPI) => {
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
				favorites,
				...addUserData
			};
		} catch {
			return thunkAPI.rejectWithValue(AppErrors.USER.CREATE_ERROR);
		}
	}
);

export const registerUser = createAsyncThunk<
	TUser,
	TRegisterUser,
	TThunkApiConfig
>('auth/register', async (registerData, thunkAPI) => {
	const payloadRes = await thunkAPI.dispatch(addUser(registerData));
	if (addUser.fulfilled.match(payloadRes)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { passwordHash, ...currentUser } = payloadRes.payload;
		return currentUser;
	}
	return thunkAPI.rejectWithValue(handleAppError(payloadRes.payload));
});

// export const loginUserThunk = createAsyncThunk<
// 	void,
// 	TUserLogin,
// 	{ state: TRootState }
// >('user/login', async ({ login, password }, thunkAPI) => {
// 	const {
// 		users: { appUsers }
// 	} = thunkAPI.getState();
// 	const foundUser = appUsers.get(login);
// 	if (!foundUser || !(await compare(password, foundUser.passwordHash)))
// 		return thunkAPI.rejectWithValue({ errorMessage: WRONG_LOGIN_OR_PASSWORD });
// 	thunkAPI.dispatch(usersActions.setCurrentUser(foundUser));
// });
