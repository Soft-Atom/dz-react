import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth.slice';

export const authPersistedReducer = persistReducer(
	{
		key: authSlice.name,
		storage,
		whitelist: ['currentUser']
	},
	authSlice.reducer
);
