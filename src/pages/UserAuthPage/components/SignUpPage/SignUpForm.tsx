import * as yup from 'yup';
import styled from 'styled-components';
import AuthStore from 'stores/AuthStore';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  pwd: yup.string().min(7).max(12).required(),
  checkPwd: yup
    .string()
    .oneOf([yup.ref('pwd'), null])
    .required(),
});

type IFormValues = yup.InferType<typeof schema>;

const SignUpForm = () => {
  let navigate = useNavigate();
  const resolver = yupResolver(schema);
  const authStore = useContext(AuthStore);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver,
  });

  const onSubmit = async (data: IFormValues) => {
    const enterdName = data.name;
    const enteredEmail = data.email;
    const enteredPassword = data.pwd;
    setIsLoading(true);
    await authStore.signUp(enterdName, enteredEmail, enteredPassword);
    setIsLoading(false);
    !authStore.isLoggedIn && navigate('/signIn');
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">이름</label>
        <input type="text" {...register('name')} />
        {errors?.name && <span>이름을 입력해주세요.</span>}

        <label htmlFor="email">이메일</label>
        <input type="email" {...register('email')} />
        {errors?.email && <span> 이메일 형식에 맞지 않습니다.</span>}

        <label htmlFor="pwd">비밀번호</label>
        <input type="password" {...register('pwd')} />
        {errors?.pwd && <span> 비밀번호 형식이 맞지 않습니다.</span>}

        <label htmlFor="checkPwd">비밀번호 확인</label>
        <input type="password" {...register('checkPwd')} />
        {errors?.checkPwd && <span>비밀번호가 맞지 않습니다.</span>}

        {isLoading && <p>로딩중...</p>}
        {!isLoading && (
          <div>
            <button type="submit">회원가입</button>
          </div>
        )}
      </form>
    </Container>
  );
};

export default observer(SignUpForm);

const Container = styled.section``;
