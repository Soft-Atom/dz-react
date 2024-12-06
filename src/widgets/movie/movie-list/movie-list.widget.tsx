import { transformMoviesDtoToMovies } from '../../../entities/movie/movie.lib';
import { ToogleFavoritesButton } from '../../../features/favorites/toogle-favorites/toogle-favorites.feature';
import { MovieCard } from '../movie-card';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import { SetRaiting } from '~features/movie/set-raiting';
import MOCK_MOVIES_JSON from '~shared/api/movie/mock/movies.json';

// eslint-disable-next-line no-empty-pattern
export function MovieList({}: IProps) {
	const res = transformMoviesDtoToMovies.safeParse(MOCK_MOVIES_JSON);
	if (!res.success) return <></>;
	const { movies } = res.data;
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
