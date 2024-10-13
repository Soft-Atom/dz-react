import { ForwardedRef, forwardRef } from 'react';
import type { IProps } from './interfaces';
import styles from './styles.module.css';
import cn from 'classnames';

function InputRef(
	{ caption, error = false, iconLeft, iconRight, ...props }: IProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<label className={styles['wrap']}>
			<input
				{...props}
				ref={ref}
				className={cn(styles['input'], {
					[styles['input_error']]: error,
					[styles['input_with-left-icon']]: iconLeft,
					[styles['input_with-right-icon']]: iconRight
				})}
				placeholder=" "
			/>
			<span
				className={cn(styles['caption'], {
					[styles['caption_with-left-icon']]: iconLeft
				})}
			>
				{caption}
			</span>
			{iconLeft && (
				<div className={cn(styles['icon'], styles['icon-left'])}>
					{iconLeft}
				</div>
			)}
			{iconRight && (
				<div className={cn(styles['icon'], styles['icon-right'])}>
					{iconRight}
				</div>
			)}
		</label>
	);
}

export const Input = forwardRef(InputRef);
