import {
	createBrowserRouter,
	redirect,
	RouterProvider,
	useRouteError
} from 'react-router-dom';
import { authRoute } from '~pages/auth';
import { AppRoutes } from '~shared/lib/react-router';
import { lazy, Suspense } from 'react';
import { homeRoute } from '~pages/home';
import { MainSkeletomLayout } from '~pages/layouts';
import { page404Route } from '~pages/page404';

const MainLayout = lazy(() =>
	import('~pages/layouts/main.layout.ui.').then((module) => ({
		default: module.MainLayout
	}))
);

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
				children: [homeRoute, authRoute, page404Route]
			},
			{
				loader: async () => redirect(AppRoutes.page404()),
				path: '*'
			}
		]
	}
]);

export function AppRouterProvider() {
	return <RouterProvider router={browserRouter} />;
}

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
	const error = useRouteError();

	if (error) throw error;
	return null;
}
