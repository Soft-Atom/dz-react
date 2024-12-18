import { ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import { Icon } from '../../icon';
import { Link, NavLink } from 'react-router-dom';

export type TLinkComponent = typeof Link | typeof NavLink;
export type TLinkprops<T extends TLinkComponent> =
	T extends ForwardRefExoticComponent<
		infer P & RefAttributes<HTMLAnchorElement>
	>
		? P
		: never;

export type TProps<T extends TLinkComponent> = {
	component?: T;
	icon?: ReturnType<typeof Icon>;
	iconRight?: boolean;
	className?: string;
	children?: ReactNode;
} & TLinkprops<T>;
