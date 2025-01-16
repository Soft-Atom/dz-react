import { AppRoutes } from '~shared/lib/react-router';
import { Anchor } from '~shared/ui/anchor';
import { Icon, IconSet } from '~shared/ui/icon';
import styles from './styles.module.css';
import { AuthSelectors } from '../../entities/auth';
import { FavoritesActions } from '../../entities/favorites';
import { useAppDispatch, useAppSelector } from '~shared/lib/redux';
import { NavLink } from 'react-router-dom';
import { LogoutButton } from '../../features/auth/logout';
import { AppDataSelectors } from '../../entities/app-data';
import { FavoritesLink } from '../../entities/favorites/ui/favorites.link';

export function Header() {
	const dispatch = useAppDispatch();
	const currentUser = useAppSelector(AuthSelectors.selectCurrentUser);
	const userFavorites = useAppSelector((state) =>
		AppDataSelectors.selectUserFavorites(state, currentUser?.login || '')
	);
	if (currentUser) {
		dispatch(FavoritesActions.setFavorites(userFavorites.favorites));
	}

	return (
		<header className={styles['wrap']}>
			<Anchor to={AppRoutes.home()}>
				<Icon src={IconSet.logo} />
			</Anchor>
			<nav>
				<ul className={styles['menu']}>
					<li className={styles['menu-item']}>
						<Anchor component={NavLink} to={AppRoutes.home()}>
							Поиск фильмов
						</Anchor>
					</li>
					<li className={styles['menu-item']}>
						<FavoritesLink />
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
								<LogoutButton />
							</li>
						</>
					) : (
						<li className={styles['menu-item']}>
							<Anchor
								component={NavLink}
								to={AppRoutes.auth.login.fullPath()}
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
