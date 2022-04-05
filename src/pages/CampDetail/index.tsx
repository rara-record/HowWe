import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Skeleton } from 'components';

import styled from 'styled-components';
import CampsStore from 'stores/CampsStore';
import {
  DetailInfo,
  DetailSidebar,
  DetailVisual,
  DetailReviews,
  DetailFaqs,
} from './components';

const CampDetail = () => {
  const { campId } = useParams();
  const containerRef = useRef<any>(null);
  const campStore = useContext(CampsStore);

  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    return (
      <Container>
        <BannerBackground />
        <DetailVisual targetCamp={campStore.targetCamp} />

        <div className="contents-container">
          <DetailSidebar targetCamp={campStore.targetCamp} />
          <DetailInfo images={campStore.targetCamp.images} />
          <DetailReviews reviews={campStore.targetCamp.reviews} />
        </div>

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
