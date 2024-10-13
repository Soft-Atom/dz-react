import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../entities/user/user.slice';
import { userPersistedReducer } from '../entities/user/uesr.persisted-reucer';

export const rootReducer = combineReducers({
	[userSlice.name]: userPersistedReducer
});
