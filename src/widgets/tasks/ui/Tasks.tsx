import { useSelector } from 'react-redux';
import { CreateTask, DeleteTask, EditTask, MarkTaskIsDone } from 'features/tasks';
import { selectTasks } from 'entities/tasks';
import { TaskItem } from 'entities/tasks';
import { useTranslation } from 'shared/lib/i18n';
import styles from './Tasks.module.scss';

export const Tasks = () => {
	const { t } = useTranslation();
	const tasks = useSelector(selectTasks);
	return (
		<div className={styles.wrapper}>
			{t('Tasks')}
			<CreateTask></CreateTask>
			{tasks.map((item) => (
				<TaskItem
					key={item.id}
					id={item.id}
					actions={
						<>
							<MarkTaskIsDone id={item.id}></MarkTaskIsDone>
							<EditTask id={item.id}></EditTask>
							<DeleteTask id={item.id}></DeleteTask>
						</>
					}></TaskItem>
			))}
		</div>
	);
};
