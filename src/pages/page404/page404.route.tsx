import { AppRoutes } from '~shared/lib/react-router';
import { RouteObject } from 'react-router-dom';
import { Page404 } from './page404.page';

export const page404Route: RouteObject = {
	path: AppRoutes.page404(),
	element: <Page404 />
};
