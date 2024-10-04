import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from '../entities/user/users.slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { usersTransform } from '../entities/user/users.transform';

export const rootReducer = combineReducers({
	// ...[appUsersSlice].reduce(
	// 	(res, slice) => ({
	// 		...res,
	// 		[slice.name]: slice.reducer
	// 	}),
	// 	{}
	// )
	[usersSlice.name]:
		// persistReducer(
		// { key: 'user', storage, transforms: [usersTransform] },
		usersSlice.reducer
	// )
});
