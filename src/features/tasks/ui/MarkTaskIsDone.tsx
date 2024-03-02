import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskById, updateTask } from 'entities/tasks';
import { Checkbox } from 'shared/ui';

interface Props {
	id: number;
}

export const MarkTaskIsDone: FC<Props> = ({ id }) => {
	const task = useSelector(selectTaskById(id));
	const dispatch = useDispatch<StoreDispatch>();

	const handleChangeCheckbox: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void = (_, checked) => {
		if (task) {
			dispatch(updateTask({ id, done: checked, name: task.name }));
		}
	};

	return task && <Checkbox checked={task.done} onChange={handleChangeCheckbox}></Checkbox>;
};
