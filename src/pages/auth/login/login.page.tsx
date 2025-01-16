import { Heading, HeadingComponents } from '~shared/ui/heading';
import { LoginForm } from '~features/auth/login';
import { Link } from 'react-router-dom';
import { Anchor } from '../../../shared/ui/anchor';
import { AppRoutes } from '../../../shared/lib/react-router';

export function LoginPage() {
	return (
		<>
			<Heading component={HeadingComponents.h1}>Вход</Heading>
			<LoginForm />
			<Anchor component={Link} to={AppRoutes.auth.register.fullPath()}>
				Зарегистрироваться
			</Anchor>
		</>
	);
}
