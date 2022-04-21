import React, { useState } from 'react';

interface IAuthStore {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface IProps {
  children: React.ReactChild;
}

const AuthStore = React.createContext<IAuthStore>({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthStoreProvider = (props: IProps) => {
  const [token, setToken] = useState<string | null>(null);

  // TODO: !! => null, undefined 등과 같은 정의 되지 않은 변수들을 강제 변환
  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    token && setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthStore.Provider value={contextValue}>
      {props.children}
    </AuthStore.Provider>
  );
};

export default AuthStore;
