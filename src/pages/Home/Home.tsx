import { Padding } from 'components';
import {
  VisualSection,
  CampSection,
  HomeBanner,
  CommunitySection,
} from './components';
import { CampType, ICamp } from 'types/Camp';
import { ICommunity } from 'types/Community';
import { useEffect, useState } from 'react';
import { maxWidth } from 'styles/mixin';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { getCampsByType } from 'apis/camp';
import { getCommunties } from 'apis/community';

const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>(); // 넵
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();
  const [communities, setCommunities] = useState<ICommunity[]>();
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    fetchCamps('popular');
    fetchCamps('sale');
    fetchCommunities();
  }, []);

  const fetchCamps = async (type: CampType) => {
    const camps = await getCampsByType(type);
    console.log(camps);
    type === 'popular' ? setPopularCamps(camps) : setSaleCamps(camps);
  };

  const fetchCommunities = async () => {
    const communities = await getCommunties();
    setCommunities(communities);
  };

  return (
    <Container>
      <VisualSection />
      <main className="contents">
        {popularCamps && (
          <CampSection title="인기 부트 캠프" camps={popularCamps} />
        )}

        <Padding height="40px" />

        {saleCamps && (
          <CampSection title="특가 할인 캠프" camps={saleCamps} isHeadField />
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

export default Home;
