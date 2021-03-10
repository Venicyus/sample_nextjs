import { ReactNode } from 'react';
import Head from 'next/head';

import styles from './styles.module.css';

type Props = {
  title: string;
  children: ReactNode;
};

const ViewComponent = ({ title, children }: Props) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
    <div className={styles.container}>{children}</div>
  </>
);

export default ViewComponent;
