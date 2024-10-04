import { z } from 'zod';
import { UserSchema } from './user.schema';

export type TUser = z.infer<typeof UserSchema>;
