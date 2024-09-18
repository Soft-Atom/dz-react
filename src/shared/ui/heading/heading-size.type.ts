import { HeadingSize } from './heading-size.constant';

export type THeadingSize = (typeof HeadingSize)[keyof typeof HeadingSize];
