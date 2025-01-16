import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ConfigService } from '../../lib/config-service/config.service';

export const baseQuery = fetchBaseQuery({
	baseUrl: ConfigService.get('apiEndpoint')
});

export const baseApi = createApi({
	tagTypes: ['tag1', 'tag2'],
	reducerPath: 'api',
	baseQuery: baseQuery,
	endpoints: () => ({})
});
