import { createContext } from 'react';
import { makeObservable, observable } from 'mobx';
import { getSignUp, getSignIn, changeNewPassword } from 'api/userAuth';

class AuthStore {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;
  @observable isAuthFail: boolean = false;

  constructor() {
    makeObservable(this);
  }

  signUp = async (email: string, password: string) => {
    const apiRes = await getSignUp(email, password);
    console.log(apiRes);

    if (apiRes && apiRes.status === 200) {
      const apiData = await apiRes.data;
      this.token = apiData.idToken;
    } else {
      this.isAuthFail = true;
    }
  };

  signIn = async (email: string, password: string) => {
    const apiRes = await getSignIn(email, password);

    if (apiRes && apiRes.status === 200) {
      const apiData = await apiRes.data;
      this.token = apiData.idToken;
      this.isLoggedIn = true;
    } else {
      this.isAuthFail = true;
    }
  };

  signOut = () => {
    this.token = null;
    this.isLoggedIn = false;
  };

  newPassword = async (token: string | null, enterdNewPassword: string) => {
    if (token) {
      await changeNewPassword(token, enterdNewPassword);
      this.isLoggedIn = false;
    }
  };
}

export default createContext(new AuthStore());
