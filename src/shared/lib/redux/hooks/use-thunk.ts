import { AsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useAppDispatch } from '~shared/lib/redux';
import { AppError, handleAppError } from '~shared/lib/app-error';

export const useThunk = <TReturned, TThunkArg>(
	thunk: AsyncThunk<TReturned, TThunkArg, TThunkApiConfig>
) => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<null | AppError>(null);

	const fn = async (arg: TThunkArg) => {
		setIsLoading(true);
		setError(null);

		const payloadRes = await dispatch(thunk(arg));
		setIsLoading(false);
		if (thunk.fulfilled.match(payloadRes)) {
			return payloadRes.payload;
		}
		const appError = new AppError(handleAppError(payloadRes.payload));
		setError(appError);
		return null;
	};
	return { fn, isLoading, error };
};
