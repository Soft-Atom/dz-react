import { Suspense } from 'react';
import { Await, useLoaderData, useSearchParams } from 'react-router-dom';
import { Heading } from '~shared/ui/heading';
import { Paragraph } from '~shared/ui/paragraph';
import { MovieTypes } from '~entities/movie';
import { HomePageSkeleton } from './home.page.skeleton';
import { MovieList } from '~widgets/movie/movie-list';
import { Search } from '~features/search';
import { MovieContractsTypes } from '~shared/api/movie';

export function HomePage() {
	const loaderData = useLoaderData() as {
		data: Promise<MovieTypes.TMoviesShort>;
	};
	const [, setSearchParams] = useSearchParams();

	const onSubmit = ({ q }: MovieContractsTypes.TSearch) => {
		setSearchParams((params) => {
			params.set('q', q);
			return params;
		});
	};
	return (
		<Suspense fallback={<HomePageSkeleton />}>
			<Await resolve={loaderData.data}>
				{(data: MovieTypes.TMoviesShort) => (
					<>
						<Heading>Поик</Heading>
						<Paragraph>
							Введите название фильма, сериала или мультфильма для поиска и
							добавления в избранное.
						</Paragraph>
						<Search onSubmit={onSubmit} />
						{data && <MovieList movies={data.movies} />}
					</>
				)}
			</Await>
		</Suspense>
	);
}
