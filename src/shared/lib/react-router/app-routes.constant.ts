export const AppRoutes = {
	root: '/',
	home: () => AppRoutes.root,
	favorites: {
		path: 'favorites/',
		fullPath: () => AppRoutes.root.concat(AppRoutes.favorites.path)
	},
	page404: () => AppRoutes.root.concat('404/'),
	me: () => AppRoutes.root.concat('me/'),
	auth: {
		path: 'auth/',
		register: {
			path: 'register/',
			fullPath: () =>
				AppRoutes.root.concat(AppRoutes.auth.path, AppRoutes.auth.register.path)
		},
		login: {
			path: 'login/',
			fullPath: () =>
				AppRoutes.root.concat(AppRoutes.auth.path, AppRoutes.auth.login.path)
		}
	},
	movie: {
		path: 'movie/',
		fullPath: () => AppRoutes.root.concat(AppRoutes.movie.path),
		byId: ({ id }: { id: string }) =>
			AppRoutes.root.concat(AppRoutes.movie.path, id, '/')
	}
} as const;
