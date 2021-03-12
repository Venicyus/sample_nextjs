import React, { ReactElement } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

import useStories from '@app/hooks/useStories';
import ViewComponent from '@app/components/View';

const LoginPage: React.FC = (): ReactElement => {
  const { appStore } = useStories();

  return (
    <ViewComponent title="Home">
      <div>Hello Nextjs 👋</div>

      <Button variant="primary" onClick={() => appStore.setIsLoading(!appStore.isLoading)}>
        Teste Mobx
      </Button>

      <div>{appStore.isLoading ? 'Ligado' : 'Desligado'}</div>

      <Link href="/">Home</Link>
    </ViewComponent>
  );
};

export default observer(LoginPage);
