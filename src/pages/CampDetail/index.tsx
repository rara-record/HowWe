import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { maxWidth } from 'styles/mixin';
import CampsStore from 'stores/CampsStore';
import styled from 'styled-components';
import Tags from 'components/Tags';
import fonts from 'styles/fonts';
import { Sidebar, Skeleton } from 'components';
import { ContentSection } from './components';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);

  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    // TODO: Error: cannot be used as a JSX component. Its return type 'Element | undefined' is not a valid JSX element. Type 'undefined' is not assignable to type 'Element | null'. // 해결방법: if문을 써주고 else문을 써주지 않아서, 반환되는 형식이 'Element | defined' 는 될 수 없다는 오류
    return (
      <Container className="camp-detail-container">
        <BannerBackground />

        {/* 캠프 상세페이지 비주얼 */}
        <VisualSection>
          <div className="inner">
            <div className="camp-detail-visual-title">
              <Tags tags={['2기모집']} />
              <h1>{campStore.targetCamp.name}</h1>
              <h2>{campStore.targetCamp.desc}</h2>
            </div>

            <figure className="camp-detail-visual-img">
              <img
                src={campStore.targetCamp.headerImage}
                alt="camp-detail-visual-img"
              />
            </figure>
          </div>
        </VisualSection>

        <main>
          {/* 컨텐츠 */}
          <ContentSection targetCamp={campStore.targetCamp} />

          {/* 사이드바 */}
          <Sidebar targetCamp={campStore.targetCamp} />
          {/* 사이드바 */}
        </main>
      </Container>
    );
  } else {
    return (
      <div>
        <Skeleton
          style={{ width: '100%', height: 280, borderRadius: '10px' }}
          animated
        />
      </div>
    );
  }
};

export default CampDetail;

const Container = styled.div`
  position: relative;

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
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

const VisualSection = styled.div`
  position: relative;
  z-index: 1;

  .inner {
    display: flex;
    justify-content: space-between;
    height: 340px;
    padding: 40px 16px 0;
  }

  .camp-detail-visual-title {
    flex: 1;
    align-self: flex-end;

    h1 {
      ${fonts.H1};
      font-size: 32px;
      word-break: keep-all;
      margin: 12px 0 16px;
      color: white;
    }

    h2 {
      ${fonts.H4}
      font-weight: normal;
      margin-bottom: 32px;
      color: #f3f4f5;
    }
  }

  .camp-detail-visual-img {
    flex: 1;
    overflow: hidden;

    img {
      width: 100%;
      margin-top: 40px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;
