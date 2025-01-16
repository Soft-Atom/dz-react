import { AppErrors } from './app-errors.constant';

export const handleAppError = (err: TAppErors | undefined) =>
	err || AppErrors.COMMON.UNEXPECTED;
