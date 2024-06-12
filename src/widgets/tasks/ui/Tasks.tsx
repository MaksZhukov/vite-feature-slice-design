import { CreateTask, DeleteTask, EditTask, MarkTaskIsDone } from 'features/tasks';
import { TaskItem } from 'entities/tasks';
import { useTranslation } from 'shared/lib/i18n';
import styles from './Tasks.module.scss';
import { useRecoilValue } from 'recoil';
import { selectTasks, selectTasksCount } from 'entities/tasks/model/model';

export const Tasks = () => {
	const { t } = useTranslation();
	const tasks = useRecoilValue(selectTasks);
	const tasksCount = useRecoilValue(selectTasksCount);

	return (
		<div className={styles.wrapper}>
			{t('Tasks')} {tasksCount}
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
