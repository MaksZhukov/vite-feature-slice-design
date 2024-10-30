import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import { useTranslation } from 'shared/lib/i18n';
import { Button, Checkbox, Input } from 'shared/ui';
import { useCreateTask } from 'entities/tasks/model/model';

export const CreateTask: FC = () => {
	const [name, setName] = useState<string>('');
	const [done, setDone] = useState<boolean>(false);
	const { t } = useTranslation();
	const createTask = useCreateTask();
	const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
		setName(event.target.value);
	};
	const handleChangeCheckbox: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void = (_, checked) => {
		setDone(checked);
	};

	const handleClickCreate = () => {
		createTask({ id: new Date().getTime(), name, done });
	};
	return (
		<div>
			<Input value={name} onChange={handleChangeInput}></Input>
			<Checkbox checked={done} onChange={handleChangeCheckbox}></Checkbox>
			<Button onClick={handleClickCreate}>{t('Create')}</Button>
		</div>
	);
};
