import { authService } from 'service/firebase';

export const getSignUp = async (
  name: string,
  email: string,
  password: string
) => {
  return authService
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      if (res) {
        const User = authService.currentUser;
        User?.updateProfile({ displayName: name });
      }
    })
    .catch(error => {
      alert('회원가입이 실패하였습니다.');
      console.log(error.message);
    });
};

export const getSignIn = async (email: string, password: string) => {
  return authService
    .signInWithEmailAndPassword(email, password)
    .then(res => res)
    .catch(error => {
      alert('로그인 정보가 맞지 않습니다.');
      console.log(error.message);
    });
};
