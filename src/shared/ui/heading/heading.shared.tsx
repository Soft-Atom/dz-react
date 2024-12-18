import styles from './styles.module.css';
import type { IProps } from './interfaces';
import cn from 'classnames';
import { HeadingComponents } from './heading-components.constant';
import { createElement } from 'react';

export function Heading({
	component = HeadingComponents.h1,
	children,
	className,
	...props
}: IProps) {
	const headingProps = {
		...props,
		className: cn(styles['h'], styles[component], className)
	};
	return createElement(component, headingProps, children);
}
