import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { MovieContractsTypes } from '~shared/api/movie';

export interface IProps {
	buttonContent?: ReactNode;
	onSubmit: SubmitHandler<MovieContractsTypes.TSearch>;
}
