import { FC, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { selectTaskById } from '../model/model';

type Props = { id: number; actions: ReactNode };

export const TaskItem: FC<Props> = ({ id, actions }) => {
	const task = useRecoilValue(selectTaskById(id));
	return (
		task && (
			<div>
				{task.name} {actions}
			</div>
		)
	);
};
