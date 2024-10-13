import { HTMLAttributes } from 'react';
import type { THeadingComponent } from './heading-component.type';

export interface IProps extends HTMLAttributes<HTMLElement> {
	Component?: THeadingComponent;
}
