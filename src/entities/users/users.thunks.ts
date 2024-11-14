import { createAsyncThunk } from '@reduxjs/toolkit';
import { genSalt, hash } from 'bcryptjs';
import { AppErrors } from '~shared/lib/app-error';
import { TAddUser, TUser } from './users.types';

export const addUser = createAsyncThunk<TUser, TAddUser, TThunkApiConfig>(
	'user/addUser',
	async ({ password, favorites = new Map(), ...addUserData }, thunkAPI) => {
		const {
			users: { appUsers }
		} = thunkAPI.getState();
		if (appUsers.has(addUserData.login)) {
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
