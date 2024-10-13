import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUserLogin, TUserRegister } from './user.types';
import { USER_ALREADY_EXISTS, WRONG_LOGIN_OR_PASSWORD } from './user.constants';
import { compare, genSalt, hash } from 'bcryptjs';
import { usersActions } from './user.slice';

export const registerUserThunk = createAsyncThunk<
	void,
	TUserRegister,
	{ state: TRootState }
>('user/register', async ({ password, ...userRegisteData }, thunkAPI) => {
	const { users } = thunkAPI.getState();
	if (users.appUsers.has(userRegisteData.login))
		return thunkAPI.rejectWithValue({ errorMessage: USER_ALREADY_EXISTS });
	const passwordHash = await hash(password, await genSalt(10));
	thunkAPI.dispatch(usersActions.addUser({ ...userRegisteData, passwordHash }));
	thunkAPI.dispatch(usersActions.setCurrentUser(userRegisteData));
});

export const loginUserThunk = createAsyncThunk<
	void,
	TUserLogin,
	{ state: TRootState }
>('user/register', async ({ login, password }, thunkAPI) => {
	const {
		users: { appUsers }
	} = thunkAPI.getState();
	const foundUser = appUsers.get(login);
	if (!foundUser || !(await compare(password, foundUser.passwordHash)))
		return thunkAPI.rejectWithValue({ errorMessage: WRONG_LOGIN_OR_PASSWORD });
	thunkAPI.dispatch(usersActions.setCurrentUser(foundUser));
});
