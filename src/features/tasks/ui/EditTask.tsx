import { ChangeEventHandler, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskById, updateTask } from 'entities/tasks';
import { useTranslation } from 'shared/lib/i18n';
import { Button, Input } from 'shared/ui';
import styles from './EditTask.module.scss';

interface Props {
	id: number;
}

export const EditTask: FC<Props> = ({ id }) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const { t } = useTranslation();
	const dispatch = useDispatch<StoreDispatch>();
	const task = useSelector(selectTaskById(id));

	const handleClickEdit = () => {
		setIsEditing(true);
	};
	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value);
	};

	const handleApply = () => {
		if (task) {
			dispatch(updateTask({ done: task.done, id, name: value }));
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
