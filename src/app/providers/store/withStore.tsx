import { RecoilRoot } from 'recoil';

export const withStore = (component: () => React.ReactNode) => () => <RecoilRoot>{component()}</RecoilRoot>;
