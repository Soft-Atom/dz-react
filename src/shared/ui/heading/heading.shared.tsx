import styles from './styles.module.css';
import type { ReactNode } from 'react';
import type { IProps, THeadingSize } from './interfaces';
import cn from 'classnames';
import { HeadingSizes } from './heading-sizes.constant';

export function Heading({
	size = HeadingSizes.h1,
	children,
	className,
	...props
}: IProps) {
	const attrs = {
		...props,
		className: cn(styles['h'], styles[size], className)
	};
	const headings: Record<THeadingSize, ReactNode> = {
		[HeadingSizes.h1]: <h1 {...attrs}>{children}</h1>,
		[HeadingSizes.h2]: <h2 {...attrs}>{children}</h2>,
		[HeadingSizes.h3]: <h3 {...attrs}>{children}</h3>
	};
	return headings[size];
}
