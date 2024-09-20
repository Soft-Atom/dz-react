import { InputHTMLAttributes } from 'react';
import type { TIconPath } from '../../icon/interfaces/icon-path.type';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	caption: string;
	error?: boolean;
	iconLeftPath?: TIconPath;
	iconLeftAlt?: string;
	iconRightPath?: TIconPath;
	iconRightAlt?: string;
}
