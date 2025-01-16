import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MoviePageSkeleton } from './movie.page.skeleton';
import { AppRoutes } from '~shared/lib/react-router';
import { moviePageLoader } from './movie.page.model';

const MoviePage = lazy(() =>
	import('./movie.page.ui').then((module) => ({ default: module.MoviePage }))
);

export const movieRoute: RouteObject = {
	path: AppRoutes.movie.fullPath(),
	children: [
		{
			path: ':id',
			element: (
				<Suspense fallback={<MoviePageSkeleton />}>
					<MoviePage />
				</Suspense>
			),
			loader: moviePageLoader.loader.bind(moviePageLoader)
		}
	]
};
