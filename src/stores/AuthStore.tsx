import { getSignUp, getLogin, changeNewPassword } from 'api/auth';
import { makeObservable, observable } from 'mobx';
import { createContext } from 'react';

class AuthStore {
  @observable token: string | null = '';
  @observable isLoggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  signUp = async (email: string, password: string) => {
    const data = await getSignUp(email, password);
    this.token = data;
  };

  login = async (email: string, password: string) => {
    const data = await getLogin(email, password);

    if (data) {
      this.token = data;
      this.isLoggedIn = true;
    }
  };

  newPassword = async (token: string | null, enterdNewPassword: string) => {
    if (token) {
      await changeNewPassword(token, enterdNewPassword);
      this.isLoggedIn = false;
    }
  };

  logout = () => {
    this.token = null;
    this.isLoggedIn = false;
  };
}

// export const AuthContextProvider = props => {
//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

export default createContext(new AuthStore());
