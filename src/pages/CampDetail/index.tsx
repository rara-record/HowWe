import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Padding, Skeleton } from 'components';

import styled from 'styled-components';
import CampsStore from 'stores/CampsStore';
import {
  HeaderSection,
  InfoSection,
  ImageSection,
  ReviewSection,
  FaqSection,
} from './components';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);

  useEffect(() => {
    campStore.fetchCampById(String(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    return (
      <Container>
        <HeaderSection targetCamp={campStore.targetCamp} />
        <Padding height="15px" />
        <InfoSection targetCamp={campStore.targetCamp} />
        <ImageSection imgs={campStore.targetCamp.images} />
        <ReviewSection
          reviews={campStore.targetCamp.reviews}
          theme={campStore.targetCamp.theme}
        />
        <FaqSection faqs={campStore.targetCamp.faqs} />
      </Container>
    );
  } else {
    return (
      <div>
        <Skeleton
          style={{ width: '100%', height: 340, borderRadius: '10px' }}
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
