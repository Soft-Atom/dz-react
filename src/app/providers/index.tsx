import { AppRouterProvider } from './react-router/app-router.provider';
import { ReduxProvider } from './redux/redux.provider';

export function Providers() {
	return (
		<ReduxProvider>
			<AppRouterProvider />
		</ReduxProvider>
	);
}
