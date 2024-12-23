import { combineReducers } from '@reduxjs/toolkit';
import { appDataSlice, appDataPersistedReducer } from '~entities/app-data';
import { authSlice } from '~entities/auth';
import { favoritesSlice } from '~entities/favorites';
import { baseApi } from '~shared/api/base-api';

export const rootReducer = combineReducers({
	[appDataSlice.name]: appDataPersistedReducer,
	[authSlice.name]: authSlice.reducer,
	[favoritesSlice.name]: favoritesSlice.reducer,
	[baseApi.reducerPath]: baseApi.reducer
});
