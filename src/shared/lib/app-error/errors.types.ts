import { TRecursiveExtract } from '../utility-types';
import { AppErrors } from './app-errors.constant';

type TError = {
	message: string;
};

export type TAppErors = TRecursiveExtract<typeof AppErrors, TError>;
