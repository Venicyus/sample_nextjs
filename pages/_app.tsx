import React from 'react';
import { AppProps } from 'next/app';

import { AppProvider } from '@app/hooks/useStories';

import '@app/styles/bootstrap.theme.scss';
import '@app/styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider initialState={pageProps.initialState}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
