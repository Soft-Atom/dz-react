import {
	baseApi,
	TBaseApi,
	TEndpointBuilder,
	TExtendedApi
} from '~shared/api/base-api';
import { MovieContractsDtoTypes } from '~shared/api/movie';
import { transformMovieDtoToMovie } from './movie.lib';
import { TMovie } from './movie.types';

type TMovieApiDefinitions = {
	findOne: ReturnType<MovieApi['findOneEndpoint']>;
};

class MovieApi {
	private readonly rootPath = '';
	private readonly api: TExtendedApi<TBaseApi, TMovieApiDefinitions>;

	constructor(api: TBaseApi) {
		this.api = api.injectEndpoints({
			endpoints: (build) => ({
				findOne: this.findOneEndpoint(build)
			})
		});
	}

	private findOneEndpoint(build: TEndpointBuilder<TBaseApi>) {
		return build.query<TMovie, TMovie['id']>({
			query: (movieId) => ({
				url: `${this.rootPath}/`,
				params: { tt: movieId }
			}),
			transformResponse: (response: MovieContractsDtoTypes.TMovieDto) =>
				transformMovieDtoToMovie.parse(response)
		});
	}

	findOne(id: TMovie['id']) {
		return this.api.useFindOneQuery(id);
	}
}

export const movieApi = new MovieApi(baseApi);
