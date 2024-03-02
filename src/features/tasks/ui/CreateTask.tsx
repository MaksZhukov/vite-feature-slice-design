import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, selectTasksCount } from 'entities/tasks';
import { Button, Checkbox, Input } from 'shared/ui';

export const CreateTask: FC = () => {
	const [name, setName] = useState<string>('');
	const [done, setDone] = useState<boolean>(false);
	const tasksCount = useSelector(selectTasksCount);
	const dispatch = useDispatch<StoreDispatch>();
	const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
		setName(event.target.value);
	};
	const handleChangeCheckbox: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void = (_, checked) => {
		setDone(checked);
	};

	const handleClickCreate = () => {
		dispatch(createTask({ id: tasksCount, name, done }));
	};
	return (
		<div>
			<Input value={name} onChange={handleChangeInput}></Input>
			<Checkbox checked={done} onChange={handleChangeCheckbox}></Checkbox>
			<Button onClick={handleClickCreate}>Create</Button>
		</div>
	);
};
