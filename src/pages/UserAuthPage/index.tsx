import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserAuthPage = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <UserLoginContainer>
        <Link to="/signin">
          <EmailLoginSection>이메일로 로그인하기</EmailLoginSection>
        </Link>
        <KakaoLoginSection>카카오로 로그인하기</KakaoLoginSection>
        <GoogleLoginSection>구글로 로그인하기</GoogleLoginSection>
      </UserLoginContainer>
    </Container>
  );
};

export default UserAuthPage;

const Container = styled.section``;

const UserLoginContainer = styled.ul``;

const EmailLoginSection = styled.li``;

const KakaoLoginSection = styled.li``;

const GoogleLoginSection = styled.li``;
