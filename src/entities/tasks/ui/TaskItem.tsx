import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectTaskById } from '..';

type Props = { id: number; actions: ReactNode };

export const TaskItem: FC<Props> = ({ id, actions }) => {
	const task = useSelector(selectTaskById(id));
	return (
		task && (
			<div>
				{task.name} {actions}
			</div>
		)
	);
};
