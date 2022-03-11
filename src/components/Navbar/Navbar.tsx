import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';

const Navbar = () => {
  return (
    <Container>
      <div className="main">
        <Link to="/">
          <img
            className="logo"
            src={require('assets/images/logo-primary.png')}
            alt="로고"
          />
        </Link>
        <Link to="community">
          <img
            className="ic-person"
            src={require('assets/images/icons/ic-person-primary.png')}
            alt="프로필"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;

  .main {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }

  .logo {
    width: 80px;
    height: 22px;
  }

  .ic-person {
    width: 24px;
    height: 24px;
  }
`;
