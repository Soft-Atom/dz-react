import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'process.env': process.env
	},
	resolve: {
		alias: {
			'~app': path.resolve('src/app'),
			'~entities': path.resolve('src/entities'),
			'~features': path.resolve('src/features'),
			'~pages': path.resolve('src/pages'),
			'~shared': path.resolve('src/shared'),
			'~widgets': path.resolve('src/widgets')
		}
	},
	plugins: [react()]
});
