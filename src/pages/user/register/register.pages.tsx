import { Heading, HeadingComponents } from '~shared/ui/heading';
import { RegisterForm } from '../../../features/user/register/register-form.widget';

export function Register() {
	return (
		<>
			<Heading Component={HeadingComponents.h1}>Регистрация</Heading>
			<RegisterForm />
		</>
	);
}
