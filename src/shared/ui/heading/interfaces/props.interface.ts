import { HTMLAttributes } from 'react';
import type { THeadingSize } from '../heading-size.type';

export interface IProps extends HTMLAttributes<HTMLElement> {
	size: THeadingSize;
}
