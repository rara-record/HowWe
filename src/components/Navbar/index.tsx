import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import { maxWidth } from 'styles/mixin';

interface Props {
  navType: string;
}

const Navbar = ({ navType }: Props) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const changeLogo = !isScrolled && navType === 'main' ? 'white' : 'primary';

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

  return (
    <Container
      className={`${navType}-navbar`}
      isScrolled={isScrolled}
      navType={navType}
    >
      <div className="inner">
        <h1 className="logo">
          <Link className={changeLogo} to="/">
            caffein
          </Link>
        </h1>

        <Link to="community">
          {/* home에서 스크롤을 하지 않을때만 navar 로고 흰색 */}
          {!isScrolled && navType === 'main' ? (
            <img
              className="ic-person"
              src={require('assets/images/icons/ic-person-white.png')}
              alt="프로필"
            />
          ) : (
            // 그 외
            <img
              className="ic-person"
              src={require('assets/images/icons/ic-person-primary.png')}
              alt="프로필"
            />
          )}
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;

// TODO: styled-components에 props를 받는법
const Container = styled.nav<{
  isScrolled: boolean;
  navType: string;
}>`
  /* sub navbar */
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

  .logo {
    font-size: 23px;
    font-weight: 600;

    .white {
      color: white;
    }

    .primary {
      color: ${colors.primary1};
    }
  }

  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .ic-person {
    width: 24px;
    height: 24px;
  }
`;
