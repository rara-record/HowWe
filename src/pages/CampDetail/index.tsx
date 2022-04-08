import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useMediaQuery } from 'react-responsive';
import { Skeleton } from 'components';

import styled from 'styled-components';
import CampsStore from 'stores/CampsStore';
import { ContentsSection, DetailVisual, DetailFaqs } from './components';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    return (
      <Container>
        {!isMobile && <BannerBackground />}
        <DetailVisual targetCamp={campStore.targetCamp} />
        <ContentsSection targetCamp={campStore.targetCamp}></ContentsSection>
        <DetailFaqs faqs={campStore.targetCamp.faqs} />
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
`;

const BannerBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 340px;
  background-color: #0084ad;
`;
