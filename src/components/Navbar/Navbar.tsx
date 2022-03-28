import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { maxWidth } from 'styles/mixin';

interface Props {
  navType: string;
}

const Navbar = ({ navType }: Props) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

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
      <div className="main">
        <h1 className="logo">
          <Link to="/">
            {isScrolled ? (
              // main header
              <img
                className="logo-img"
                src={
                  navType === 'main'
                    ? require('assets/images/logo-primary.png')
                    : require('assets/images/logo-white.png')
                }
                alt="로고"
              />
            ) : (
              // sub header
              <img
                className="logo-img"
                src={
                  navType === 'sub'
                    ? require('assets/images/logo-primary.png')
                    : require('assets/images/logo-white.png')
                }
                alt="로고"
              />
            )}
          </Link>
        </h1>

        <Link to="community">
          {isScrolled ? (
            // main header
            <img
              className="ic-person"
              src={
                navType === 'main'
                  ? require('assets/images/icons/ic-person-primary.png')
                  : require('assets/images/icons/ic-person-white.png')
              }
              alt="프로필"
            />
          ) : (
            // sub header
            <img
              className="ic-person"
              src={
                navType === 'sub'
                  ? require('assets/images/icons/ic-person-primary.png')
                  : require('assets/images/icons/ic-person-white.png')
              }
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

    .main {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }

  .logo {
    width: 80px;
    height: 32px;
  }

  a {
    display: block;
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
