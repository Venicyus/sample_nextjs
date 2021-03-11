import ViewComponent from '@app/components/View';
import React, { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  return (
    <ViewComponent title="Home">
      <div>Hello Nextjs 👋</div>
    </ViewComponent>
  );
};

export default HomePage;
