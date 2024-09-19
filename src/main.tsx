import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from './shared/ui/button';
import { Heading, HeadingSize } from './shared/ui/heading';
import { Paragraph, ParagraphSizes } from './shared/ui/paragraph';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Button>Кнопка</Button>
		<Heading size={HeadingSize.h1}>Заголовок 1</Heading>
		<Heading size={HeadingSize.h2}>Заголовок 2</Heading>
		<Heading size={HeadingSize.h3}>Заголовок 3</Heading>
		<Paragraph size={ParagraphSizes.m}>Параграф размера м</Paragraph>
		<Paragraph>Параграф размера с</Paragraph>
	</StrictMode>
);
