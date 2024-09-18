import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Button } from './shared/ui/button';
import { Heading } from './shared/ui/heading';
import { HeadingSize } from './shared/ui/heading/heading-size.constant';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Button>Hello</Button>
		<Heading size={HeadingSize.h1}>Заголовок 1</Heading>
		<Heading size={HeadingSize.h2}>Заголовок 2</Heading>
		<Heading size={HeadingSize.h3}>Заголовок 3</Heading>
	</StrictMode>
);
