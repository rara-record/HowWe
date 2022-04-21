import AuthForm from './components/AuthForm';
import styled from 'styled-components';

const AuthPage = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <EmailLoginSection />
      <KakaoLoginSection />
      <GoogleLoginSection />
      <AuthForm />
    </Container>
  );
};

export default AuthPage;

const Container = styled.div``;

const EmailLoginSection = styled.div``;

const KakaoLoginSection = styled.div``;

const GoogleLoginSection = styled.div``;
