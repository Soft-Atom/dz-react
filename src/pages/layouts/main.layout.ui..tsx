import { Outlet } from 'react-router-dom';
import { Header } from '~widgets/header';

export function MainLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
