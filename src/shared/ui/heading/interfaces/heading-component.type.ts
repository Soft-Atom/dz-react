import { HeadingComponents } from '../heading-components.constant';

export type THeadingComponent =
	(typeof HeadingComponents)[keyof typeof HeadingComponents];
