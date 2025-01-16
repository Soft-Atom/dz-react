import type { IProps } from './interfaces';
import { ParagraphSizes } from './paragraph-sizes.constant';
import styles from './styles.module.css';
import cn from 'classnames';

export function Paragraph({
	size = ParagraphSizes.s,
	children,
	className,
	...props
}: IProps) {
	return (
		<p {...props} className={cn(styles['p'], styles[size], className)}>
			{children}
		</p>
	);
}
