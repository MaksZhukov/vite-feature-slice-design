import compose from 'compose-function';
import { withStore } from './store';
import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

export const withProviders = compose(withStore, withRouter, withTheme);
