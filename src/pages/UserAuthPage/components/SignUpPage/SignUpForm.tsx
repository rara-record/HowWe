import AuthStore from 'stores/AuthStore';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

interface IFormValues {
  email: string;
  pwd: string;
  checkPwd: string;
}

const SignUpForm = () => {
  let navigate = useNavigate();
  const authStore = useContext(AuthStore);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    pwd: yup.string().min(7).max(12).required(),
    checkPwd: yup
      .string()
      .oneOf([yup.ref('pwd'), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormValues) => {
    const enteredEmail = data.email;
    const enteredPassword = data.pwd;
    await authStore.signUp(enteredEmail, enteredPassword);
    !authStore.isLoggedIn && !authStore.isAuthFail && navigate('/signIn');
  };

  return (
    <Container>
      {!authStore.isLoggedIn && authStore.isAuthFail && (
        <div>{authStore.errorMessage}</div>
      )}
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <input type="email" {...register('email')} />
        <span>{errors.email && '이메일 형식이 아닙니다.'}</span>

        <label htmlFor="pwd">비밀번호</label>
        <input type="password" {...register('pwd')} />
        <span>{errors.pwd && '비밀번호 형식이 아닙니다.'}</span>

        <label htmlFor="checkPwd">비밀번호 확인</label>
        <input type="password" {...register('checkPwd')} />
        <span>{errors.checkPwd && '비밀번호가 맞지 습니다.'}</span>

        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </Container>
  );
};

export default observer(SignUpForm);

const Container = styled.section``;
