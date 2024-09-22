import styles from './styles.module.css';
import type { IProps } from './interfaces';
import cn from 'classnames';
import { HeadingComponents } from './heading-components.constant';

export function Heading({
	Component = HeadingComponents.h1,
	children,
	className,
	...props
}: IProps) {
	const headingProps = {
		...props,
		className: cn(styles['h'], styles[Component], className)
	};
	return <Component {...headingProps}>{children}</Component>;
}
