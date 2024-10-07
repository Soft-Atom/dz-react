import { createTransform } from 'redux-persist';
import { IUserState, userSlice } from './user.slice';
import { TSerializedMap } from '~shared/lib/util-types/serialized-map.type';

export const usersTransform = createTransform<
	IUserState | undefined,
	TSerializedMap<IUserState> | undefined
>(
	(inState) =>
		inState && {
			...inState,
			appUsers: Array.from(
				inState.appUsers.size ? inState.appUsers.values() : []
			)
		},
	(outState) =>
		outState && {
			...outState,
			appUsers: new Map(outState.appUsers.map((u) => [u.login, u]))
		},

	{
		whitelist: [userSlice.name]
	}
);
