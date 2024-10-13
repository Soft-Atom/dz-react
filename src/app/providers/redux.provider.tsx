import { Provider } from 'react-redux';
import { appPersistor, appStore } from '../app.store';
import { PersistGate } from 'redux-persist/integration/react';
import { IProps } from './interfaces';

export function ReduxProvider({ children }: IProps) {
	return (
		<Provider store={appStore}>
			<PersistGate persistor={appPersistor}>{children}</PersistGate>
		</Provider>
	);
}
