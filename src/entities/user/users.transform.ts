import { createTransform } from 'redux-persist';
import { IUsersState, usersSlice } from './users.slice';
import { TSerializedMap } from '~shared/lib/util-types/serialized-map.type';

export const usersTransform = createTransform<
	IUsersState | undefined,
	TSerializedMap<IUsersState> | undefined
>(
	(inboundState) =>
		inboundState && {
			...inboundState,
			us: Array.from(inboundState.us.values())
		},
	(outboundState) =>
		outboundState && {
			...outboundState,
			us: new Map(outboundState.us.map((u) => [u.login, u]))
		},
	{ whitelist: [usersSlice.name] }
);

// export const usersTransform = createTransform<
// 	TRootState | undefined,
// 	TSerializedMap<TRootState> | undefined
// >(
// 	(inboundState, key) => {
// 		if (key === usersSlice.name && inboundState) {
// 			const subState = inboundState[key];
// 			const transformedSubState = {
// 				...subState,
// 				us: Array.from(subState.us.values())
// 			};
// 			return { ...inboundState, [usersSlice.name]: transformedSubState };
// 		}
// 		//
// 	},
// 	(outboundState, key) => {
// 		if (key === usersSlice.name && outboundState) {
// 			const subState = outboundState[key];
// 			const transformedSubState = {
// 				...subState,
// 				us: new Map(subState.us.map((u) => [u.login, u]))
// 			};
// 			return { ...outboundState, [usersSlice.name]: transformedSubState };
// 		}
// 	},
// 	{ whitelist: [usersSlice.name] }
// );
