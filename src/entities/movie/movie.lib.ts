import { TMovie, TMovieDto, TMovies, TMoviesDto } from './movie.types';

export function movieMapper({ short, imdbId }: TMovieDto): TMovie {
	const {
		aggregateRating: { ratingValue },
		'@type': type,
		...rest
	} = short;
	return {
		id: imdbId,
		type,
		ratingValue,
		...rest
	};
}

export function moviesMapper({ description }: TMoviesDto): TMovies {
	return new Map(
		description.map((x) => {
			const {
				'#IMDB_ID': id,
				'#TITLE': name,
				'#IMG_POSTER': image,
				'#RANK': ratingValue
			} = x;
			return [id, { id, name, image, ratingValue }];
		})
	);
}
