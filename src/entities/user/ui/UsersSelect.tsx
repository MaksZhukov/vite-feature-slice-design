import { ChangeEventHandler, FC } from 'react';

interface Props {
	value?: number;
	name?: string;
	className?: string;
	onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const UsersSelect: FC<Props> = ({ name = 'responsibleUserId', value, className = '', onChange }) => {
	return (
		<select
			defaultValue={value}
			name={name}
			onChange={onChange}
			className={`font-normal border border-gray-300 text-sm rounded-lg block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-accent focus:outline-none ${className}`}>
			<option value='none'>не выбрано</option>
			{[1, 2, 3, 4].map((item) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	);
};

export default UsersSelect;
