import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { FavoritesPageSkeleton } from './favorites.page.skeleton';
import { AppRoutes } from '~shared/lib/react-router';
import { favoritesPageLoader } from './favorites.page.model';

const FavoritesPage = lazy(() =>
	import('./favorites.page.ui').then((module) => ({
		default: module.FavoritesPage
	}))
);

export const favoritesRoute: RouteObject = {
	path: AppRoutes.favorites.fullPath(),
	element: (
		<Suspense fallback={<FavoritesPageSkeleton />}>
			<FavoritesPage />
		</Suspense>
	),
	loader: favoritesPageLoader.loader.bind(favoritesPageLoader)
};
