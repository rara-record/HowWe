import { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from 'components/UI/Button';
import colors from 'styles/colors';
import fonts from 'styles/fonts';

const AuthForm = () => {
  console.log('authfrom');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (emailInputRef.current && passwordInputRef.current) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      setIsLoading(true);

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
          setIsLoading(false);
          if (res.ok) {
            //...
          } else {
            return res.json().then(data => {
              if (data && data.error && data.error.message) {
                let errorMessage = data.error.message;
                alert(errorMessage);
              }
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
          <label htmlFor="email">email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </Control>
        <Control>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </Control>
        <Actions>
          {!isLoading && (
            <Button color="blue" size="large" fullWidth>
              {isLogin ? 'Login' : 'Create Account'}
            </Button>
          )}
          {isLoading && <p className="loading">Loading...</p>}
          <button className="toggle" onClick={switchAuthModeHandler}>
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
  background-color: ${colors.primary3};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  color: ${colors.white};

  h1 {
    ${fonts.H1};
    text-align: center;
    color: white;
  }
`;

const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    ${fonts.Body1};
    margin-top: 10px;
    display: block;
    color: white;
    margin-bottom: 0.5rem;
  }

  input {
    ${fonts.Body1};
    color: ${colors.primary3};
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
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
  }

  .toggle {
    margin-top: 1rem;
    background-color: transparent;
    color: ${colors.black};
    border: none;
    padding: 0.15rem 1.5rem;

    &:hover {
      background-color: transparent;
      color: ${colors.white};
    }
  }
`;
