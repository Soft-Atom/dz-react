import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

export function Button({ children, className, ...props }: IProps) {
	return (
		<button {...props} className={cn(styles['button'], className)}>
			{children}
		</button>
	);
}
