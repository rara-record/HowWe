import { createContext } from 'react';
import { makeObservable, observable } from 'mobx';
import { getSignUp, getSignIn } from 'api/userAuth';

import { onAuthStateChanged } from '@firebase/auth';
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
    this.user = null;
    this.isLoggedIn = false;
  };

  unsubscribe = onAuthStateChanged(authService, user => {
    if (user) {
      const userObj = {
        uid: user.uid,
        photoURL: user.photoURL,
        displayName:
          user.displayName || authService.currentUser?.displayName || '카페인',
        email: user.email,
        createdAt: user.metadata.creationTime,
      };
      this.user = userObj;
    }
  });
}

export default createContext(new AuthStore());
