export const AppRoutes = {
	root: '/',
	home: () => AppRoutes.root,
	favorites: () => AppRoutes.root.concat('favorites/'),
	search: () => AppRoutes.root.concat('search/'),
	page404: () => AppRoutes.root.concat('404/'),
	auth: {
		root: () => AppRoutes.root.concat('auth/'),
		register: () => AppRoutes.auth.root().concat('register/'),
		login: () => AppRoutes.auth.root().concat('login/')
	},
	movies: {
		root: () => AppRoutes.root.concat('movies/'),
		byId: ({ id }: { id: string }) => AppRoutes.movies.root().concat(id, '/')
	}
} as const;
