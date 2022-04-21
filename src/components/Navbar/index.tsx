import { Link } from 'react-router-dom';
import { maxWidth } from 'styles/mixin';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { SignInWithSocialMedia } from '../../service/auth';
import { Providers } from '../../service/firebase';

import colors from 'styles/colors';
import styled, { css } from 'styled-components';
import AuthStore from 'stores/AuthStore';

interface Props {
  navType: string;
}

const Navbar = ({ navType }: Props) => {
  const authStore = useContext(AuthStore);
  const isLoggedIn = authStore.isLoggedIn;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  console.log(isLoggedIn);
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

        {!isLoggedIn && <Link to="/auth">가입/로그인</Link>}

        {isLoggedIn && (
          <Link
            to={`/profile`}
            // onClick={() => SignInWithSocialMedia(Providers.google)}
          >
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
        )}

        {isLoggedIn && <button>로그아웃</button>}
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
