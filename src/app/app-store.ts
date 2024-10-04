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
import { rootReducer } from './root-reducer';
import { usersSlice } from '../entities/user/users.slice';
import { usersTransform } from '../entities/user/users.transform';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [usersSlice.name, 'favorites'],
	transforms: [usersTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
});

export const appPersistor = persistStore(appStore);
