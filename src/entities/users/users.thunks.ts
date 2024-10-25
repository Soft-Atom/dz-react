import { createAsyncThunk } from '@reduxjs/toolkit';
import { genSalt, hash } from 'bcryptjs';
import { AppError, AppErrors } from '~shared/lib/app-error';
import { TAddUser, TUser } from './users.types';

export const addUser = createAsyncThunk<TUser, TAddUser, { state: TRootState }>(
	'user/addUser',
	async ({ password, favorites = new Map(), ...addUserData }, thunkAPI) => {
		const { users } = thunkAPI.getState();
		if (users.appUsers.has(addUserData.login))
			throw new AppError(AppErrors.USER.ALREADY_EXISTS);
		try {
			const passwordHash = await hash(password, await genSalt(10));
			return {
				passwordHash,
				favorites,
				...addUserData
			};
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			throw new AppError(AppErrors.USER.CREATE_ERROR);
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
