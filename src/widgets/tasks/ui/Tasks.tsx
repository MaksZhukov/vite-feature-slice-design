import { useSelector } from 'react-redux';
import { CreateTask, DeleteTask, MarkTaskIsDone } from 'features/tasks';
import { selectTasks } from 'entities/tasks';
import { TaskItem } from 'entities/tasks';

export const Tasks = () => {
	const tasks = useSelector(selectTasks);
	return (
		<div>
			TASKS
			<CreateTask></CreateTask>
			{tasks.map((item) => (
				<TaskItem
					key={item.id}
					id={item.id}
					actions={
						<>
							<MarkTaskIsDone id={item.id}></MarkTaskIsDone>
							<DeleteTask id={item.id}></DeleteTask>
						</>
					}></TaskItem>
			))}
		</div>
	);
};
