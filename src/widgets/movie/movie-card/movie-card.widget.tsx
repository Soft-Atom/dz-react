import type { IProps } from './interfaces';
import styles from './styles.module.css';
import { Anchor } from '~shared/ui/anchor';
import { AppRoutes } from '~shared/lib/react-router';

export function MovieCard({
	movieShort,
	ratingAction,
	favoriteAction
}: IProps) {
	return (
		<div className={styles['wrap']}>
			<div className={styles['poster-wrap']}>
				<img
					className={styles['poster']}
					src={movieShort.image}
					alt="Постер фильма"
				/>
				<div className={styles['rating-action']}>{ratingAction}</div>
			</div>
			<div className={styles['info-wrap']}>
				<Anchor href={AppRoutes.movies.byId(movieShort)}>
					{movieShort.name}
				</Anchor>
			</div>
			<div className={styles['favorite-action']}>{favoriteAction}</div>
		</div>
	);
}
