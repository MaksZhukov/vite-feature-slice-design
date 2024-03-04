import { withProviders } from 'app/providers';
import { Routing } from 'pages';
import { Localization } from 'widgets/localization';
import { Theme } from 'widgets/theme';
import { initI18n } from 'shared/lib/i18n';

initI18n();
const App = () => {
	return (
		<div>
			<Localization></Localization>
			<Theme></Theme>
			<Routing></Routing>
		</div>
	);
};

const AppWithProviders = withProviders(App);

export default AppWithProviders;
