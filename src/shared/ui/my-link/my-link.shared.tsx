import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

export function MyLink({
	icon,
	iconAlt,
	iconRight = false,
	children,
	className,
	...props
}: IProps) {
	const withIcon = icon !== undefined && icon.length > 0;
	return (
		<a {...props} className={cn(styles['link'], className)}>
			{withIcon && (
				<img
					src={icon}
					alt={iconAlt}
					className={cn({ [styles['icon-right']]: iconRight })}
				/>
			)}
			{children}
		</a>
	);
}
