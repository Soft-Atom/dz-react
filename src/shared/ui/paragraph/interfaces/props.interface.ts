import { HTMLAttributes } from 'react';
import { TParagraphSize } from './paragraph-size.type';

export interface IProps extends HTMLAttributes<HTMLElement> {
	size?: TParagraphSize;
}
