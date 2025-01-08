import { z } from 'zod';
import { ConfigSchema } from './env.schema';

export type TConfig = z.infer<typeof ConfigSchema>;
