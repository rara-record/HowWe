import { createContext } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { getSignUp, getSignIn } from 'api/userAuth';
import firebase from 'firebase/compat/app';

class AuthStore {
  @observable user: firebase.User | null | firebase.auth.UserCredential | void =
    null;
  @observable isLoggedIn: boolean = false;
  @observable isAuthFail: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action signUp = async (name: string, email: string, password: string) => {
    const userInfo = await getSignUp(name, email, password);
    this.user = userInfo;
    console.log(this.user);
  };

  @action signIn = async (email: string, password: string) => {
    const apiRes = await getSignIn(email, password);
    console.log(apiRes);
  };

  @action signOut = () => {
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
