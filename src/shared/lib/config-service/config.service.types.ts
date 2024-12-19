import { z } from 'zod';
import { ConfigSchema } from './config.schemas';

export type TConfig = z.infer<typeof ConfigSchema>;
