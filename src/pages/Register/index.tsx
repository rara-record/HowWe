import styled from 'styled-components';
import colors from 'styles/colors';

import { AuthLayout } from 'components';
import { Link } from 'react-router-dom';

import RegisterUserForm from 'components/Form/RegisterUserForm';

const Register = () => {
  return (
    <AuthLayout>
      <Container>
        <h1 className="register-logo">
          <Link to="/">Caffein</Link>
        </h1>
        <h2 className="register-title">회원가입</h2>
      </Container>
      <RegisterUserForm />
    </AuthLayout>
  );
};

export default Register;

const Container = styled.div`
  .register-logo {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${colors.primary1};
    text-transform: uppercase;
  }

  .register-title {
    font-size: 20px;
    font-weight: bold;
    margin: 52px 0 1.2rem;
  }
`;
