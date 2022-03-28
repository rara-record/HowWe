import { Padding } from 'components';
import {
  HeaderSection,
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
  const [popularCamps, setPopularCamps] = useState<ICamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);
  const [communities, setCommunities] = useState<ICommunity[]>([]);
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    fetchCamps('popular');
    fetchCamps('sale');
    fetchCommunities();
  }, []);

  // TODO: 비동기 함수는 바로 useEffect에서 직접적으로 state에 담는 것은 권장되는 사항이 아니기 때문에, 비동기를 처리하는 함수를 만들어서 한번 더 감싸준 후 처리해주는 것이 좋다.
  const fetchCamps = async (type: CampType) => {
    const camps = await getCampsByType(type);
    type === 'popular' ? setPopularCamps(camps) : setSaleCamps(camps);
  };

  const fetchCommunities = async () => {
    const communities = await getCommunties();
    setCommunities(communities);
  };

  return (
    <Container>
      <HeaderSection />
      <main className="contents">
        <CampSection title="인기 부트 캠프" camps={popularCamps} />
        <Padding height="40px" />

        <CampSection title="특가 할인 캠프" camps={saleCamps} isHeadField />
        <Padding height="40px" />

        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        {isDesktop && <Padding height="55px" />}

        <CommunitySection title="커뮤니티" communities={communities} />
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
