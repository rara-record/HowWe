import AuthStore from 'stores/AuthStore';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import colors from 'styles/colors';
import TextInput from 'components/UI/TextInput';

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  let navigate = useNavigate();
  const authStore = useContext(AuthStore);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: 'onChange',
  });

  const onSubmit = async (data: IFormValues) => {
    const enteredEmail = data.email;
    const enteredPassword = data.password;
    setIsLoading(true);
    await authStore.signIn(enteredEmail, enteredPassword);
    setIsLoading(false);
    authStore.isLoggedIn && !isLoading && navigate('/');
  };

  return (
    <Container>
      {!authStore.isLoggedIn && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            register={register}
            name={'email'}
            isError={errors.email === undefined ? false : true}
            type={'email'}
            placeholder={'이메일을 입력하세요'}
          />
          <Error>{errors?.email?.message}</Error>

          <TextInput
            type="password"
            register={register}
            name={'password'}
            isError={errors.password === undefined ? false : true}
            placeholder={'비밀번호를 입력하세요'}
          />
          <Error>{errors?.password?.message}</Error>

          <ButtonWrapper>
            <button type="submit" className="login-btn">
              <div>{isLoading ? '로딩중' : '로그인 하기'}</div>
            </button>
            <button className="register-btn">
              <Link to="/user/register">회원가입 하기</Link>
            </button>
          </ButtonWrapper>
        </form>
      )}
    </Container>
  );
};

export default observer(LoginForm);

const Container = styled.section`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 3rem;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 2rem;

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

const Error = styled.p`
  color: #ef4444;
  font-size: 0.8rem;
`;
