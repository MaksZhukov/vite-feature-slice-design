import { FormControlLabel } from '@mui/material';
import { ChangeEvent, FC, useContext } from 'react';
import { ThemeContext, useTheme, ThemeMode } from 'entities/theme';
import { useTranslation } from 'shared/lib/i18n';
import { Switch } from 'shared/ui';

export const ChangeTheme: FC = () => {
	const { t } = useTranslation();
	const theme = useTheme();
	const { setMode } = useContext(ThemeContext);
	const handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void = (_, checked) => {
		setMode(checked ? ThemeMode.Light : ThemeMode.Dark);
	};

	return (
		<FormControlLabel
			control={<Switch checked={theme.palette.mode === 'light'} onChange={handleChange}></Switch>}
			label={theme.palette.mode === 'light' ? t('Light') : t('Dark')}></FormControlLabel>
	);
};
