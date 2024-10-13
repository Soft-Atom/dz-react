export const AppRoutes = {
	root: '/',
	home: () => AppRoutes.root,
	login: () => AppRoutes.root.concat('login/'),
	favorites: () => AppRoutes.root.concat('favorites/'),
	search: () => AppRoutes.root.concat('search/'),
	page404: () => AppRoutes.root.concat('404/'),

	movies: {
		root: () => AppRoutes.root.concat('movies/'),
		byId: ({ id }: { id: string }) => AppRoutes.movies.root().concat(id, '/')
	}
} as const;
