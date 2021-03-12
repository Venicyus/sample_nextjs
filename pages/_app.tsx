import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';

import '@app/styles/bootstrap.theme.scss';
import '@app/styles/global.scss';
import { AppProvider } from '@app/hooks/useStories';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <AppProvider initialState={pageProps.initialState}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
