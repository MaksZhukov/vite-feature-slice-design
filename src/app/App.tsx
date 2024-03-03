import { withProviders } from 'app/providers';
import { Routing } from 'pages';
import { Localization } from 'widgets/localization';
import { initI18n } from 'shared/lib/i18n';

initI18n();
const App = () => {
	return (
		<>
			<Localization></Localization>
			<Routing></Routing>
		</>
	);
};

const AppWithProviders = withProviders(App);

export default AppWithProviders;
