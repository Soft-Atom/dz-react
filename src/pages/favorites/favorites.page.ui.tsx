import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Heading } from '~shared/ui/heading';
import { MovieTypes } from '~entities/movie';
import { FavoritesPageSkeleton } from './favorites.page.skeleton';
import { MovieList } from '~widgets/movie/movie-list';

export function FavoritesPage() {
	const loaderData = useLoaderData() as { data: MovieTypes.TMoviesShort };
	return (
		<Suspense fallback={<FavoritesPageSkeleton />}>
			<Await resolve={loaderData.data}>
				{(data: MovieTypes.TMoviesShort) => (
					<>
						<Heading>Избранное</Heading>
						<MovieList data={data} />
					</>
				)}
			</Await>
		</Suspense>
	);
}
