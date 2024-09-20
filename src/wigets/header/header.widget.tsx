import { AppRoutes } from '../../shared/lib/react-router';
import { Icon, IconSet } from '../../shared/ui/icon';
import { MyLink } from '../../shared/ui/my-link';
import styles from './styles.module.css';

export function Header() {
	const currentUser = null;
	const favorites = {
		movies: [],
		count: 1
	};

	return (
		<header className={styles['wrap']}>
			<a href={AppRoutes.home()}>
				<Icon src={IconSet.logo} />
			</a>
			<nav>
				<ul className={styles['menu']}>
					<li className={styles['menu-item']}>
						<MyLink href={AppRoutes.search()}>Поиск фильмов</MyLink>
					</li>
					<li className={styles['menu-item']}>
						<MyLink href={AppRoutes.favorites()}>
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
							<MyLink
								href={AppRoutes.login()}
								iconPath={IconSet.login}
								iconRight={true}
							>
								Войти
							</MyLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
