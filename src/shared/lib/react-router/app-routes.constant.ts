export const AppRoutes = {
	root: '/',
	home: () => AppRoutes.root,
	favorites: () => AppRoutes.root.concat('favorites/'),
	search: () => AppRoutes.root.concat('search/'),
	page404: () => AppRoutes.root.concat('404/'),
	me: () => AppRoutes.root.concat('me/'),
	auth: {
		path: 'auth/',
		register: {
			path: 'register/',
			fullPath: () =>
				AppRoutes.root.concat(AppRoutes.auth.path, AppRoutes.auth.register.path)
		},
		login: () => AppRoutes.auth.path.concat('login/')
	},
	movies: {
		root: () => AppRoutes.root.concat('movies/'),
		byId: ({ id }: { id: string }) => AppRoutes.movies.root().concat(id, '/')
	}
} as const;
