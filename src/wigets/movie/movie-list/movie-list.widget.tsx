import { TMovies } from '~entities/movie/movie.types';
import { Raiting } from '~feature/movie/raiting';
import { MovieCard } from '../movie-card';
import type { IProps } from './interfaces';
import styles from './styles.module.css';

// eslint-disable-next-line no-empty-pattern
export function MovieList({}: IProps) {
	const movies: TMovies = new Map([
		[
			'tt4154796',
			{
				id: 'tt4154796',
				name: 'hey',
				image:
					'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_599,c_limit/b1f9d09b-45ac-4e00-8d58-0e38eafe68e4/nike-just-do-it.jpg',
				ratingValue: 123
			}
		],
		[
			'tt4154797',
			{
				id: 'tt4154797',
				name: 'Hello Hello Hello v v Hellov Hellov Hello Hello',
				image:
					'https://effect.habr.com/a/n_OutT03pMwN0_l7JKI_9Q3wjq9DlWDKAZV6Kxmnm3d5rlRCbSO5lMqEACZKqF2H2mgVpKGg3SBlcnY4PfpHj22ZnB9X-q5kfUhgkdZe5aODclrjbd5IWQ4fbTs99Thz7l8BY7fJnrARoxUcFJ3ddKkmk3w2P-LmnSkIpkTnHqapWqaTPAW-zL-QzOJsDLICwy6ykHMQzrxgg2NNZ8_yfSDAYBQkZoDOIek',
				ratingValue: 123
			}
		]
	]);
	return (
		<div className={styles['wrap']}>
			{Array.from(movies.values()).map((m) => (
				<MovieCard
					key={m.id}
					movieShort={m}
					ratingAction={<Raiting movieShort={m} />}
					favoriteAction={<>ghbdtn</>}
				/>
			))}
		</div>
	);
}
