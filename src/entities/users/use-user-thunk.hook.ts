import { AsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useAppDispatch } from '~shared/lib/redux';
import { AppError, AppErrors } from '../../shared/lib/app-error';

export const useUserThunk = <TReturned, TThunkArg>(
	thunk: AsyncThunk<TReturned, TThunkArg, TThunkApiConfig>
) => {
	const dispatch = useAppDispatch();
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<null | AppError>(null);

	const fn = async (arg: TThunkArg) => {
		setLoading(true);
		setError(null);

		const actionRes = await dispatch(thunk(arg));
		if (thunk.fulfilled.match(actionRes)) {
			setLoading(false);
			return actionRes.payload;
		} else {
			setLoading(false);
			if (actionRes.payload) {
				setError(actionRes.payload);
			} else {
				setError(new AppError(AppErrors.COMMON.UNEXPECTED));
			}
		}
	};
	return { fn, isLoading, error };
};
