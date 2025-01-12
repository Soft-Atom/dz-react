import { Heading, HeadingComponents } from '~shared/ui/heading';
import { RegisterForm } from '~features/auth/register';
import { Link } from 'react-router-dom';
import { AppRoutes } from '~shared/lib/react-router';
import { Anchor } from '~shared/ui/anchor';

export function RegisterPage() {
	return (
		<>
			<Heading component={HeadingComponents.h1}>Регистрация</Heading>
			<RegisterForm />
			<Anchor component={Link} to={AppRoutes.auth.login.fullPath()}>
				Войти
			</Anchor>
		</>
	);
}
