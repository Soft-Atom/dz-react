import { ButtonAppearance } from '../button-appearance';

export type TButtonAppearance =
	(typeof ButtonAppearance)[keyof typeof ButtonAppearance];
