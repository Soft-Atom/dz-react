import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Heading, HeadingComponents } from '~shared/ui/heading';
import { Paragraph } from '~shared/ui/paragraph';
import { MovieTypes } from '~entities/movie';
import { MoviePageSkeleton } from './movie.page.skeleton';

export function MoviePage() {
	const loaderData = useLoaderData() as {
		data: Promise<MovieTypes.TMovie>;
	};

	return (
		<Suspense fallback={<MoviePageSkeleton />}>
			<Await resolve={loaderData.data}>
				{(data: MovieTypes.TMovie) => (
					<>
						<Heading component={HeadingComponents.h2}>{data.name}</Heading>
						<img src={data.image} alt="Изображение фильма" />
						<Paragraph>{data.description}</Paragraph>
					</>
				)}
			</Await>
		</Suspense>
	);
}
