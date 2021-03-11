import React, { ReactElement } from 'react';
import { Spinner } from 'react-bootstrap';

import styles from './styles.module.scss';

type Props = {
  show: boolean;
};

const SpinnerComponent = ({ show }: Props): ReactElement => {
  return (
    show && (
      <div className={styles.loading}>
        <Spinner animation="border" variant="light" />
      </div>
    )
  );
};

export default SpinnerComponent;
