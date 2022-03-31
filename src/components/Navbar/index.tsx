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

    /* 
    TODO: error: Can't perform a React state update on an unmounted component.
    윈도우에 이벤트를 등록해놓았기 때문에, 컴포넌트가 언마운트 되어도
    스크롤이 될때마다 changeBackground함수가 실행되어 메모리 누수가 발생할 수 있다
    에러 해결: 컴포넌트가 언마운트 되기 직전에 이벤트를 제거 한다
    */
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
          <Link to="/">
            {/*  home navbar 스크롤을 하지 않을때만 로고 흰색*/}
            {!isScrolled && navType === 'main' ? (
              <img
                className="logo-img"
                src={require('assets/images/logo-white.png')}
                alt="로고"
              />
            ) : (
              // 그 외
              <img
                className="logo-img"
                src={require('assets/images/logo-primary.png')}
                alt="로고"
              />
            )}
          </Link>
        </h1>

        <Link to="community">
          {/* home navbar 스크롤을 하지 않을때만 로고 흰색 */}
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
