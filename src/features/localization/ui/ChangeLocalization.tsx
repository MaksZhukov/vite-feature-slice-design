import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { FC, ReactNode } from 'react';
import { Languages, useTranslation } from 'shared/lib/i18n';
import { MenuItem, Select } from 'shared/ui';

export const ChangeLocalization: FC = () => {
	const { i18n } = useTranslation();
	const handleChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void = (event) => {
		i18n.changeLanguage(event.target.value as Languages);
	};
	return (
		<Select onChange={handleChange} value={i18n.language} variant='outlined' size='small'>
			{Object.values(Languages).map((language) => (
				<MenuItem key={language} value={language}>
					{language}
				</MenuItem>
			))}
		</Select>
	);
};
