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
import { rootReducer } from './root.reducer';
import { userSlice } from '~entities/user/user.slice';
import { favoritesSlice } from '~entities/favorites/favorites.slice';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [userSlice.name, favoritesSlice.name]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				ignoredPaths: [userSlice.reducerPath, favoritesSlice.reducerPath]
			}
		})
});

export const appPersistor = persistStore(appStore);
