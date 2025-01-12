import { Button, ButtonAppearance } from '~shared/ui/button';
import { useAppDispatch } from '~shared/lib/redux';
import { useCallback } from 'react';
import { FavoritesActions } from '~entities/favorites';
import { AuthActions } from '../../../entities/auth';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../shared/lib/react-router';

export function LogoutButton() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			dispatch(AuthActions.logout());
			dispatch(FavoritesActions.clearFavorites());
			navigate(AppRoutes.home());
		},
		[dispatch, navigate]
	);
	return (
		<Button appearance={ButtonAppearance.accent} onClick={onClick}>
			Выйти
		</Button>
	);
}
