import { useAppSelector } from '~shared/lib/redux';
import { FavoritesSelectors } from '..';
import { Anchor } from '~shared/ui/anchor';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '~shared/lib/react-router';
import styles from './styles.module.css';

export function FavoritesLink() {
	const favorites = useAppSelector(FavoritesSelectors.selectAll);
	return (
		<Anchor component={NavLink} to={AppRoutes.favorites.fullPath()}>
			Мои фильмы
			{favorites.size > 0 && (
				<span className={styles['favorites-count']}>{favorites.size}</span>
			)}
		</Anchor>
	);
}
