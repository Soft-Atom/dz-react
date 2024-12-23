import {
	ApiEndpointQuery,
	EndpointDefinitions,
	QueryDefinition,
	StartQueryActionCreatorOptions
} from '@reduxjs/toolkit/query';
import { LoaderFunctionArgs } from 'react-router-dom';
import { TBaseQuery } from '../../api/base-api';

export type TLoaderArg<
	TArg,
	TagTypes extends string,
	TRes,
	TDefinitions extends EndpointDefinitions,
	TContext
> = {
	endpoint: ApiEndpointQuery<
		QueryDefinition<TArg, TBaseQuery, TagTypes, TRes>,
		TDefinitions
	>;
	arg: TArg;
	options?: StartQueryActionCreatorOptions;
	request: LoaderFunctionArgs<TContext>['request'];
};
