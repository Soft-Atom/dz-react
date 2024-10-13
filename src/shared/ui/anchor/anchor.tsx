import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

export function Anchor({
	icon,
	iconRight = false,
	children,
	className,
	...props
}: IProps) {
	return (
		<a {...props} className={cn(styles['link'], className)}>
			{icon && (
				<div
					className={cn(styles['icon'], { [styles['icon-right']]: iconRight })}
				>
					{icon}
				</div>
			)}
			{children}
		</a>
	);
}
