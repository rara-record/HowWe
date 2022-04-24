import axios, { AxiosError } from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const { REACT_APP_FIREBASE_API_KEY } = process.env;

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

export const getSignUp = async (
  enteredEmail: string,
  enteredPassword: string
) => {
  return await httpClient
    .post(`/accounts:signUp?key=${REACT_APP_FIREBASE_API_KEY}`, {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    })
    .then(response => response)
    .catch(err => alert('로그인 실패'));
};

export const getSignIn = async (
  enteredEmail: string,
  enteredPassword: string
) => {
  return await httpClient
    .post(`/accounts:signInWithPassword?key=${REACT_APP_FIREBASE_API_KEY}`, {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    })
    .then(response => response)
    .catch(err => alert('로그인 실패'));
};

export const changeNewPassword = async (token: string, newPassword: string) => {
  return await httpClient
    .post(`/accounts:update?key=${REACT_APP_FIREBASE_API_KEY}`, {
      idToken: token,
      password: newPassword,
      returnSecureToken: false,
    })
    .then(response => response.data.idToken)
    .catch(err => {
      if (err.response && err.response.status === 400) {
        console.log('에러');
      }
    })
    .finally(() => {});
};
