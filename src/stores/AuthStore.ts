import { createContext } from 'react';
import { makeObservable, observable } from 'mobx';
import { getSignUp, getSignIn } from 'api/userAuth';
import { authService } from 'service/firebase';

interface IUser {
  uid: string | null;
  photoURL: string | null;
  displayName: any;
  email: string | null;
  createdAt: any;
}

class AuthStore {
  @observable user: IUser | null = null;
  @observable isLoggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  signUp = async (name: string, email: string, password: string) => {
    await getSignUp(name, email, password);
  };

  signIn = async (email: string, password: string) => {
    const res = await getSignIn(email, password);
    if (res) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  };

  signOut = () => {
    this.isLoggedIn = false;
    authService.signOut();
  };
}

export default createContext(new AuthStore());
