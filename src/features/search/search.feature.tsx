import { useForm } from 'react-hook-form';
import { Button, ButtonAppearance } from '~shared/ui/button';
import { Icon, IconSet } from '~shared/ui/icon';
import { Input } from '~shared/ui/input';
import type { IProps } from './interfaces';
import { MovieContractsSchemas, MovieContractsTypes } from '~shared/api/movie';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './styles.module.css';

export function Search({ buttonContent = 'Искать', onSubmit }: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid }
	} = useForm<MovieContractsTypes.TSearch>({
		mode: 'onTouched',
		resolver: zodResolver(MovieContractsSchemas.SearchSchema),
		defaultValues: { q: '' }
	});

	const canSubmit = [isDirty, isValid].every(Boolean);

	return (
		<form className={styles['serach-form']} onSubmit={handleSubmit(onSubmit)}>
			<Input
				iconLeft={<Icon src={IconSet.search} />}
				caption="Введите название"
				{...register('q')}
				error={errors.q?.message}
			/>
			<Button disabled={!canSubmit} appearance={ButtonAppearance.accent}>
				{buttonContent}
			</Button>
		</form>
	);
}
