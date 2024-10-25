import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from '~shared/ui/button';
import { Heading, HeadingComponents } from '~shared/ui/heading';
import { Paragraph, ParagraphSizes } from '~shared/ui/paragraph';
import { Input } from '~shared/ui/input';
import { Header } from '~widgets/header';
import { Icon, IconSet } from '~shared/ui/icon';
import { MovieList } from '~widgets/movie/movie-list';
import { Providers } from './providers';
import { RegisterPage } from '~pages/user/register';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<Header />
			<RegisterPage />
			<MovieList />
			<Heading Component={HeadingComponents.h1}>Заголовок 1</Heading>
			<Heading Component={HeadingComponents.h2}>Заголовок 2</Heading>
			<Heading Component={HeadingComponents.h3}>Заголовок 3</Heading>

			<Paragraph size={ParagraphSizes.m}>Параграф размера м</Paragraph>
			<Paragraph>Параграф размера с</Paragraph>

			<Input type="text" caption="Ваше имя" />
			<Input
				type="text"
				caption="Поиск"
				iconLeft={<Icon src={IconSet.search} alt="Иконка поиска" />}
			/>
			<Input
				type="text"
				caption="Поиск"
				iconRight={<Icon src={IconSet.search} alt="Иконка поиска" />}
			/>
			<Button>Кнопка</Button>
		</Providers>
	</StrictMode>
);
