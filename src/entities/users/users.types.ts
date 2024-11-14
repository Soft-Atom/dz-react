import { z } from 'zod';
import { RegisterSchema, UserSchema } from './users.schemas';

export type TUser = z.infer<typeof UserSchema>;
export type TRegister = z.infer<typeof RegisterSchema>;
