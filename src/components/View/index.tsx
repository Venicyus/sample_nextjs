import React, { ReactNode } from 'react';
import Head from 'next/head';

import SpinnerComponent from './Spinner';
import styles from './styles.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

const ViewComponent: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>

      <SpinnerComponent show={false} />
      <div className={styles.container}>{children}</div>
    </>
  );
};
export default ViewComponent;
