import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';

import '@app/styles/bootstrap.theme.scss';
import '@app/styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
