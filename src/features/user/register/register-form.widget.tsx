import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~shared/ui/input';
import { Button } from '~shared/ui/button';
import { UserSchemas, UserTypes } from '~entities/user';

export function RegisterForm() {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isDirty, isValid }
	} = useForm<UserTypes.TUserRegister>({
		mode: 'onTouched',
		resolver: zodResolver(UserSchemas.UserRegisterSchema),
		defaultValues: { login: '', password: '' }
	});
	const onSubmit = () => {};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input caption="Имя пользователя" {...register('login')} />
			<Input caption="Пароль" {...register('password')} />
			<Button>Зарегистрироваться</Button>
		</form>
	);
}
