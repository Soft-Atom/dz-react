import { z } from 'zod';
import { UserTypes } from '~entities/users/@x/auth';
import { RegisterSchema } from './auth.schemas';

export type TCurrentUser = Omit<UserTypes.TUser, 'passwordHash' | 'favorites'>;
export type TRegister = z.infer<typeof RegisterSchema>;
