import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { enableMapSet } from 'immer';
import { rootReducer } from './root.reducer';
import { appDataSlice } from '~entities/app-data';
import { favoritesSlice } from '~entities/favorites';
import { authSlice } from '~entities/auth';
import { baseApi } from '~shared/api/base-api';

enableMapSet();

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [authSlice.name]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				ignoredActionPath: ['payload.favorites'],
				ignoredPaths: [appDataSlice.reducerPath, favoritesSlice.reducerPath]
			}
		}).concat(baseApi.middleware)
});

export const appPersistor = persistStore(appStore);
