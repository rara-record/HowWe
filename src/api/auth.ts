import axios, { AxiosError } from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  }
);

export const getSignIn = async (
  enteredEmail: string,
  enteredPassword: string
) => {
  return await httpClient
    .post(
      `/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }
    )
    .then(response => response.data.idToken)
    .catch(err => {
      console.log(err);
    });
};

export const getSignOut = async (
  enteredEmail: string,
  enteredPassword: string
) => {
  return await httpClient
    .post(`/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    })
    .then(response => response.data.idToken)
    .catch(err => {
      console.log(err);
    });
};
