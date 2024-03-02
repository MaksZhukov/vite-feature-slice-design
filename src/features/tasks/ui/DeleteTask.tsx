import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskById } from 'entities/tasks';
import { Button } from 'shared/ui';

interface Props {
	id: number;
}

export const DeleteTask: FC<Props> = ({ id }) => {
	const dispatch = useDispatch<StoreDispatch>();

	const handleClickDelete = () => {
		dispatch(deleteTaskById(id));
	};
	return <Button onClick={handleClickDelete}>Delete</Button>;
};
