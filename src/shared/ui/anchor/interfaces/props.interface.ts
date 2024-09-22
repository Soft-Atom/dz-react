import { AnchorHTMLAttributes } from 'react';
import { Icon } from '../../icon';

export interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	// ? Как тут правлиьно типизировать? иначе я могу передать любой JSX
	icon?: ReturnType<typeof Icon>;
	iconRight?: boolean;
}
