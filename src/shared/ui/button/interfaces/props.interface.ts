import { ButtonHTMLAttributes } from 'react';
import { TButtonAppearance } from './button-appearance.type';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance?: TButtonAppearance;
}
