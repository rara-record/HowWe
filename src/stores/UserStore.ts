import { createContext } from 'react';
import { makeObservable, observable } from 'mobx';
import { onAuthStateChanged } from '@firebase/auth';
import { authService } from 'service/firebase';

interface IUser {
  uid: string | null;
  photoURL: string | null;
  displayName: any;
  email: string | null;
  createdAt: any;
}

class UserStore {
  @observable user: IUser | null = null;

  constructor() {
    makeObservable(this);
  }

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

export default createContext(new UserStore());
