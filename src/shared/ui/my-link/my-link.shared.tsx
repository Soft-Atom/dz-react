import { Icon } from '../icon';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

export function MyLink({
	iconPath,
	iconAlt,
	iconRight = false,
	children,
	className,
	...props
}: IProps) {
	return (
		<a {...props} className={cn(styles['link'], className)}>
			{iconPath && (
				<Icon
					src={iconPath}
					alt={iconAlt}
					className={cn({ [styles['icon-right']]: iconRight })}
				/>
			)}
			{children}
		</a>
	);
}
