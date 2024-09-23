import { AppRoutes } from '~shared/lib/react-router';
import { Anchor } from '~shared/ui/anchor';
import { Icon, IconSet } from '~shared/ui/icon';
import styles from './styles.module.css';

export function Header() {
	const currentUser = null;
	const favorites = {
		movies: new Map(),
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
						<Anchor href={AppRoutes.search()}>Поиск фильмов</Anchor>
					</li>
					<li className={styles['menu-item']}>
						<Anchor href={AppRoutes.favorites()}>
							Мои фильмы
							{favorites.count > 0 && (
								<span className={styles['favorites-count']}>
									{favorites.count}
								</span>
							)}
						</Anchor>
					</li>
					{currentUser ? (
						<li className={styles['menu-item']}>
							<Anchor>Выйти</Anchor>
						</li>
					) : (
						<li className={styles['menu-item']}>
							<Anchor
								href={AppRoutes.login()}
								// icon={<></>}
								icon={<Icon src={IconSet.login} alt="Иконка входа" />}
								iconRight={true}
							>
								Войти
							</Anchor>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
