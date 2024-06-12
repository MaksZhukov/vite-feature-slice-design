import { atom, selector, selectorFamily, useRecoilState } from 'recoil';
import { Task } from './types';

const initialState: { items: Task[] } = {
	items: []
};

export const tasksState = atom({
	key: 'stateTasks',
	default: initialState
});

export const useCreateTask = () => {
	const [state, setState] = useRecoilState(tasksState);
	return (data: Task) => {
		setState({ items: [...state.items, data] });
	};
};

export const useUpdateTask = () => {
	const [state, setState] = useRecoilState(tasksState);
	return (data: Task) => {
		setState({ items: state.items.map((item) => (item.id === data.id ? data : item)) });
	};
};

export const useDeleteTaskById = () => {
	const [state, setState] = useRecoilState(tasksState);
	return (id: number) => {
		setState({ items: state.items.filter((item) => item.id !== id) });
	};
};

export const selectTasks = selector({
	key: 'tasks',
	get: ({ get }) => {
		return get(tasksState).items;
	}
});
export const selectTaskById = selectorFamily({
	key: 'taskById',
	get:
		(id: number) =>
		({ get }) => {
			return get(tasksState).items.find((item) => item.id === id);
		}
});
export const selectTasksCount = selector({
	key: 'tasksCount',
	get: ({ get }) => {
		return get(tasksState).items.length;
	}
});
