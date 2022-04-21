import { getSignUp, getLogin, changeNewPassword } from 'api/auth';
import { makeObservable, observable } from 'mobx';
import { createContext } from 'react';

class AuthStore {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  signUpHandler = async (email: string, password: string) => {
    const data = await getSignUp(email, password);
    this.token = data;
  };

  loginHandler = async (email: string, password: string) => {
    const data = await getLogin(email, password);

    if (data) {
      this.token = data;
      this.isLoggedIn = true;
    }
  };

  newPassword = async (token: string | null, enterdNewPassword: string) => {
    if (token) {
      await changeNewPassword(token, enterdNewPassword);
      this.isLoggedIn = false;
    }
  };

  // logoutHandler = async (email: string, password: string) => {
  //   await getSignIn(email, password);
  //   this.token = null;
  //   this.isLoggedIn = false;
  // };
}

export default createContext(new AuthStore());
