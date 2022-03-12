import styled from 'styled-components';

import { maxWidth } from 'styles/mixin';
import colors from 'styles/colors';
import fonts from 'styles/fonts';

const Footer = () => {
  return (
    <Container>
      <footer>
        <div>
          <img
            className="logo"
            src={require('assets/images/logo-primary.png')}
            alt="로고"
          />
        </div>
        <div className="content">
          <div>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          </div>
          <br />
          <div> Copyright by (주)카페인.</div>
          <div> All right reserved. 이용약관 개인정보처리방침</div>
        </div>
        <div className="sns">
          <div className="sns-item"></div>
          <div className="sns-item"></div>
          <div className="sns-item"></div>
        </div>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 32px;
  background-color: ${colors.gray6};
  footer {
    ${maxWidth};
    display: flex;
    .logo {
      width: 60px;
      padding-right: 115px;
    }
    .content {
      flex: 1; // 남은 공간만큼 꽉 채우기
      ${fonts.Caption}
      color: ${colors.gray2};
    }
    .sns {
      display: flex;
      gap: 6px;
      padding-left: 10px;
      div {
        width: 32px;
        height: 32px;
        background-color: ${colors.gray4};
        border-radius: 16px;
      }
    }
  }
`;

export default Footer;
