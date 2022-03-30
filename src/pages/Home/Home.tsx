import { Padding } from 'components';
import {
  VisualSection,
  CampSection,
  HomeBanner,
  CommunitySection,
} from './components';
import { ICommunity } from 'types/Community';
import { useContext, useEffect, useState } from 'react';
import { maxWidth } from 'styles/mixin';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { getCommunties } from 'apis/community';
import { observer } from 'mobx-react-lite';
import CampStroe from 'stores/CampStroe';

const Home = () => {
  const [communities, setCommunities] = useState<ICommunity[]>();

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const campStore = useContext(CampStroe);

  useEffect(() => {
    campStore.fetchCampsPopular();
    campStore.fetchCampsSale();
    fetchCommunities();
  }, [campStore]);

  const fetchCommunities = async () => {
    const communities = await getCommunties();
    setCommunities(communities);
  };

  return (
    <Container>
      <VisualSection />
      <main className="contents">
        {campStore.campPopular && (
          <CampSection title="인기 부트 캠프" camps={campStore.campPopular} />
        )}

        <Padding height="40px" />

        {campStore.campSales && (
          <CampSection
            title="특가 할인 캠프"
            camps={campStore.campSales}
            isHeadField
          />
        )}

        <Padding height="40px" />

        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        {isDesktop && <Padding height="55px" />}

        {communities && (
          <CommunitySection title="커뮤니티" communities={communities} />
        )}

        {isDesktop && <Padding height="240px" />}
      </main>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;

  main {
    ${maxWidth}
  }
`;

export default observer(Home);
