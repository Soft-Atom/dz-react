import { IProps } from './interfaces';
import { ReduxProvider } from './redux-provider';

export function Providers({ children }: IProps) {
	return <ReduxProvider>{children}</ReduxProvider>;
}
