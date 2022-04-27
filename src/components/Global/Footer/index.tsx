import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { maxWidth } from 'styles/mixin';
import colors from 'styles/colors';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Container isMobile={isMobile}>
      <footer>
        <div className="footer-logo">
          <Link to="/">caffein</Link>
        </div>
        <div className="footer-info">
          <div className="content">
            <p>대표: 김보라</p>
            <br />
            <p> Copyright by (주)카페인 &copy; {new Date().getFullYear()}</p>
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
  padding: 32px 16px;
  background-color: ${colors.gray6};

  footer {
    ${maxWidth};
    display: flex;
    flex-wrap: wrap;

    .footer-logo {
      flex: 1;
      font-size: 23px;
      font-weight: 600;
      color: ${colors.primary1};
    }

    .footer-info {
      flex: 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      ${props =>
        props.isMobile &&
        css`
          display: block;
        `}
    }

    .content {
      flex: 1;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.01em;
      font-weight: normal;
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
