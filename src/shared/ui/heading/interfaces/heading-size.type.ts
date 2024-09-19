import { HeadingSizes } from '../heading-sizes.constant';

export type THeadingSize = (typeof HeadingSizes)[keyof typeof HeadingSizes];
