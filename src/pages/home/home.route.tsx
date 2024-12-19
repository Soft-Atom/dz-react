import { LoaderFunctionArgs, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HomePageSkeleton } from './home.page.skeleton';
import { AppRoutes } from '~shared/lib/react-router';
import { movieApi } from '../../entities/movie';
// import { homePageLoader } from './home.page.model';

const HomePage = lazy(() =>
	import('./home.page.ui').then((module) => ({ default: module.HomePage }))
);

export const homeRoute: RouteObject = {
	path: AppRoutes.home(),
	element: (
		<Suspense fallback={<HomePageSkeleton />}>
			<HomePage />
		</Suspense>
	),
	// loader: homePageLoader
	loader: (args: LoaderFunctionArgs) => {
		const { data, isFetching } = movieApi.findOne('tt4154796');
		console.log(data, isFetching);
		return args;
	}
};
