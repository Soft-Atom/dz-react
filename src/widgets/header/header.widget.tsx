import { useSelector } from 'react-redux';
import { AppRoutes } from '~shared/lib/react-router';
import { Anchor } from '~shared/ui/anchor';
import { Icon, IconSet } from '~shared/ui/icon';
import styles from './styles.module.css';
import { AuthSelectors } from '../../entities/auth';
import { FavoritesSelectors } from '../../entities/favorites';

export function Header() {
	const currentUser = useSelector(AuthSelectors.selectCurrentUser);
	const favorites = useSelector(FavoritesSelectors.selectAll);

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
							{favorites.size > 0 && (
								<span className={styles['favorites-count']}>
									{favorites.size}
								</span>
							)}
						</Anchor>
					</li>
					{currentUser ? (
						<>
							<li className={styles['menu-item']}>
								<Anchor
									icon={<Icon src={IconSet.user} alt="Иконка пользователя" />}
									iconRight={true}
								>
									{currentUser.login}
								</Anchor>
							</li>
							<li className={styles['menu-item']}>
								<Anchor>Выйти</Anchor>
							</li>
						</>
					) : (
						<li className={styles['menu-item']}>
							<Anchor
								href={AppRoutes.login()}
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
