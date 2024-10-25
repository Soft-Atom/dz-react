import { createTransform } from 'redux-persist';
import { IUserState } from './users.slice';
import { TSerializedMap } from '~shared/lib/utility-types/serialized-map.type';

export const usersTransform = createTransform<
	IUserState['appUsers'],
	TSerializedMap<IUserState>['appUsers']
>(
	(inbound) =>
		Array.from(inbound.values()).map(({ favorites, ...uData }) => ({
			...uData,
			favorites: Array.from(favorites.values())
		})),
	(outbound) =>
		new Map(
			outbound.map(({ favorites, ...uData }) => [
				uData.login,
				{ ...uData, favorites: new Map(favorites.map((x) => [x.id, x])) }
			])
		),
	{
		whitelist: ['appUsers']
	}
);
