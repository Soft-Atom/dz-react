import {
	createBrowserRouter,
	redirect,
	RouterProvider
} from 'react-router-dom';
import { authRoutes } from '~pages/auth/auth.routes';
import { AppRoutes } from '~shared/lib/react-router';
import { lazy } from 'react';

const MainLayout = lazy(() =>
	import('~pages/layouts/main.layout').then((module) => ({
		default: module.MainLayout
	}))
);

const browserRouter = createBrowserRouter([
	{
		children: [
			{
				element: <MainLayout />,
				children: [...authRoutes /*, page404Route*/]
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
