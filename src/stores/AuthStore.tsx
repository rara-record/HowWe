import { createContext } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { getSignUp, getSignIn, changeNewPassword } from 'api/userAuth';

class AuthStore {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action signUp = async (email: string, password: string) => {
    const data = await getSignUp(email, password);
    this.token = data;
    this.isLoggedIn = false;
  };

  @action signIn = async (email: string, password: string) => {
    const data = await getSignIn(email, password);

    if (data) {
      this.token = data;
      this.isLoggedIn = true;
    }
  };

  @action signOut = () => {
    this.token = null;
    this.isLoggedIn = false;
  };

  @action newPassword = async (
    token: string | null,
    enterdNewPassword: string
  ) => {
    if (token) {
      await changeNewPassword(token, enterdNewPassword);
      this.isLoggedIn = false;
    }
  };
}

export default createContext(new AuthStore());
