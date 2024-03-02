import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from 'entities/tasks';

export const store = configureStore({
	reducer: {
		[tasksSlice.name]: tasksSlice.reducer
	}
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
