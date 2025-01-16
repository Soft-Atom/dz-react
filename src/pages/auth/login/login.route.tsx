import { RouteObject } from 'react-router-dom';
import { AppRoutes } from '~shared/lib/react-router';
import { LoginPage } from './login.page';

export const loginRoute: RouteObject = {
	path: AppRoutes.auth.login.fullPath(),
	element: <LoginPage />
};
