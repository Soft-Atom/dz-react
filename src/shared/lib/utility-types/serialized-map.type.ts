export type TSerializedMap<T extends object> = {
	[K in keyof T]: T[K] extends Map<unknown, infer V>
		? V extends object
			? Array<TSerializedMap<V>>
			: Array<V>
		: T[K] extends object
		? TSerializedMap<T[K]>
		: T[K];
};
