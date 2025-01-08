import { ToogleFavoritesButton } from '~features/favorites/toogle-favorites';
import { MovieCard } from '../movie-card';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import { SetRaiting } from '~features/movie/set-raiting';

export function MovieList({ data: { movies } }: IProps) {
	return (
		<div className={styles['wrap']}>
			{Array.from(movies.values()).map((m) => (
				<MovieCard
					key={m.id}
					movieShort={m}
					ratingAction={<SetRaiting movieShort={m} />}
					favoriteAction={<ToogleFavoritesButton movieShort={m} />}
				/>
			))}
		</div>
	);
}
