import { AppRoutes } from '~shared/lib/react-router';
import { RouteObject } from 'react-router-dom';
import { HomePage } from './home.page';

export const homeRoute: RouteObject = {
	path: AppRoutes.home(),
	element: <HomePage />
};
