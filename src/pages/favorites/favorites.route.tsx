import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { FavoritesPageSkeleton } from './favorites.page.skeleton';
import { AppRoutes } from '~shared/lib/react-router';
import { homePageLoader } from './home.page.model';

const FavoritesPage = lazy(() =>
	import('./favorites.page.ui').then((module) => ({
		default: module.FavoritesPage
	}))
);

export const homeRoute: RouteObject = {
	path: AppRoutes.home(),
	element: (
		<Suspense fallback={<FavoritesPageSkeleton />}>
			<HomePage />
		</Suspense>
	),
	loader: homePageLoader.loader.bind(homePageLoader)
};
