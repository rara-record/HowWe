import { createContext } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { getSignUp, getSignIn, changeNewPassword } from 'api/userAuth';

class AuthStore {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;
  @observable isAuthFail: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action signUp = async (email: string, password: string) => {
    const apiRes = await getSignUp(email, password);

    if (apiRes && apiRes.status === 200) {
      const apiData = await apiRes.data;
      this.token = apiData.idToken;
    } else {
      this.isAuthFail = true;
    }
  };

  @action signIn = async (email: string, password: string) => {
    const apiRes = await getSignIn(email, password);

    if (apiRes && apiRes.status === 200) {
      const apiData = await apiRes.data;
      this.token = apiData.idToken;
      this.isLoggedIn = true;
    } else {
      this.isAuthFail = true;
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
