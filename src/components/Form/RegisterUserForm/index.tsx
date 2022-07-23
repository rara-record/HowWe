import AuthStore from 'stores/AuthStore';
import * as yup from 'yup';

import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import styled from 'styled-components';
import colors from 'styles/colors';

import Checkbox from 'components/UI/Checkbox';
import { CheckList } from 'properties/CheckList';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  pwd: yup.string().min(8).max(15).required(),
  checkPwd: yup
    .string()
    .oneOf([yup.ref('pwd'), null])
    .required(),
});

type IFormValues = yup.InferType<typeof schema>;

const RegisterUserForm = () => {
  let navigate = useNavigate();
  const resolver = yupResolver(schema);
  const authStore = useContext(AuthStore);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList(CheckList);
  }, [list]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver,
  });

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li: { id: string }) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const onSubmit = async (data: IFormValues) => {
    const enterdName = data.name;
    const enteredEmail = data.email;
    const enteredPassword = data.pwd;
    setIsLoading(true);
    await authStore.signUp(enterdName, enteredEmail, enteredPassword);
    setIsLoading(false);
    !authStore.isLoggedIn && navigate('/user/login');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <div>
            <label htmlFor="name">이름</label>
            <input type="text" {...register('name')} />
            {errors?.name && (
              <span className="error-text">이름을 입력해주세요.</span>
            )}
          </div>

          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              {...register('email')}
              placeholder="caffein@abcd.com"
            />
            {errors.email && (
              <span className="error-text">이메일을 다시 확인해주세요.</span>
            )}
          </div>

          <div>
            <label htmlFor="pwd">비밀번호</label>
            <input
              type="password"
              {...register('pwd')}
              placeholder="비밀번호를 입력해주세요"
            />
            {errors.pwd && (
              <span className="error-text">
                비밀번호는 문자 숫자 8자 이상으로 입력해주세요.
              </span>
            )}
          </div>

          <div>
            <label htmlFor="checkPwd">비밀번호 확인</label>
            <input
              type="password"
              {...register('checkPwd')}
              placeholder="비밀번호를 다시 한 번 입력해주세요"
            />
            {errors.checkPwd && (
              <span className="error-text">비밀번호가 다릅니다.</span>
            )}
          </div>
        </InputWrapper>

        <div className="all-check">
          <Checkbox
            type="checkbox"
            name="selectAll"
            id="selectAll"
            handleClick={handleSelectAll}
            isChecked={isCheckAll}
          />
          <span>전체동의</span>
        </div>

        <CheckBoxList>
          {list.map(({ id, name }) => (
            <li key={id}>
              <Checkbox
                type="checkbox"
                name={name}
                id={id}
                handleClick={handleClick}
                isChecked={isCheck.includes(id)}
              />
              <span>{name}</span>
            </li>
          ))}
        </CheckBoxList>

        <ButtonWrapper>
          {isLoading ? (
            <button type="submit" className="register-btn">
              로딩중..
            </button>
          ) : (
            <button type="submit" className="register-btn">
              확인
            </button>
          )}
        </ButtonWrapper>
      </form>
    </Container>
  );
};

export default observer(RegisterUserForm);

const Container = styled.section`
  input {
    &::placeholder {
      font-size: 0.8rem;
      color: #ccc;
    }
  }

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    margin: 0.4rem 0;
    border-radius: 0.25rem;
    border-width: 2px;
    border-color: #000;
  }

  form {
    span {
      margin: 0 0.4rem;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .all-check {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;

    span {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

const InputWrapper = styled.div`
  padding: 1.5rem 0;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.3rem 0 1rem;
  }

  label {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
  }

  .error-text {
    color: #ef4444;
    font-size: 0.8rem;
    margin: 0.8rem 0 1rem;
  }
`;

const CheckBoxList = styled.ul`
  margin: 2rem 0;
  padding-bottom: 1rem;

  li {
    display: flex;
    align-items: center;
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
`;
