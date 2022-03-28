import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import CampDetailBanner from './components/CampDetailBanner';
import CampDetailContents from './components/CampDetailContents';
import CampDetailSidebar from './components/CampDetailSidebar';

const CampDetail = () => {
  return (
    <Container className="camp-detail-container">
      <BannerBackground />

      <div className="inner">
        <CampDetailBanner />

        <main>
          <CampDetailContents />
          <CampDetailSidebar />
        </main>
      </div>

      <button>
        <Link to="/camp/apply">더잘하는개발자되기</Link>
      </button>
    </Container>
  );
};

export default CampDetail;

const Container = styled.div`
  position: relative;
  height: 200vh;

  .inner {
    ${maxWidth}
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;

const BannerBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 340px;
  background-color: #0084ad;
`;
