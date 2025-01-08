import { defer, LoaderFunctionArgs } from 'react-router-dom';
import { z } from 'zod';
import { movieApi, MovieApi, MovieTypes } from '~entities/movie';
import { BaseLoader } from '~shared/lib/react-router';
import { MovieContractsSchemas } from '~shared/api/movie';

const HomePageParamsSchema = MovieContractsSchemas.FindManyRequestSchema.extend(
	{
		q: z.string().min(3).default('Avengers: Endgame')
	}
);

class HomePageLoader extends BaseLoader {
	ArgsSchema = z.object({
		request: z.custom<Request>(),
		params: HomePageParamsSchema,
		context: z.any()
	});

	constructor(private readonly movieApi: MovieApi) {
		super();
	}

	async loader(args: LoaderFunctionArgs) {
		const { params, request } = this.ArgsSchema.parse(args);
		const endpoint = this.movieApi.getEndpoints().findMany;
		// const movie = await BaseLoader.baseLoader({ endpoint, params, request });
		const movies = new Promise<MovieTypes.TMoviesShort | undefined>((res) => {
			setTimeout(async () => {
				const data = await BaseLoader.baseLoader({
					endpoint,
					params,
					request
				});
				res(data);
			}, 10000);
		});

		return { data: movies };
	}
}

export const homePageLoader = new HomePageLoader(movieApi);
