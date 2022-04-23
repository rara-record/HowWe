import { createContext } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { getSignUp, getSignIn, changeNewPassword } from 'api/userAuth';

class AuthStore {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;
  @observable isAuthFail: boolean = false;
  @observable errorMessage: string = '';

  constructor() {
    makeObservable(this);
  }

  @action signUp = async (email: string, password: string) => {
    const apiRes = await getSignUp(email, password);

    if (apiRes && apiRes.status === 200) {
      const apiData = await apiRes.data;
      this.token = apiData.idToken;
      this.errorMessage = '';
    } else {
      this.isAuthFail = true;
      this.errorMessage = '이미 존재하는 이메일입니다.';
    }
  };

  @action signIn = async (email: string, password: string) => {
    const apiRes = await getSignIn(email, password);
    console.log(apiRes);
    if (apiRes && apiRes.status === 200) {
      const apiData = await apiRes.data;
      this.token = apiData.idToken;
      this.isLoggedIn = true;
    } else {
      this.isAuthFail = true;
      this.errorMessage = '아이디 및 비밀번호가 일치하지 않습니다.';
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
