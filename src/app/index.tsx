import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Providers } from './providers';
import { MainLayout } from '../pages/layouts/main.layout';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<MainLayout />
		</Providers>
	</StrictMode>
);
