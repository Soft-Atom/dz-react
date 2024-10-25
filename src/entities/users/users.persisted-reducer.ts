import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './users.slice';
import { usersTransform } from './users.transform';

export const userPersistedReducer = persistReducer(
	{
		key: userSlice.name,
		storage,
		transforms: [usersTransform]
	},
	userSlice.reducer
);
