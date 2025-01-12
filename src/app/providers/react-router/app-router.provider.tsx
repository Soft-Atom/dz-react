import {
	createBrowserRouter,
	redirect,
	RouterProvider,
	useRouteError
} from 'react-router-dom';
import { authRoute } from '~pages/auth';
import { AppRoutes, BaseLoader } from '~shared/lib/react-router';
import { lazy, Suspense } from 'react';
import { homeRoute } from '~pages/home';
import { MainSkeletomLayout } from '~pages/layouts';
import { page404Route } from '~pages/page404';
import { appStore } from '../redux/app.store';
import { favoritesRoute } from '~pages/favorites';
import { movieRoute } from '../../../pages/movie/movie.route';

const MainLayout = lazy(() =>
	import('~pages/layouts/main.layout.ui.').then((module) => ({
		default: module.MainLayout
	}))
);
function getBrowserRouter() {
	//Насколько это верно?
	BaseLoader.init(appStore);
	const browserRouter = createBrowserRouter([
		{
			errorElement: <BubbleError />,
			children: [
				{
					element: (
						<Suspense fallback={<MainSkeletomLayout />}>
							<MainLayout />
						</Suspense>
					),
					children: [
						homeRoute,
						authRoute,
						favoritesRoute,
						movieRoute,
						page404Route
					]
				},
				{
					loader: async () => redirect(AppRoutes.page404()),
					path: '*'
				}
			]
		}
	]);
	return browserRouter;
}

export function AppRouterProvider() {
	return <RouterProvider router={getBrowserRouter()} />;
}

function BubbleError() {
	const error = useRouteError();

	if (error) throw error;
	return null;
}
