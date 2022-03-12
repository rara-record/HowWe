import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { maxWidth } from 'styles/mixin';

const HeaderSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 680px)' });

  return (
    <Container
      bgImg={require('assets/images/home_header_bg.jpg')}
      isMobile={isMobile}
    >
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

const Container = styled.div<{ bgImg: string; isMobile: boolean }>`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;

  .header-content {
    ${maxWidth}

    ${props =>
      !props.isMobile &&
      css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      `}
  }

  .header-text {
    flex: 1;
    white-space: pre-line; //
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    ${props =>
      props.isMobile &&
      css`
        padding-bottom: 30px;
      `}
  }

  .header-img {
    flex: 2;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    height: 400px;

    ${props =>
      props.isMobile &&
      css`
        height: 300px;
      `}
  }
`;
