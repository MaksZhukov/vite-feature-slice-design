import { withProviders } from 'app/providers';
import { Routing } from 'pages';
import './App.scss';

const App = () => {
	return <Routing></Routing>;
};

const AppWithProviders = withProviders(App);

export default AppWithProviders;
