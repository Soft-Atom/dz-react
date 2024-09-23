import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from './shared/ui/button';
import { Heading, HeadingComponents } from './shared/ui/heading';
import { Paragraph, ParagraphSizes } from './shared/ui/paragraph';
import { Input } from './shared/ui/input';
import { Header } from './wigets/header';
import { Icon, IconSet } from './shared/ui/icon';
import { MovieList } from './wigets/movie/movie-list';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header />
		<MovieList />
		<Heading Component={HeadingComponents.h1}>Заголовок 1</Heading>
		<Heading Component={HeadingComponents.h2}>Заголовок 2</Heading>
		<Heading Component={HeadingComponents.h3}>Заголовок 3</Heading>

		<Paragraph size={ParagraphSizes.m}>Параграф размера м</Paragraph>
		<Paragraph>Параграф размера с</Paragraph>

		<Input type="text" caption="Ваше имя" />
		<Input type="email" caption="email" error={true} />
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
	</StrictMode>
);
