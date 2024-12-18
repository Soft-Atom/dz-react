import { RouteObject } from 'react-router-dom';
import { AppRoutes } from '~shared/lib/react-router';
import { RegisterPage } from './register.page';

export const registerRoute: RouteObject = {
	path: AppRoutes.auth.register.fullPath(),
	element: <RegisterPage />
};
