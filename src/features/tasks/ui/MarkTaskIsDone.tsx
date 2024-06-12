import { ChangeEvent, FC } from 'react';
import { selectTaskById } from 'entities/tasks';
import { Checkbox } from 'shared/ui';
import { useRecoilValue } from 'recoil';
import { useUpdateTask } from 'entities/tasks/model/model';

interface Props {
	id: number;
}

export const MarkTaskIsDone: FC<Props> = ({ id }) => {
	const task = useRecoilValue(selectTaskById(id));
	const updateTask = useUpdateTask();

	const handleChangeCheckbox: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void = (_, checked) => {
		if (task) {
			updateTask({ id, done: checked, name: task.name });
		}
	};

	return task && <Checkbox checked={task.done} onChange={handleChangeCheckbox}></Checkbox>;
};
