import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AuthStore from 'stores/AuthStore';
import { useContext } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const UserAuthPage = () => {
  const authStore = useContext(AuthStore);
  const onSocialClick = async event => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'facebook') {
      provider = new FacebookAuthProvider();
    }
  };

  return (
    <Container>
      <h1>로그인</h1>
      <UserLoginContainer>
        <Link to="/signin">
          <EmailLoginSection>
            <button>이메일로 로그인하기</button>
          </EmailLoginSection>
        </Link>

        <KakaoLoginSection>
          <button name="google" onClick={onSocialClick}>
            구글로 시작하기
          </button>
        </KakaoLoginSection>

        <GoogleLoginSection>
          <button name="facebook" onClick={onSocialClick}>
            페이스북으로 시작하기
          </button>
        </GoogleLoginSection>
      </UserLoginContainer>
    </Container>
  );
};

export default UserAuthPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserLoginContainer = styled.ul``;

const EmailLoginSection = styled.li``;

const KakaoLoginSection = styled.li``;

const GoogleLoginSection = styled.li``;
