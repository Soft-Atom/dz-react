import { TAppErors } from './errors.types';

export class AppError extends Error {
	constructor(appError: TAppErors) {
		super(appError.message);
	}
}
