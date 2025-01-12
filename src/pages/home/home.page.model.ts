import { LoaderFunctionArgs } from 'react-router-dom';
import { z } from 'zod';
import { movieApi, MovieApi } from '~entities/movie';
import { BaseLoader } from '~shared/lib/react-router';
import { MovieContractsSchemas } from '~shared/api/movie';

const HomePageParamsSchema = MovieContractsSchemas.FindManyRequestSchema.extend(
	{
		q: z.string().min(3).default('Avengers: Endgame')
	}
);

class HomePageLoader extends BaseLoader {
	ArgsSchema;
	SearchParamsSchema;

	constructor(private readonly movieApi: MovieApi) {
		super();
		this.ArgsSchema = z.object({
			request: z.custom<Request>(),
			context: z.any()
		});
		this.SearchParamsSchema = HomePageParamsSchema;
	}

	async loader(args: LoaderFunctionArgs) {
		const { request } = this.ArgsSchema.parse(args);
		const searchParams = new URL(request.url).searchParams;
		const params = this.SearchParamsSchema.parse(
			Object.fromEntries(searchParams.entries())
		);
		const endpoint = this.movieApi.getEndpoints().findMany;
		const movies = BaseLoader.baseLoader({ endpoint, params, request });
		// const movies = new Promise<MovieTypes.TMoviesShort | undefined>((res) => {
		// 	setTimeout(async () => {
		// 		const data = await BaseLoader.baseLoader({
		// 			endpoint,
		// 			params,
		// 			request
		// 		});
		// 		res(data);
		// 	}, 10000);
		// });
		return { data: movies };
	}
}

export const homePageLoader = new HomePageLoader(movieApi);
