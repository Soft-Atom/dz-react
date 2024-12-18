import {
	createElement,
	ForwardedRef,
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes
} from 'react';
import type { TProps, TLinkComponent, TLinkprops } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const AnchorRef = <T extends TLinkComponent>(
	{
		component,
		icon,
		iconRight = false,
		className,
		children,
		...props
	}: TProps<T>,
	ref: ForwardedRef<HTMLAnchorElement>
) => {
	children = (
		<>
			{icon && (
				<div
					className={cn(styles['icon'], { [styles['icon-right']]: iconRight })}
				>
					{icon}
				</div>
			)}
			{children}
		</>
	);
	className = cn(styles['link'], className);
	const link = component || Link;
	return createElement(
		link as ForwardRefExoticComponent<
			TLinkprops<T> & RefAttributes<HTMLAnchorElement>
		>,
		{ ...props, className, ref } as TLinkprops<T> &
			RefAttributes<HTMLAnchorElement>,
		children
	);
};

export const Anchor = forwardRef(AnchorRef);
