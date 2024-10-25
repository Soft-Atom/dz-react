type TSomeObject = Record<string | number, unknown>;

export type TRecursiveExtract<
	T extends TSomeObject,
	ExtractType extends TSomeObject
> = {
	[k in keyof T]: T[k] extends TSomeObject
		? T[k] extends ExtractType
			? T[k]
			: TRecursiveExtract<T[k], ExtractType>
		: never;
}[keyof T];
