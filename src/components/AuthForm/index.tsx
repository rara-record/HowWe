import { useState, useRef } from 'react';
import styled from 'styled-components';

const AuthForm = () => {
  console.log('authfrom');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (emailInputRef.current && passwordInputRef.current) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      if (isLogin) {
      } else {
        fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBRnJ3uv0KX0sxVGEDvpRrw6kMvfG6nfo',
          {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then(res => {
          if (res.ok) {
            //...
          } else {
            return res.json().then(data => {
              // TODO: show an error modal
              console.log(data);
            });
          }
        });
      }
    }
  };

  return (
    <Container>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <Control>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </Control>
        <Control>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </Control>
        <Actions>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </Actions>
      </form>
    </Container>
  );
};

export default AuthForm;

const Container = styled.section`
  margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;

  h1 {
    text-align: center;
    color: white;
  }
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    background-color: #f1e1fc;
    color: #38015c;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
`;

const Actions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
    font: inherit;
    color: white;
    background-color: #9f5ccc;
    border: 1px solid #9f5ccc;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;

    &:hover {
      background-color: #873abb;
      border-color: #873abb;
    }
  }

  .toggle {
    margin-top: 1rem;
    background-color: transparent;
    color: #9f5ccc;
    border: none;
    padding: 0.15rem 1.5rem;

    &:hover {
      background-color: transparent;
      color: #ae82cc;
    }
  }
`;
