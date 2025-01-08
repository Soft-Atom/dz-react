import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Heading } from '~shared/ui/heading';
import { Paragraph } from '~shared/ui/paragraph';
import { MovieTypes } from '~entities/movie';
import { HomePageSkeleton } from './home.page.skeleton';
import { MovieList } from '../../widgets/movie/movie-list';

export function HomePage() {
	const loaderData = useLoaderData() as { data: MovieTypes.TMoviesShort };
	return (
		<Suspense fallback={<HomePageSkeleton />}>
			<Await resolve={loaderData.data}>
				{(data) => (
					<>
						<Heading>Поик</Heading>
						<Paragraph>
							Введите название фильма, сериала или мультфильма для поиска и
							добавления в избранное.
						</Paragraph>
						<MovieList data={data} />
					</>
				)}
			</Await>
		</Suspense>
	);
}
