import { InputHTMLAttributes } from 'react';
import { Icon } from '../../icon';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	caption: string;
	error?: boolean;
	iconLeft?: ReturnType<typeof Icon>;
	iconRight?: ReturnType<typeof Icon>;
}
