declare module '*.module.css' {
	const content: Record<string, string>;
	export default content;
}

type TStore = typeof import('~app/app-store').appStore;
declare type TRootState = ReturnType<TStore['getState']>;
declare type TAppDispatch = TStore['dispatch'];
