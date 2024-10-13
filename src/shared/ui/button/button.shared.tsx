import { ButtonAppearance } from './button-appearance';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

export function Button({
	children,
	className,
	appearance = ButtonAppearance.accent,
	...props
}: IProps) {
	return (
		<button
			{...props}
			className={cn(styles['button'], styles[appearance], className)}
		>
			{children}
		</button>
	);
}
