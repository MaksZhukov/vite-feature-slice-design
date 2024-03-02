export {};

declare global {
	/**
	 * ⚠️ FSD
	 *
	 * Its hack way to export redux infering types from @/app
	 * and use it in @/shared/model/hooks.ts
	 */

	// eslint-disable-next-line @typescript-eslint/consistent-type-imports
	declare type StoreState = import('./src/app/providers/store').StoreState;
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports
	declare type StoreDispatch = import('./src/app/providers/store').StoreDispatch;
}
