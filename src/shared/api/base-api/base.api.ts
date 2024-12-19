import {
	// Api,
	// BaseQueryFn,
	// coreModuleName,
	createApi,
	// FetchArgs,
	fetchBaseQuery //,
	// FetchBaseQueryError,
	// FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
	baseUrl: 'url'
});

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: baseQuery,
	endpoints: () => ({})
});

// export class AppApi {
// 	static baseQuery: BaseQueryFn<
// 		string | FetchArgs,
// 		unknown,
// 		FetchBaseQueryError,
// 		object,
// 		FetchBaseQueryMeta
// 	>;
// 	private static instance: Api<
// 		typeof AppApi.baseQuery,
// 		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
// 		{},
// 		'api',
// 		never,
// 		typeof coreModuleName
// 	>;

// 	private constructor() {
// 		AppApi.baseQuery = fetchBaseQuery({
// 			baseUrl: 'env.VITE_API_ENDPOINT'
// 		});
// 		AppApi.instance = createApi({
// 			reducerPath: 'api',
// 			baseQuery: AppApi.baseQuery,
// 			endpoints: () => ({})
// 		});

// 	}

// 	public static get() {
// 		if (!AppApi.instance) new AppApi();
// 		return this.baseQuery;
// 	}

// static readonly baseQuery = fetchBaseQuery({
// 	baseUrl: 'env.VITE_API_ENDPOINT'
// });
// static readonly api = createApi({
// 	reducerPath: 'api',
// 	baseQuery: Api.baseQuery,
// 	endpoints: () => ({})
// });
//}
