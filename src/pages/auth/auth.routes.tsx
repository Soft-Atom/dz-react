import { AppRoutes } from '~shared/lib/react-router';
import { RouteObject } from 'react-router-dom';
import { RegisterPage } from './register';

export const authRoutes: RouteObject[] = [
	{
		path: AppRoutes.auth.register(),
		element: <RegisterPage />
	}
];
