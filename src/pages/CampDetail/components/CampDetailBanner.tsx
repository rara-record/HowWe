import styled from 'styled-components';
import { Tags } from 'components';
import fonts from 'styles/fonts';

const CampDetailBanner = () => {
  return (
    <Container>
      <div className="camp-detail-banner-title">
        <Tags tags={['3기모집']} />
        <h1>[2기 모집] React 초보자를 위한 실무 프로젝트로 역량 업그레이드</h1>
        <h2>React만큼은 실무에 제대로 활용하세요.</h2>
      </div>

      <figure className="camp-detail-banner-img">
        <img
          src="https://cdn.comento.kr/images/pt/tmp/prefix_cKAjoFi28f.png"
          alt=""
        />
      </figure>
    </Container>
  );
};

export default CampDetailBanner;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 340px;
  padding-top: 40px;
  z-index: 1;
  position: relative;

  .camp-detail-banner-title {
    flex: 1;
    align-self: flex-end;
    color: white;

    h1 {
      ${fonts.H1};
      font-size: 32px;
      word-break: keep-all;
      margin: 12px 0 16px;
    }

    h2 {
      ${fonts.H4}
      font-weight: normal;
      margin-bottom: 32px;
    }
  }

  .camp-detail-banner-img {
    flex: 1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;
