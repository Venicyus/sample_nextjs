import React, { createContext, useContext } from 'react';

import Store, { IStore, useStore } from '@app/stores/Store';

const Context = createContext<Store | null>(null);

type Props = {
  initialState: Store;
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ initialState, children }) => {
  const store = useStore(initialState);

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

const useStories = (): IStore => {
  const stories = useContext(Context);

  return stories;
};

export default useStories;
