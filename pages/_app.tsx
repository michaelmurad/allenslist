import '@styles/globals.css';
import { RecoilRoot } from 'recoil';

import initializeFirebase from '@utilities/firebase';

import { AppProps } from 'next/dist/next-server/lib/router/router';

export const reportWebVitals = (metric: unknown): void => {
  console.log(metric);
};

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  initializeFirebase();
  return (
    <RecoilRoot>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
};

export default App;
