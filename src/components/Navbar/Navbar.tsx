import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { maxWidth } from 'styles/mixin';

interface Props {
  type: string;
}

const Navbar = ({ type }: Props) => {
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
    <Container className={type} isScrolled={isScrolled} type={type}>
      <div className="main">
        <h1 className="logo">
          <Link to="/">
            <img
              className="logo-img"
              src={
                isScrolled
                  ? require('assets/images/logo-primary.png')
                  : require('assets/images/logo-white.png')
              }
              alt="로고"
            />
          </Link>
        </h1>

        <Link to="community">
          <img
            className="ic-person"
            src={
              isScrolled
                ? require('assets/images/icons/ic-person-primary.png')
                : require('assets/images/icons/ic-person-white.png')
            }
            alt="프로필"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;

// TODO: styled-components에 props를 받는법
const Container = styled.nav<{
  isScrolled: boolean;
  type: string;
}>`
  position: fixed;
  width: 100%;
  z-index: 100;

  ${props =>
    props.type === 'sub'
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
