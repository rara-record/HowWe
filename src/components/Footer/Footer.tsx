import styled, { css } from 'styled-components';

import { maxWidth } from 'styles/mixin';
import colors from 'styles/colors';
import fonts from 'styles/fonts';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Container isMobile={isMobile}>
      <footer>
        <div className="footer-logo">
          <img
            className="logo-img"
            src={require('assets/images/logo-primary.png')}
            alt="로고"
          />
        </div>
        <div className="footer-info">
          <div className="content">
            <p>
              대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
            </p>
            <br />
            <p> Copyright by (주)카페인.</p>
            <p> All right reserved. 이용약관 개인정보처리방침</p>
          </div>
          <ul className="sns">
            <li className="sns-item"></li>
            <li className="sns-item"></li>
            <li className="sns-item"></li>
          </ul>
        </div>
      </footer>
    </Container>
  );
};

const Container = styled.div<{ isMobile: boolean }>`
  padding: 32px;
  background-color: ${colors.gray6};

  footer {
    ${maxWidth};
    display: flex;

    .logo-img {
      width: 60px;
      padding-right: 115px;
    }

    .footer-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      ${props =>
        props.isMobile &&
        css`
          display: block;
        `}
    }

    .content {
      flex: 1; // 남은 공간만큼 꽉 채우기
      ${fonts.Caption}
      color: ${colors.gray2};

      ${props =>
        props.isMobile &&
        css`
          padding-bottom: 15px;
        `}
    }

    .sns {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      padding-left: 10px;

      li {
        width: 32px;
        height: 32px;
        background-color: ${colors.gray4};
        border-radius: 16px;
      }

      ${props =>
        props.isMobile &&
        css`
          padding-left: 0;
        `}
    }
  }
`;

export default Footer;
