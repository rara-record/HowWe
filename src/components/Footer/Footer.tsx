import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';

const Footer = () => {
  return (
    <Container>
      <div>
        대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
      </div>
      <div> Copyright by (주)카페인.</div>
      <div> All right reserved. 이용약관 개인정보처리방침</div>
    </Container>
  );
};

const Container = styled.footer`
  ${maxWidth}
`;

export default Footer;
