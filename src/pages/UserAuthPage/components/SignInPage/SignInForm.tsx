import AuthStore from 'stores/AuthStore';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

interface IFormValues {
  email: string;
  pwd: string;
}

const SignInForm = () => {
  let navigate = useNavigate();
  const authStore = useContext(AuthStore);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    pwd: yup.string().min(7).max(12).required(),
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
    await authStore.signIn(enteredEmail, enteredPassword);
    authStore.isLoggedIn && navigate('/');
  };

  return (
    <Container>
      {errors.email || errors.pwd ? (
        <span>이메일과 비밀번호 형식을 확인해주세요.</span>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <input type="email" {...register('email')} />

        <label htmlFor="pwd">비밀번호</label>
        <input type="password" {...register('pwd')} />

        <div>
          <button type="submit">로그인 하기</button>
        </div>

        <Link to="/signUp">회원가입 하기</Link>
      </form>
    </Container>
  );
};

export default observer(SignInForm);

const Container = styled.section``;
