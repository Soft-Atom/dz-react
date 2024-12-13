import { AuthSelectors } from '~entities/auth';
import { AppDataActions } from '~entities/app-data';
import { FavoritesActions, FavoritesSelectors } from '~entities/favorites';
import { Button, ButtonAppearance } from '~shared/ui/button';
import { Icon, IconSet } from '~shared/ui/icon';
import { useAppDispatch, useAppSelector } from '~shared/lib/redux';
import type { IProps } from './interfaces';
import { useCallback } from 'react';

export function ToogleFavoritesButton({ movieShort }: IProps) {
	const dispatch = useAppDispatch();
	const currentUser = useAppSelector(AuthSelectors.selectCurrentUser);
	const isInFavorited = useAppSelector((state) =>
		FavoritesSelectors.selectHasMovie(state, movieShort.id)
	);

	const { icon, appearance, text } = isInFavorited
		? {
				icon: IconSet.favorited,
				appearance: ButtonAppearance.favorited,
				text: 'В избраном'
		  }
		: {
				icon: IconSet.like,
				appearance: ButtonAppearance.like,
				text: 'В избранное'
		  };
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			dispatch(FavoritesActions.toogleFavorites(movieShort));
			if (currentUser) {
				dispatch(
					AppDataActions.toogleFavorites({
						userLogin: currentUser.login,
						movie: movieShort
					})
				);
			}
		},
		[currentUser, movieShort, dispatch]
	);
	return (
		<Button appearance={appearance} onClick={onClick}>
			<Icon src={icon} /> {text}
		</Button>
	);
}
