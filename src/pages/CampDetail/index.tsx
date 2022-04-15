import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Skeleton } from 'components';

import styled from 'styled-components';
import CampsStore from 'stores/CampsStore';
import { ContentsSection, DetailVisual, DetailFaqs } from './components';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);

  useEffect(() => {
    campStore.fetchCampById(String(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    return (
      <Container>
        <DetailVisual targetCamp={campStore.targetCamp} />
        <ContentsSection targetCamp={campStore.targetCamp}></ContentsSection>
        <DetailFaqs faqs={campStore.targetCamp.faqs} />
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
