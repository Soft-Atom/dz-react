import {
	BaseQueryFn,
	EndpointBuilder,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { baseApi } from '~shared/api/base-api';
import { MovieContractsDtoTypes } from '~shared/api/movie';
import { transformMovieDtoToMovie } from './movie.lib';
import { TMovie } from './movie.types';

class MovieApi {
	private readonly rootPath = '';
	private readonly api: ;
	constructor(api: typeof baseApi) {
		this.api = api.injectEndpoints({
			endpoints: (build) => ({
				findOne: this.findOne(build)
			})
		});
	}

	private findOneEndpoint(
		build: EndpointBuilder<
			BaseQueryFn<
				string | FetchArgs,
				unknown,
				FetchBaseQueryError,
				// eslint-disable-next-line @typescript-eslint/no-empty-object-type
				{},
				FetchBaseQueryMeta
			>,
			never,
			'api'
		>
	) {
		return build.query<TMovie, TMovie['id']>({
			query: (movieId) => ({
				url: `${this.rootPath}/${movieId}`
			}),
			transformResponse: (response: MovieContractsDtoTypes.TMovieDto) =>
				transformMovieDtoToMovie.parse(response)
		});
	}

	findOne() {
		const { useProductDetailsQuery } = this.api;
	}
}

export const movieApi = new MovieApi(baseApi);
