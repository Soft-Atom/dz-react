import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Heading } from '~shared/ui/heading';
import { FavoritesPageSkeleton } from './favorites.page.skeleton';
import { MovieList } from '~widgets/movie/movie-list';
import { FavoriteTypes } from '../../entities/favorites/@x/app-data';
import { useAppSelector } from '../../shared/lib/redux';
import { FavoritesSelectors } from '../../entities/favorites';

export function FavoritesPage() {
	const loaderData = useLoaderData() as { data: FavoriteTypes.TFavorites };
	const favorites = useAppSelector(FavoritesSelectors.selectAll);
	return (
		<Suspense fallback={<FavoritesPageSkeleton />}>
			<Await resolve={loaderData.data}>
				{() => (
					<>
						<Heading>Избранное</Heading>
						<MovieList movies={favorites} />
					</>
				)}
			</Await>
		</Suspense>
	);
}
