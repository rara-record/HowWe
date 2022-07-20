import firebase from 'firebase/compat/app';
import { authService, db } from 'service/firebase';

export const getSignUp = async (
  name: string,
  email: string,
  password: string
) => {
  return authService
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential: firebase.auth.UserCredential) => {
      db.collection('users') //
        .doc(userCredential.user!.uid)
        .set({
          email: email,
          username: name,
        });
      return userCredential;
    })
    .catch(error => {
      console.log(error.message);
      alert(error.message);
    });
};

export const getSignIn = async (email: string, password: string) => {
  return authService
    .signInWithEmailAndPassword(email, password)
    .then(response => console.log(response))
    .catch(error => {
      console.log(error.message);
      alert(error.message);
    });
};

// export const changeNewPassword = async (token: string, newPassword: string) => {
//   return await httpClient
//     .post(`/accounts:update?key=${REACT_APP_FIREBASE_API_KEY}`, {
//       idToken: token,
//       password: newPassword,
//       returnSecureToken: false,
//     })
//     .then(response => response.data.idToken)
//     .catch(err => {
//       if (err.response && err.response.status === 400) {
//         console.log('에러');
//       }
//     })
//     .finally(() => {});
// };
