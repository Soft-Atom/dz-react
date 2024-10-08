import { createTransform } from 'redux-persist';
import { IUserState, userSlice } from './user.slice';
import { TSerializedMap } from '~shared/lib/util-types/serialized-map.type';

export const usersTransform = createTransform<
	IUserState,
	TSerializedMap<IUserState>,
	{ users: IUserState }
>(
	(inState) => ({
		...inState,
		appUsers: inState.appUsers.size ? Array.from(inState.appUsers.values()) : []
	}),
	(outState) => ({
		...outState,
		appUsers: new Map(outState.appUsers.map((u) => [u.login, u]))
	}),

	{
		whitelist: [userSlice.name]
	}
);
