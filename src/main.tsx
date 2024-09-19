import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from './shared/ui/button';
import { Heading, HeadingSize } from './shared/ui/heading';
import { Paragraph, ParagraphSizes } from './shared/ui/paragraph';
import { Input } from './shared/ui/input';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Heading size={HeadingSize.h1}>Заголовок 1</Heading>
		<Heading size={HeadingSize.h2}>Заголовок 2</Heading>
		<Heading size={HeadingSize.h3}>Заголовок 3</Heading>

		<Paragraph size={ParagraphSizes.m}>Параграф размера м</Paragraph>
		<Paragraph>Параграф размера с</Paragraph>

		<Input type="text" caption="Ваше имя" />
		<Input type="email" caption="email" error={true} />
		<Input
			type="text"
			caption="Поиск"
			iconLeft="/search-normal.svg"
			iconLeftAlt="Поиск"
		/>
		<Input
			type="text"
			caption="Поиск"
			iconRight="/search-normal.svg"
			iconLeftAlt="Поиск"
		/>
		<Button>Кнопка</Button>
	</StrictMode>
);
