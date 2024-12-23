import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HomePageSkeleton } from './home.page.skeleton';
import { AppRoutes } from '~shared/lib/react-router';
import { homePageLoader } from './home.page.model';

const HomePage = lazy(() =>
	import('./home.page.ui').then((module) => ({ default: module.HomePage }))
);

console.log(homePageLoader);

export const homeRoute: RouteObject = {
	path: AppRoutes.home(),
	element: (
		<Suspense fallback={<HomePageSkeleton />}>
			<HomePage />
		</Suspense>
	),
	loader: homePageLoader.loaderMovie.bind(homePageLoader)
};
