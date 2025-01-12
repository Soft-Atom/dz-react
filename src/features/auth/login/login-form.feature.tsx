import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~shared/ui/input';
import { Button } from '~shared/ui/button';
import { useAppDispatch, useAppSelector, useThunk } from '~shared/lib/redux';
import { AuthSchemas, AuthThunks, AuthTypes } from '~entities/auth';
import { Paragraph, ParagraphSizes } from '~shared/ui/paragraph';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '~shared/lib/react-router';
import { FavoritesSelectors } from '~entities/favorites';
import { AppDataActions } from '~entities/app-data';

export function LoginForm() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const favorites = useAppSelector(FavoritesSelectors.selectAll);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<AuthTypes.TRegister>({
		mode: 'onTouched',
		resolver: zodResolver(AuthSchemas.LoginSchema),
		defaultValues: { login: '', password: '' }
	});

	const { fn: loginFn, isLoading, error } = useThunk(AuthThunks.login);

	const canSubmit = [isDirty, isValid, !isLoading].every(Boolean);

	const onSubmit = async (loginData: AuthTypes.TLogin) => {
		const currentUser = await loginFn(loginData);
		if (!currentUser) return;
		dispatch(
			AppDataActions.addFavorites({ userLogin: currentUser.login, favorites })
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
				<Button disabled={!canSubmit}>Войти</Button>
			</form>
		</>
	);
}
