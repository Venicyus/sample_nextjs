import { useMemo } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';

import AppStore from './AppStore';

const isServer = (): boolean => typeof window === 'undefined';
enableStaticRendering(isServer());

export interface IStore {
  appStore: AppStore;
}

let store: Store;

class Store {
  @observable
  public appStore: AppStore = new AppStore();

  constructor() {
    makeObservable(this);
  }

  @action
  public hydrate = (store: IStore): void => {
    if (!store) return;

    this.appStore = store.appStore ?? new AppStore();
  };
}

const initializeStore = (initialData: IStore | null = null): Store => {
  const _store = store ?? new Store();

  if (initialData) {
    _store.hydrate(initialData);
  }

  if (isServer()) return _store;

  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState: IStore): Store => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};

export default Store;
