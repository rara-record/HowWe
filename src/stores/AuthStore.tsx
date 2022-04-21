import { getSignIn, getSignOut } from 'data/auth';
import { makeObservable, observable } from 'mobx';
import { createContext } from 'react';

class AuthStore2 {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  loginHandler = async (email: string, password: string) => {
    const data = await getSignIn(email, password);
    this.token = data;
    this.isLoggedIn = true;
  };

  logoutHandler = async (email: string, password: string) => {
    await getSignOut(email, password);
    this.token = null;
    this.isLoggedIn = false;
  };
}

export default createContext(new AuthStore2());
