import { FC } from 'react';
import { Languages, useTranslation } from 'shared/lib/i18n';
import { MenuItem, Select } from 'shared/ui';

export const ChangeLocalization: FC = () => {
	const { i18n } = useTranslation();
	const handleChange = (language: Languages) => () => {
		i18n.changeLanguage(language);
	};
	return (
		<Select value={i18n.language} variant='outlined' size='small'>
			{Object.values(Languages).map((language) => (
				<MenuItem onClick={handleChange(language)} key={language} value={language}>
					{language}
				</MenuItem>
			))}
		</Select>
	);
};
