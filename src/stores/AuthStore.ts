import firebase from 'firebase/compat/app';

import { createContext } from 'react';
import { makeObservable, observable } from 'mobx';
import { getSignUp, getSignIn } from 'api/userAuth';

class AuthStore {
  @observable user: firebase.User | null | firebase.auth.UserCredential | void =
    null;
  @observable isLoggedIn: boolean = false;
  @observable isAuthFail: boolean = false;

  constructor() {
    makeObservable(this);
  }

  signUp = async (name: string, email: string, password: string) => {
    const userInfo = await getSignUp(name, email, password);
    console.log(userInfo);
  };

  signIn = async (email: string, password: string) => {
    const apiRes = await getSignIn(email, password);
    console.log(apiRes);
    apiRes ? (this.isLoggedIn = true) : (this.isLoggedIn = false);
  };

  signOut = () => {
    this.user = null;
    this.isLoggedIn = false;
  };

  // @action newPassword = async (
  //   token: string | null,
  //   enterdNewPassword: string
  // ) => {
  //   if (token) {
  //     await changeNewPassword(token, enterdNewPassword);
  //     this.isLoggedIn = false;
  //   }
  // };
}

export default createContext(new AuthStore());
