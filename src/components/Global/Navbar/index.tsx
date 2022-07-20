import { Link } from 'react-router-dom';
import { maxWidth } from 'styles/mixin';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import colors from 'styles/colors';
import AuthStore from 'stores/AuthStore';
import styled, { css } from 'styled-components';

interface Props {
  navType: string;
}

const Navbar = ({ navType }: Props) => {
  const navigate = useNavigate();
  const authStore = useContext(AuthStore);
  const isLoggedIn = authStore.isLoggedIn;

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const logoutHandler = () => {
    authStore.signOut();
    if (!authStore.isLoggedIn) {
      navigate('/');
    }
  };

  const changeLogo = !isScrolled && navType === 'main' ? 'white' : 'primary';

  return (
    <Container
      className={`${navType}-navbar`}
      isScrolled={isScrolled}
      navType={navType}
    >
      <div className="inner">
        <Logo>
          <Link className={changeLogo} to="/">
            caffein
          </Link>
        </Logo>

        {!isLoggedIn && (
          <GuestContainer>
            <Link to="/user/login">가입/로그인</Link>
          </GuestContainer>
        )}

        {isLoggedIn && (
          <UserContainer>
            <UserLoginIcon>
              <Link to={`/profile`}>
                {/* home에서 스크롤을 하지 않을때만 navar 로고 흰색 */}
                {!isScrolled && navType === 'main' ? (
                  <Profile>
                    <img
                      className="ic-person"
                      src={require('assets/images/icons/ic-person-white.png')}
                      alt="프로필"
                    />
                  </Profile>
                ) : (
                  // 그 외
                  <Profile>
                    <img
                      className="ic-person"
                      src={require('assets/images/icons/ic-person-primary.png')}
                      alt="프로필"
                    />
                  </Profile>
                )}
              </Link>
            </UserLoginIcon>

            <UserLogOut>
              <Link to="/">
                <button onClick={logoutHandler}>로그아웃</button>
              </Link>
            </UserLogOut>
          </UserContainer>
        )}
      </div>
    </Container>
  );
};

export default observer(Navbar);

const Container = styled.nav<{
  isScrolled: boolean;
  navType: string;
}>`
  ${props =>
    props.navType === 'sub'
      ? css`
          background-color: white;
        `
      : css`
          background-color: transparent;
        `}

  ${props =>
    props.isScrolled &&
    css`
      background-color: white;
      transition: 0.5s;
    `}

    .inner {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }
`;

const Logo = styled.h1`
  font-size: 23px;
  font-weight: 600;

  .white {
    color: white;
  }

  .primary {
    color: ${colors.primary1};
  }
`;

const Profile = styled.button`
  .ic-person {
    width: 24px;
    height: 24px;
  }
`;

const GuestContainer = styled.div``;

const UserContainer = styled.ul``;

const UserLoginIcon = styled.li``;

const UserLogOut = styled.li``;
