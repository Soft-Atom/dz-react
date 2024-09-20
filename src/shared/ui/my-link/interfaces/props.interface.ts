import { AnchorHTMLAttributes } from 'react';
import { TIconPath } from '../../icon/interfaces/icon-path.type';

export interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	iconPath?: TIconPath;
	iconAlt?: string;
	iconRight?: boolean;
}
