import { Button, ButtonAppearance } from '~shared/ui/button';
import type { IProps } from './interfaces';
import { Icon, IconSet } from '~shared/ui/icon';
import { useAppSelector } from '../../../shared/lib/redux';
import { FavoritesSelectors } from '../../../entities/favorites';
import { useSelector } from 'react-redux';

export function ToogleFavorites({ movieId }: IProps) {
	const isInFavorites = useSelector(
		FavoritesSelectors.selectHasMovie(_, movieId)
	);
	return (
		<Button appearance={ButtonAppearance.rating}>
			<Icon src={IconSet.star} />
		</Button>
	);
}
