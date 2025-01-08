import { TLoaderArg } from './base.loader.types';
import { EndpointDefinitions } from '@reduxjs/toolkit/query';

export class BaseLoader {
	private static dispatch: TAppDispatch;

	protected static async baseLoader<
		TParams,
		TagTypes extends string,
		TRes,
		TDefinitions extends EndpointDefinitions,
		TContext
	>({
		endpoint,
		params,
		options,
		request
	}: TLoaderArg<TParams, TagTypes, TRes, TDefinitions, TContext>) {
		const promise = BaseLoader.dispatch(endpoint.initiate(params, options));
		request.signal.onabort = promise.abort;
		const res = await promise;
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
