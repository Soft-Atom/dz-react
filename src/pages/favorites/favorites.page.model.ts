import { BaseLoader } from '~shared/lib/react-router';
import { FavoritesActions } from '../../entities/favorites';

class FavoritesPageLoader extends BaseLoader {
	constructor() {
		super();
	}

	loader() {
		const appState = BaseLoader.getState();
		const dispatch = BaseLoader.getDispatch();

		const userFavorites = { favorites: new Map() };
		const currentUser = appState.auth.currentUser;
		if (currentUser) {
			const foundUser = appState.appData.users.get(currentUser.login);
			if (foundUser) {
				userFavorites.favorites = foundUser.favorites;
			}
			dispatch(FavoritesActions.setFavorites(userFavorites.favorites));
		}
		return { data: userFavorites };
	}
}

export const favoritesPageLoader = new FavoritesPageLoader();
