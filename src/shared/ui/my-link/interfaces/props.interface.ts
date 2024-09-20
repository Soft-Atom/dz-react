import { AnchorHTMLAttributes } from 'react';

export interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	icon?: string;
	iconAlt?: string;
	iconRight?: boolean;
}
