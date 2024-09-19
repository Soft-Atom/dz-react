import { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	caption: string;
	error?: boolean;
	iconLeft?: string;
	iconLeftAlt?: string;
	iconRight?: string;
	iconRightAlt?: string;
}
