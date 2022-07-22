import LoginForm from 'components/Form/LoginForm';
import colors from 'styles/colors';
import styled from 'styled-components';

import { AuthLayout } from 'components';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthLayout>
      <LoginHeader>
        <h1 className="login-logo">
          <Link to="/">Caffein</Link>
        </h1>

        <h2 className="login-title">안녕하세요! 👋</h2>
        <p className="login-desc">
          CAFFEIN 에서 당신의 아이디어를 <br />
          현실로 만들 수 있습니다.
        </p>
      </LoginHeader>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

const LoginHeader = styled.div`
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
