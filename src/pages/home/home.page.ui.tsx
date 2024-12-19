import { Heading } from '~shared/ui/heading';
import { Paragraph } from '~shared/ui/paragraph';

export function HomePage() {
	return (
		<>
			<Heading>Поик</Heading>
			<Paragraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления
				в избранное.
			</Paragraph>
		</>
	);
}
