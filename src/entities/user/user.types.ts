import { z } from 'zod';
import { LoginSchema, RegisterSchema, UserSchema } from './user.schemas';

export type TUser = z.infer<typeof UserSchema>;
export type TCurrentUser = Omit<TUser, 'passwordHash'>;
export type TUserRegister = z.infer<typeof RegisterSchema>;
export type TUserLogin = z.infer<typeof LoginSchema>;
