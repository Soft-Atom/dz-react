import {
	baseApi,
	TBaseApi,
	TEndpointBuilder,
	TExtendedApi
} from '~shared/api/base-api';
import { MovieContractsTypes } from '~shared/api/movie';
import {
	transformMovieDtoToMovie,
	transformMoviesDtoToMovies
} from './movie.lib';
import { TMovie, TMoviesShort } from './movie.types';
import { zodValidate } from '~shared/lib/validation/zod-validate.helper';

type TMovieApiDefinitions = {
	findOne: ReturnType<MovieApi['findOneEndpoint']>;
	findMany: ReturnType<MovieApi['findManyEndpoint']>;
};

export class MovieApi {
	private readonly rootPath = '';
	private readonly api: TExtendedApi<TBaseApi, TMovieApiDefinitions>;

	constructor(api: TBaseApi) {
		this.api = api.injectEndpoints({
			endpoints: (build) => ({
				findOne: this.findOneEndpoint(build),
				findMany: this.findManyEndpoint(build)
			})
		});
	}

	private findOneEndpoint(build: TEndpointBuilder<TBaseApi>) {
		return build.query<TMovie, MovieContractsTypes.TMovieFindOneRequest>({
			query: (params) => ({
				url: `${this.rootPath}/`,
				params
			}),
			transformResponse: (response: MovieContractsTypes.TFindOneResponse) =>
				zodValidate(response, transformMovieDtoToMovie)
		});
	}

	private findManyEndpoint(build: TEndpointBuilder<TBaseApi>) {
		return build.query<TMoviesShort, MovieContractsTypes.TMovieFindManyRequest>(
			{
				query: (params) => ({
					url: `${this.rootPath}/`,
					params
				}),
				transformResponse: (response: MovieContractsTypes.TFindManyResponse) =>
					zodValidate(response, transformMoviesDtoToMovies)
			}
		);
	}

	getEndpoints() {
		return this.api.endpoints;
	}
}

export const movieApi = new MovieApi(baseApi);
