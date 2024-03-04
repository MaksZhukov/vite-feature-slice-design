import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo, useState } from 'react';
import { ThemeMode } from 'entities/theme';
import { ThemeContext } from 'entities/theme';

export const withTheme = (component: () => React.ReactNode) => () => {
	const [mode, setMode] = useState<ThemeMode>(ThemeMode.Light);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode
				}
			}),
		[mode]
	);
	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline></CssBaseline>
				{component()}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
