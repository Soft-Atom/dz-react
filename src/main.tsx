import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { Button } from './shared/ui/button';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Button>Hello</Button>
	</StrictMode>
);
