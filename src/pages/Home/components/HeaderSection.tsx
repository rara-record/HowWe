import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';

const HeaderSection = () => {
  return (
    <Container bgImg={require('assets/images/home_header_bg.jpg')}>
      <div className="header-content">
        <div className="header-text">{`개발은 \n카페인과 함께`}</div>
        <div
          className="header-img"
          style={{
            backgroundImage: `url(${'https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg'})`,
          }}
        ></div>
      </div>
    </Container>
  );
};

export default HeaderSection;

const Container = styled.div<{ bgImg: string }>`
  background-image: url(${props => props.bgImg});
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;

  .header-content {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .header-text {
    flex: 1;
    white-space: pre-line; //
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }

  .header-img {
    flex: 2;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    height: 400px;
  }
`;
