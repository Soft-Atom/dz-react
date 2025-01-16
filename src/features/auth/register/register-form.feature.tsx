import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~shared/ui/input';
import { Button } from '~shared/ui/button';
import { useAppDispatch, useAppSelector, useThunk } from '~shared/lib/redux';
import { AuthSchemas, AuthThunks, AuthTypes } from '~entities/auth';
import { Paragraph, ParagraphSizes } from '~shared/ui/paragraph';
import { FavoritesSelectors } from '~entities/favorites';
import { AppDataActions } from '~entities/app-data';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '~shared/lib/react-router';

export function RegisterForm() {
	const dispatch = useAppDispatch();
	const favorites = useAppSelector(FavoritesSelectors.selectAll);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<AuthTypes.TRegister>({
		mode: 'onTouched',
		resolver: zodResolver(AuthSchemas.RegisterSchema),
		defaultValues: { login: '', password: '' }
	});

	const { fn: registerUser, isLoading, error } = useThunk(AuthThunks.register);

	const canSubmit = [isDirty, isValid, !isLoading].every(Boolean);

	const onSubmit = async (registerData: AuthTypes.TRegister) => {
		const newUser = await registerUser(registerData);
		if (!newUser) return;
		dispatch(
			AppDataActions.addFavorites({ userLogin: newUser.login, favorites })
		);
		navigate(AppRoutes.home());
	};

	return (
		<>
			<Paragraph size={ParagraphSizes.m}>{error?.message}</Paragraph>
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
		</>
	);
}
