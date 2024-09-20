import { ForwardedRef, forwardRef } from 'react';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

function InputRef(
	{
		caption,
		error = false,
		iconLeftPath,
		iconLeftAlt = '',
		iconRightPath,
		iconRightAlt = '',
		...props
	}: IProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<label className={styles['wrap']}>
			<input
				{...props}
				ref={ref}
				className={cn(styles['input'], {
					[styles['input_error']]: error,
					[styles['input_with-left-icon']]: iconLeftPath,
					[styles['input_with-right-icon']]: iconRightPath
				})}
				placeholder=" "
			/>
			<span
				className={cn(styles['caption'], {
					[styles['caption_with-left-icon']]: iconLeftPath,
					[styles['caption_with-right-icon']]: iconRightPath
				})}
			>
				{caption}
			</span>
			{iconLeftPath && (
				<img
					src={iconLeftPath}
					alt={iconLeftAlt}
					className={cn(styles['icon'], styles['icon-left'])}
				/>
			)}
			{iconRightPath && (
				<img
					src={iconRightPath}
					alt={iconRightAlt}
					className={cn(styles['icon'], styles['icon-right'])}
				/>
			)}
		</label>
	);
}

export const Input = forwardRef(InputRef);
