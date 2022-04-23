import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserAuthPage = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <ul>
        <li>
          <Link to="/signin">이메일로 로그인하기</Link>
        </li>
        <li>
          <KakaoLoginSection />
        </li>
        <li>
          <GoogleLoginSection />
        </li>
      </ul>
    </Container>
  );
};

export default UserAuthPage;

const Container = styled.div``;

const KakaoLoginSection = styled.div``;

const GoogleLoginSection = styled.div``;
