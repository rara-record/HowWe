import AuthStore from 'stores/AuthStore';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import styled from 'styled-components';
import colors from 'styles/colors';

interface IFormValues {
  email: string;
  pwd: string;
}

const LoginForm = () => {
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
      <h1 className="login-logo">
        <Link to="/">Caffein</Link>
      </h1>

      <h2 className="login-title">안녕하세요! 👋</h2>
      <p className="login-desc">
        CAFFEIN 에서 당신의 아이디어를 <br />
        현실로 만들 수 있습니다.
      </p>

      {errors.email || errors.pwd ? (
        <span>이메일과 비밀번호 형식을 확인해주세요.</span>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <input type="email" {...register('email')} placeholder="이메일" />
          <input type="password" {...register('pwd')} placeholder="비밀번호" />
        </InputWrapper>

        <ButtonWrapper>
          <button type="submit" className="login-btn">
            로그인하기
          </button>
          <button className="register-btn">
            <Link to="/user/register">회원가입 하기</Link>
          </button>
        </ButtonWrapper>
      </form>
    </Container>
  );
};

export default observer(LoginForm);

const Container = styled.section`
  .login-logo {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${colors.primary1};
    text-transform: uppercase;
  }

  .login-title {
    font-size: 30px;
    font-weight: bold;
    margin: 52px 0 1.2rem;
  }

  .login-desc {
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  input {
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;

    &::placeholder {
      font-size: 0.8rem;
      color: #ccc;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
    border: 1px solid ${colors.primary1};
    background-color: ${colors.primary1};
    border-radius: 0.5rem;
  }

  .register-btn {
    color: ${colors.primary1};
    background-color: transparent;
  }
`;
