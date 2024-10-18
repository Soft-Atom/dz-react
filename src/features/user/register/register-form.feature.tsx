import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~shared/ui/input';
import { Button } from '~shared/ui/button';
import { UserSchemas, UserThunks, UserTypes } from '~entities/user';
import { useAppDispatch } from '~shared/lib/redux/hooks';

export function RegisterForm() {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		// setError,
		formState: { errors, isDirty, isValid }
	} = useForm<UserTypes.TUserRegister>({
		mode: 'onTouched',
		resolver: zodResolver(UserSchemas.RegisterSchema),
		defaultValues: { login: '', password: '' }
	});
	const canSubmit = [isDirty, isValid].every(Boolean);
	const onSubmit = async (registerData: UserTypes.TUserRegister) => {
		await dispatch(UserThunks.registerUserThunk(registerData));
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
			<Button disabled={!canSubmit}>Зарегистрироваться</Button>
		</form>
	);
}
