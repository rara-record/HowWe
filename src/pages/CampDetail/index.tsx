import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Sidebar, Skeleton } from 'components';
import { ContentSection } from './components';

import CampsStore from 'stores/CampsStore';
import styled from 'styled-components';
import Tags from 'components/Tags';
import fonts from 'styles/fonts';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);

  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    // TODO: Error: cannot be used as a JSX component. Its return type 'Element | undefined' is not a valid JSX element. Type 'undefined' is not assignable to type 'Element | null'. // 해결방법: if문을 써주고 else문을 써주지 않아서, 반환되는 형식이 'Element | defined' 는 될 수 없다는 오류
    return (
      <Container>
        <BannerBackground />

        {/* 캠프 상세페이지 비주얼 */}
        <div className="inner">
          <VisualSection>
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
          </VisualSection>

          <main>
            {/* 캠프 상세페이지 컨텐츠 */}
            <ContentSection targetCamp={campStore.targetCamp} />
            {/* 사이드바 */}
            <Sidebar targetCamp={campStore.targetCamp} />
          </main>

          <div className="faq">FAQ</div>
        </div>
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

export default observer(CampDetail);

const Container = styled.div`
  position: relative;

  main {
    position: relative;
    margin: 0 auto;
    display: flex;
    gap: 15px;
  }

  .faq {
    width: 100%;
    height: 900px;
    background-color: #eee;
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
  display: flex;
  justify-content: space-between;
  height: 340px;
  z-index: 1;

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
