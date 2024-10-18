import { Heading, HeadingComponents } from '~shared/ui/heading';
import { RegisterForm } from '~features/user/register';

export function RegisterPage() {
	return (
		<>
			<Heading Component={HeadingComponents.h1}>Регистрация</Heading>
			<RegisterForm />
		</>
	);
}
