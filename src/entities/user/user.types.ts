import { z } from 'zod';
import {
	UserLoginSchema,
	UserRegisterSchema,
	UserSchema
} from './user.schemas';

export type TUser = z.infer<typeof UserSchema>;
export type TCurrentUser = Omit<TUser, 'passwordHash'>;
export type TUserRegister = z.infer<typeof UserRegisterSchema>;
export type TUserLogin = z.infer<typeof UserLoginSchema>;
