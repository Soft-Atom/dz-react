import {
	ApiEndpointQuery,
	EndpointDefinitions,
	QueryDefinition,
	StartQueryActionCreatorOptions
} from '@reduxjs/toolkit/query';
import { LoaderFunctionArgs } from 'react-router-dom';
import { TBaseQuery } from '../../api/base-api';

export type TLoaderArg<
	TParams,
	TagTypes extends string,
	TRes,
	TDefinitions extends EndpointDefinitions,
	TContext
> = {
	endpoint: ApiEndpointQuery<
		QueryDefinition<TParams, TBaseQuery, TagTypes, TRes>,
		TDefinitions
	>;
	params: TParams;
	options?: StartQueryActionCreatorOptions;
	request: LoaderFunctionArgs<TContext>['request'];
};
