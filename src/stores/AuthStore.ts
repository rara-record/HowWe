import firebase from 'firebase/compat/app';
import { createContext } from 'react';
import { makeObservable, observable } from 'mobx';
import { getSignUp, getSignIn } from 'api/userAuth';

class AuthStore {
  @observable user: firebase.User | null | firebase.auth.UserCredential | void =
    null;
  @observable isLoggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  signUp = async (name: string, email: string, password: string) => {
    await getSignUp(name, email, password);
  };

  signIn = async (email: string, password: string) => {
    const res = await getSignIn(email, password);
    this.user = res;

    if (this.user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  };

  signOut = () => {
    this.user = null;
    this.isLoggedIn = false;
  };
}

export default createContext(new AuthStore());
