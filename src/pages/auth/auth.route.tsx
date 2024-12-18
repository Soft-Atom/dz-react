// import { AppRoutes } from '~shared/lib/react-router';
import { RouteObject } from 'react-router-dom';
import { registerRoute } from './register/register.route';

export const authRoute: RouteObject = {
	children: [registerRoute]
};
