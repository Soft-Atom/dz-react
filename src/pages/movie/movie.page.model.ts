import { LoaderFunctionArgs } from 'react-router-dom';
import { z } from 'zod';
import { movieApi, MovieApi, MovieSchemas } from '~entities/movie';
import { BaseLoader } from '~shared/lib/react-router';

const MoviePageParamsSchema = MovieSchemas.MovieSchema.pick({
	id: true
}).transform(({ id }) => ({ tt: id }));

class MoviePageLoader extends BaseLoader {
	ArgsSchema;

	constructor(private readonly movieApi: MovieApi) {
		super();
		this.ArgsSchema = z.object({
			request: z.custom<Request>(),
			params: MoviePageParamsSchema,
			context: z.any()
		});
	}

	async loader(args: LoaderFunctionArgs) {
		const { request, params } = this.ArgsSchema.parse(args);
		const endpoint = this.movieApi.getEndpoints().findOne;
		const movie = BaseLoader.baseLoader({ endpoint, params, request });
		return { data: movie };
	}
}

export const moviePageLoader = new MoviePageLoader(movieApi);
