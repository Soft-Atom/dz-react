import { AppRoutes } from '~shared/lib/react-router';
import { Anchor } from '~shared/ui/anchor';
import { Icon, IconSet } from '~shared/ui/icon';
import styles from './styles.module.css';
import { AuthSelectors } from '../../entities/auth';
import { FavoritesSelectors } from '../../entities/favorites';
import { useAppSelector } from '~shared/lib/redux';
import { NavLink } from 'react-router-dom';

export function Header() {
	const currentUser = useAppSelector(AuthSelectors.selectCurrentUser);
	const favorites = useAppSelector(FavoritesSelectors.selectAll);

	return (
		<header className={styles['wrap']}>
			<Anchor to={AppRoutes.home()}>
				<Icon src={IconSet.logo} />
			</Anchor>
			<nav>
				<ul className={styles['menu']}>
					<li className={styles['menu-item']}>
						<Anchor component={NavLink} to={AppRoutes.search()}>
							Поиск фильмов
						</Anchor>
					</li>
					<li className={styles['menu-item']}>
						<Anchor component={NavLink} to={AppRoutes.favorites()}>
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
									component={NavLink}
									to={AppRoutes.me()}
									icon={<Icon src={IconSet.user} alt="Иконка пользователя" />}
									iconRight={true}
								>
									{currentUser.login}
								</Anchor>
							</li>
							<li className={styles['menu-item']}>
								<Anchor component={NavLink} to="/">
									Выйти
								</Anchor>
							</li>
						</>
					) : (
						<li className={styles['menu-item']}>
							<Anchor
								component={NavLink}
								to={AppRoutes.auth.login()}
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
