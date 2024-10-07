import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../entities/user/user.slice';

export const rootReducer = combineReducers({
	//persistReducer(
	[userSlice.name]:
		//{ key: userSlice.name, storage, transforms: [usersTransform] },
		userSlice.reducer
	//)
});
