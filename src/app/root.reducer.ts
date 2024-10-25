import { combineReducers } from '@reduxjs/toolkit';
import { userSlice, userPersistedReducer } from '~entities/users';
import { authPersistedReducer, authSlice } from '~entities/auth';
import {
	favoritesSlice,
	favoritesPersistedReducer
} from '../entities/favorites';

export const rootReducer = combineReducers({
	[userSlice.name]: userPersistedReducer,
	[authSlice.name]: authPersistedReducer,
	[favoritesSlice.name]: favoritesPersistedReducer
});
