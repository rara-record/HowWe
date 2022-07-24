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
      localStorage.setItem(
        'user',
        JSON.stringify(authService.currentUser?.uid)
      );
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  };

  signOut = () => {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    authService.signOut();
  };

  IsUser = () => {
    localStorage.getItem('user')
      ? (this.isLoggedIn = true)
      : (this.isLoggedIn = false);
  };
}

export default createContext(new AuthStore());
