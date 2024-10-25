import { createTransform } from 'redux-persist';
import type { TFavorites } from './favorites.types';
import { TSerializedMap } from '~shared/lib/utility-types';

export const favoritesTransform = createTransform<
	TFavorites['favorites'],
	TSerializedMap<TFavorites>['favorites']
>(
	(inbound) => Array.from(inbound.values()),
	(outState) => new Map(outState.map((f) => [f.id, f])),
	{
		whitelist: ['favorites']
	}
);
