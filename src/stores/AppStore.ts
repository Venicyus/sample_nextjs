import { observable, action, makeObservable } from 'mobx';

class AppStore {
  @observable
  public isLoading = false;

  constructor() {
    makeObservable(this);
  }

  @action
  public setIsLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };
}

export default AppStore;
