import { LoaderFunctionArgs } from 'react-router-dom';
import { movieApi, MovieApi } from '~entities/movie';
import { BaseLoader } from '~shared/lib/react-router';

class HomePageLoader extends BaseLoader {
	constructor(private readonly movieApi: MovieApi) {
		super();
	}

	async loaderMovie({ request }: LoaderFunctionArgs) {
		const endpoint = this.movieApi.getEndpoints().findOne;
		const arg = { id: 'tt4154796' };
		const movie = await HomePageLoader.loader({ endpoint, arg, request });
		console.log(movie);
		return movie;
	}

	async loaderMovies() {}
}

export const homePageLoader = new HomePageLoader(movieApi);
