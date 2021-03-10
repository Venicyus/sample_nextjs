import { AppProps } from 'next/app';

import '@app/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
