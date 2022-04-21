import fonts from 'styles/fonts';
import styled from 'styled-components';
import AuthStore from 'stores/AuthStore';
import Button from 'components/UI/Button';
import { useContext, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  let navigate = useNavigate();
  const authStore = useContext(AuthStore);
  const newPasswordInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (newPasswordInputRef.current) {
      const enterdNewPassword = newPasswordInputRef.current.value;
      authStore.newPassword(authStore.token, enterdNewPassword);
      navigate('/');
    }
  };

  return (
    <Container>
      <h1>내 클래스룸</h1>

      <form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="new-password">비밀번호 변경하기</label>
          <input
            type="password"
            id="new-password"
            minLength={7}
            ref={newPasswordInputRef}
          />
        </Control>
        <Action>
          <Button fullWidth size="medium">
            Change Password
          </Button>
        </Action>
      </form>
    </Container>
  );
};

export default ProfileForm;

const Container = styled.section`
  h1 {
    text-align: center;
    ${fonts.H1}
  }

  form {
    width: 95%;
    max-width: 25rem;
    margin: 2rem auto;
  }
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #353336;
    display: block;
  }

  input {
    display: block;
    font: inherit;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #38015c;
    padding: 0.25rem;
    background-color: #f7f0fa;
  }
`;

const Action = styled.div`
  font-weight: normal;
  margin-top: 1.5rem;
`;
