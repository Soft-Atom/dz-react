declare module '*.module.css' {
	const content: Record<string, string>;
	export default content;
}

type TStore = typeof import('~app/app.store').appStore;
type TAppErors = import('~shared/lib/app-error').TAppErors;

declare type TRootState = ReturnType<TStore['getState']>;
declare type TAppDispatch = TStore['dispatch'];
declare type TThunkApiConfig = {
	state: TRootState;
	dispatch: TAppDispatch;
	rejectValue: TAppErors;
};
