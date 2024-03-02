import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from './types';

const initialState: { items: Task[] } = {
	items: []
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		createTask: (state, action: PayloadAction<Task>) => {
			state.items.push(action.payload);
		},
		updateTask: (state, action: PayloadAction<Task>) => {
			state.items = state.items.map((item) => (item.id === action.payload.id ? action.payload : item));
		},
		deleteTaskById: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		}
	}
});

export const selectTasks = (store: StoreState) => store.tasks.items;
export const selectTaskById = (id: number) => (store: StoreState) => store.tasks.items.find((item) => item.id === id);
export const selectTasksCount = (store: StoreState) => store.tasks.items.length;

export const { createTask, deleteTaskById, updateTask } = tasksSlice.actions;
