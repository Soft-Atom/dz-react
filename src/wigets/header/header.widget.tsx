import { MyLink } from '../../shared/ui/my-link';
import type { IProps } from './interfaces';
import styles from './styles.module.css';

export function Header({}: IProps) {
	const currentUser = null;
	const favorites = {
		films: [],
		count: 1
	};

	return (
		<header className={styles['wrap']}>
			<a href="/">
				<img src="/logo.svg" />
			</a>
			<nav>
				<ul className={styles['menu']}>
					<li className={styles['menu-item']}>
						<MyLink href="/search">Поиск фильмов</MyLink>
					</li>
					<li className={styles['menu-item']}>
						<MyLink href="/favorites">
							Мои фильмы
							{favorites.count > 0 && (
								<span className={styles['favorites-count']}>
									{favorites.count}
								</span>
							)}
						</MyLink>
					</li>
					{currentUser ? (
						<li className={styles['menu-item']}>
							<MyLink>Выйти</MyLink>
						</li>
					) : (
						<li className={styles['menu-item']}>
							<MyLink href="/login" icon="/Login.svg" iconRight={true}>
								Войти
							</MyLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
