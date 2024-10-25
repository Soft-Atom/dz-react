import { MovieContractsDto } from '~shared/api/movie';

export const transformMovieDtoToMovie =
	MovieContractsDto.MovieDtoSchema.transform(({ short, imdbId }) => {
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
	});

export const transformMoviesDtoToMovies =
	MovieContractsDto.MoviesDtoSchema.transform(({ description }) => ({
		movies: new Map(
			description.map((x) => {
				const {
					'#IMDB_ID': id,
					'#TITLE': name,
					'#IMG_POSTER': image,
					'#RANK': ratingValue
				} = x;
				return [id, { id, name, image, ratingValue }];
			})
		)
	}));
