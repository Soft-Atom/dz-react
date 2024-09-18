import styles from './styles.module.css';
import { ReactNode } from 'react';
import type { THeadingSize } from './heading-size.type';
import type { IProps } from './interfaces';
import cn from 'classnames';

export function Heading({ size, children, className, ...props }: IProps) {
	const attrs = {
		...props,
		className: cn(styles['h'], styles[size], className)
	};
	const headings: Record<THeadingSize, ReactNode> = {
		h1: <h1 {...attrs}>{children}</h1>,
		h2: <h2 {...attrs}>{children}</h2>,
		h3: <h3 {...attrs}>{children}</h3>
	};
	return headings[size];
}
