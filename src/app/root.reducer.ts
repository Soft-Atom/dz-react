import { combineReducers } from '@reduxjs/toolkit';
import { userSlice, userPersistedReducer } from '~entities/users';
import { authSlice } from '~entities/auth';
import { favoritesSlice } from '../entities/favorites';

export const rootReducer = combineReducers({
	[userSlice.name]: userPersistedReducer,
	[authSlice.name]: authSlice.reducer,
	[favoritesSlice.name]: favoritesSlice.reducer
});
