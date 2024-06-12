import { FC } from 'react';
import { useTranslation } from 'shared/lib/i18n';
import { Button } from 'shared/ui';
import { useDeleteTaskById } from 'entities/tasks/model/model';

interface Props {
	id: number;
}

export const DeleteTask: FC<Props> = ({ id }) => {
	const deleteTaskById = useDeleteTaskById();
	const { t } = useTranslation();

	const handleClickDelete = () => {
		deleteTaskById(id);
	};
	return <Button onClick={handleClickDelete}>{t('Delete')}</Button>;
};
