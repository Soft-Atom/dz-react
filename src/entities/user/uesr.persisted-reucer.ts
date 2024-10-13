import { persistReducer } from 'redux-persist';
import { userSlice } from './user.slice';
import storage from 'redux-persist/lib/storage';
import { usersTransform } from './user.transform';

export const userPersistedReducer = persistReducer(
	{
		key: userSlice.name,
		storage,
		transforms: [usersTransform],
		blacklist: ['loading', 'errorMessage']
	},
	userSlice.reducer
);
