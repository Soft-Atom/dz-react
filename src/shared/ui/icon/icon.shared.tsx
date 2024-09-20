import type { IProps } from './interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './styles.module.css';

export function Icon({ src, ...props }: IProps) {
	return <img {...props} src={src} />;
}
