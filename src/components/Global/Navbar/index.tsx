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
          <GuestContainer isScrolled={isScrolled} navType={navType}>
            <button className="header-login-btn">
              <Link to="/user/login">로그인</Link>
            </button>
            <button className="header-register-btn">
              <Link to="/user/register">회원가입</Link>
            </button>
          </GuestContainer>
        )}

        {isLoggedIn && (
          <UserContainer>
            <Link to="/profile">
              <UserLoginIcon>
                {/* home에서 스크롤을 하지 않을때만 navar 로고 흰색 */}
                {!isScrolled && navType === 'main' ? (
                  <Profile>
                    <img
                      className="ic-person"
                      src={require('assets/images/icons/ic-person-white.png')}
                      alt="회원 아이콘"
                    />
                  </Profile>
                ) : (
                  // 그 외
                  <Profile>
                    <img
                      className="ic-person"
                      src={require('assets/images/icons/ic-person-primary.png')}
                      alt="회원 아이콘"
                    />
                  </Profile>
                )}
              </UserLoginIcon>
            </Link>

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
          background-color: #fff;
        `
      : css`
          background-color: transparent;
        `}

  ${props =>
    props.isScrolled &&
    css`
      background-color: #fff;
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

const GuestContainer = styled.div<{
  isScrolled: boolean;
  navType: string;
}>`
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;

    ${props =>
      props.navType === 'sub'
        ? css`
            color: ${colors.primary1};
          `
        : css`
            color: #fff;
          `}

    ${props =>
      props.isScrolled &&
      css`
        color: ${colors.primary1};
        transition: 0.5s;
      `}
  }

  .header-login-btn {
    position: relative;

    &::after {
      ${props =>
        props.navType === 'sub'
          ? css`
              background-color: ${colors.primary1};
            `
          : css`
              background-color: #fff;
            `}

      ${props =>
        props.isScrolled &&
        css`
          background-color: ${colors.primary1};
          transition: 0.5s;
        `}

      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 16px;
    }
  }
`;

const UserContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const UserLoginIcon = styled.li``;

const UserLogOut = styled.li``;