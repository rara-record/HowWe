import AuthStore from 'stores/AuthStore';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);
    await authStore.signIn(enteredEmail, enteredPassword);
    setIsLoading(false);
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

        {isLoading && <p>로딩중...</p>}
        {!isLoading && (
          <div>
            <button type="submit">로그인하기</button>
          </div>
        )}

        <Link to="/signUp">회원가입 하기</Link>
      </form>
    </Container>
  );
};

export default observer(SignInForm);

const Container = styled.section``;
