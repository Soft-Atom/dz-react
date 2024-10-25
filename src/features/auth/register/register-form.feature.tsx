import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~shared/ui/input';
import { Button } from '~shared/ui/button';
import { useAppDispatch } from '~shared/lib/redux/hooks';
import { AuthSchemas, AuthThunks, AuthTypes } from '~entities/auth';

export function RegisterForm() {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		// setError,
		formState: { errors, isDirty, isValid }
	} = useForm<AuthTypes.TRegister>({
		mode: 'onTouched',
		resolver: zodResolver(AuthSchemas.RegisterSchema),
		defaultValues: { login: '', password: '' }
	});

	const canSubmit = [isDirty, isValid].every(Boolean);

	console.log(errors);

	const onSubmit = async (registerData: AuthTypes.TRegister) => {
		await dispatch(AuthThunks.register(registerData));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				caption="Имя пользователя"
				{...register('login')}
				error={errors.login?.message}
			/>
			<Input
				caption="Пароль"
				type="password"
				{...register('password')}
				error={errors.password?.message}
			/>
			<Input
				caption="Подтверждение пароля"
				type="password"
				{...register('confirmPassword')}
				error={errors.confirmPassword?.message}
			/>
			<Button disabled={!canSubmit}>Зарегистрироваться</Button>
		</form>
	);
}
