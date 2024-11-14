import { AsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useAppDispatch } from '~shared/lib/redux';
import { AppError, AppErrors } from '~shared/lib/app-error';

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
		if (payloadRes.payload) {
			setError(new AppError(payloadRes.payload));
			return;
		}
		setError(new AppError(AppErrors.COMMON.UNEXPECTED));
	};
	return { fn, isLoading, error };
};
