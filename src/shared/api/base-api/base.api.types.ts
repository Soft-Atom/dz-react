import {
	Api,
	EndpointBuilder,
	EndpointDefinitions
} from '@reduxjs/toolkit/query';
import { baseApi, baseQuery } from './base.api';

export type TBaseQuery = typeof baseQuery;
export type TBaseApi = typeof baseApi;

export type TExtendedApi<
	TApi extends TBaseApi,
	NewDefinitions extends EndpointDefinitions
> = TApi extends Api<TBaseQuery, infer D, infer RP, infer TT, infer E>
	? Api<TBaseQuery, D & NewDefinitions, RP, TT, E>
	: never;

export type TEndpointBuilder<TApi extends TBaseApi> = TApi extends Api<
	TBaseQuery,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	infer _,
	infer RP,
	infer TT
>
	? EndpointBuilder<TBaseQuery, TT, RP>
	: never;
