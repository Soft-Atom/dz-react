import { createTransform } from 'redux-persist';
import { IUserState } from './user.slice';
import { TSerializedMap } from '~shared/lib/utils/serialized-map.type';

export const usersTransform = createTransform<
	IUserState['appUsers'],
	TSerializedMap<IUserState>['appUsers']
>(
	(inbound) => (inbound.size ? Array.from(inbound.values()) : []),
	(outbound) => new Map(outbound.map((u) => [u.login, u])),
	{
		whitelist: ['appUsers']
	}
);
