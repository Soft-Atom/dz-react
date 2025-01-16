import { createTransform } from 'redux-persist';
import { IAppDataState } from './app-data.slice';
import { TSerializedMap } from '~shared/lib/utility-types/serialized-map.type';

export const appDataTransform = createTransform<
	IAppDataState['users'],
	TSerializedMap<IAppDataState>['users']
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
		whitelist: ['users']
	}
);
