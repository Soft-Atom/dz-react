import { z } from 'zod';
import { AddUserSchema, UserSchema } from './users.schemas';

export type TUser = z.infer<typeof UserSchema>;
export type TAddUser = z.infer<typeof AddUserSchema>;
