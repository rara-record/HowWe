import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { authService } from 'service/firebase';

export const getSignUp2 = async (email: string, password: string) => {
  try {
    const data = await createUserWithEmailAndPassword(
      authService,
      email,
      password
    );
    const getToken = await data.user.getIdToken();
    return getToken;
  } catch (error) {
    console.log(error);
  }
};

export const socialSignIn = async (sns: string) => {
  let provider: firebase.auth.AuthProvider;

  try {
    switch (sns) {
      case 'Google':
        provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider, 'gprovider');
        break;

      case 'Facebook':
        provider = new firebase.auth.FacebookAuthProvider();
        console.log(provider, 'fbprovider');
        break;

      default:
        throw new Error('Unsupported SNS' + sns);
    }
  } catch (error) {}
};
