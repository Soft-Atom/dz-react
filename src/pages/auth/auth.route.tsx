// import { AppRoutes } from '~shared/lib/react-router';
import { RouteObject } from 'react-router-dom';
import { registerRoute } from './register';
import { loginRoute } from './login';

export const authRoute: RouteObject = {
	children: [registerRoute, loginRoute]
};
