import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { maxWidth } from 'styles/mixin';

const Navbar = () => {
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
    <Container isScrolled={isScrolled}>
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

const Container = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 100;

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
