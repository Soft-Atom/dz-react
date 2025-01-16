import { z } from 'zod';

const EnvSchema = z.object({
	VITE_API_ENDPOINT: z.string().url()
});

export const ConfigSchema = EnvSchema.transform(({ VITE_API_ENDPOINT }) => ({
	apiEndpoint: VITE_API_ENDPOINT
}));
