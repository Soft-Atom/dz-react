import { createAsyncThunk } from '@reduxjs/toolkit';
import { genSalt, hash } from 'bcryptjs';
import { AppError, AppErrors } from '~shared/lib/app-error';
import { TRegister, TUser } from './users.types';

export const registerThunk = createAsyncThunk<
	TUser | undefined,
	TRegister,
	TThunkApiConfig
>(
	'user/addUser',
	async ({ password, favorites = new Map(), ...addUserData }, thunkAPI) => {
		const {
			users: { appUsers }
		} = thunkAPI.getState();
		if (appUsers.has(addUserData.login)) {
			thunkAPI.rejectWithValue(new AppError(AppErrors.USER.ALREADY_EXISTS));
			// return null;
		}
		try {
			const passwordHash = await hash(password, await genSalt(10));
			return {
				passwordHash,
				favorites,
				...addUserData
			};
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			thunkAPI.rejectWithValue(new AppError(AppErrors.USER.CREATE_ERROR));
			// return null;
		}
	}
);

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
