import { ChangeEventHandler, FC, useState } from 'react';
import { useTranslation } from 'shared/lib/i18n';
import { Button, Input } from 'shared/ui';
import styles from './EditTask.module.scss';
import { useRecoilValue } from 'recoil';
import { selectTaskById, useUpdateTask } from 'entities/tasks/model/model';

interface Props {
	id: number;
}

export const EditTask: FC<Props> = ({ id }) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const { t } = useTranslation();
	const updateTask = useUpdateTask();
	const task = useRecoilValue(selectTaskById(id));

	const handleClickEdit = () => {
		setIsEditing(true);
	};
	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value);
	};

	const handleApply = () => {
		if (task) {
			updateTask({ done: task.done, id, name: value });
			setIsEditing(false);
		}
	};
	return isEditing ? (
		<>
			<Input className={styles.input} value={value} onChange={handleChange}></Input>
			<Button onClick={handleApply}>{t('Apply')}</Button>
		</>
	) : (
		<Button onClick={handleClickEdit}>{t('Edit')}</Button>
	);
};
