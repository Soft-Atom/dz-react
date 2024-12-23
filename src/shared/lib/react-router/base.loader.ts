import { TLoaderArg } from './base.loader.types';
import { EndpointDefinitions } from '@reduxjs/toolkit/query';

export class BaseLoader {
	private static dispatch: TAppDispatch;

	protected static async loader<
		TArg,
		TagTypes extends string,
		TRes,
		TDefinitions extends EndpointDefinitions,
		TContext
	>({
		endpoint,
		arg,
		options,
		request
	}: TLoaderArg<TArg, TagTypes, TRes, TDefinitions, TContext>) {
		const p = BaseLoader.dispatch(endpoint.initiate(arg, options));
		request.signal.onabort = p.abort;
		const res = await p;
		const { data, isError, error } = res;
		if (isError) {
			console.error(error);
			throw new Error('error');
		}
		return data;
	}

	static init(store: TStore) {
		BaseLoader.dispatch = store.dispatch;
	}
}
