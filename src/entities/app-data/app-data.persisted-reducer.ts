import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appDataSlice } from './app-data.slice';
import { appDataTransform } from './app-data.transform';

export const appDataPersistedReducer = persistReducer(
	{
		key: appDataSlice.name,
		storage,
		transforms: [appDataTransform]
	},
	appDataSlice.reducer
);
