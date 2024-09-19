import { ForwardedRef, forwardRef } from 'react';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

function InputRef(
	{
		caption,
		error = false,
		iconLeft,
		iconLeftAlt = '',
		iconRight,
		iconRightAlt = '',
		...props
	}: IProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	const withLeftIcon = iconLeft !== undefined && iconLeft.length > 0;
	const withRightIcon = iconRight !== undefined && iconRight.length > 0;
	return (
		<label className={styles['wrap']}>
			<input
				{...props}
				ref={ref}
				className={cn(styles['input'], {
					[styles['input_error']]: error,
					[styles['input_with-left-icon']]: withLeftIcon,
					[styles['input_with-right-icon']]: withRightIcon
				})}
				placeholder=" "
			/>
			<span
				className={cn(styles['caption'], {
					[styles['caption_with-left-icon']]: withLeftIcon,
					[styles['caption_with-right-icon']]: withRightIcon
				})}
			>
				{caption}
			</span>
			{withLeftIcon && (
				<img
					src={iconLeft}
					alt={iconLeftAlt}
					className={cn(styles['icon'], styles['icon-left'])}
				/>
			)}
			{withRightIcon && (
				<img
					src={iconRight}
					alt={iconRightAlt}
					className={cn(styles['icon'], styles['icon-right'])}
				/>
			)}
		</label>
	);
}

export const Input = forwardRef(InputRef);
