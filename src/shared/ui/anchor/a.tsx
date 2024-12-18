// import {
// 	ForwardedRef,
// 	forwardRef,
// 	createElement,
// 	ReactNode,
// 	ForwardRefExoticComponent,
// 	RefAttributes
// } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Icon } from '../../icon';
// import cn from 'classnames';
// import styles from './styles.module.css';

// export type TLinkComponent = typeof Link | typeof NavLink;
// export type TLinkprops<T extends TLinkComponent> =
// 	T extends ForwardRefExoticComponent<
// 		infer P & RefAttributes<HTMLAnchorElement>
// 	>
// 		? P
// 		: never;

// export type TProps<T extends TLinkComponent> = {
// 	component?: T;
// 	icon?: ReturnType<typeof Icon>;
// 	iconRight?: boolean;
// 	className?: string;
// 	children?: ReactNode;
// } & TLinkprops<T>;

// const AnchorRef = <T extends TLinkComponent>(
// 	{
// 		component,
// 		icon,
// 		iconRight = false,
// 		className,
// 		children,
// 		...props
// 	}: TProps<T>,
// 	ref: ForwardedRef<HTMLAnchorElement>
// ) => {
// 	children = (
// 		<>
// 			{icon && (
// 				<div
// 					className={cn(styles['icon'], { [styles['icon-right']]: iconRight })}
// 				>
// 					{icon}
// 				</div>
// 			)}
// 			{children}
// 		</>
// 	);
// 	className = cn(styles['link'], className);
// 	const link = component || Link;
// 	return createElement(
// 		link as ForwardRefExoticComponent<
// 			TLinkprops<T> & RefAttributes<HTMLAnchorElement>
// 		>,
// 		{ ...props, className, ref } as TLinkprops<T> &
// 			RefAttributes<HTMLAnchorElement>,
// 		children
// 	);
// };

// // Экспортируем компонент
// export default forwardRef(AnchorRef);
