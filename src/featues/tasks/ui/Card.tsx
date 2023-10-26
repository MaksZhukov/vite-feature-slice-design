import { FC } from 'react';
import Checkbox from 'entities/tasks/ui/Checkbox';
import Input from 'entities/tasks/ui/Input';

const Card: FC = () => {
	return (
		<div>
			<Input></Input>
			<Checkbox></Checkbox>
		</div>
	);
};

export default Card;
