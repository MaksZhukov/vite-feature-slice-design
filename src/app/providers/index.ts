import compose from 'compose-function';
import { withStore } from './store';
import { withRouter } from './withRouter';

export const withProviders = compose(withRouter, withStore);
