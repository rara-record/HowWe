import { Navbar, Footer, Padding } from 'components';
import {
  HeaderSection,
  CampSection,
  HomeBanner,
  CommunitySection,
} from './components';
import { ICamp, ICommunity } from 'types/type';
import { useEffect, useState } from 'react';
import { maxWidth } from 'styles/mixin';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const campMock: ICamp = {
  id: 0,
  name: '업무 단순화 & 자동화로 엑셀을 실무에 더 적극 활용하기',
  type: '인기',
  status: '모집중',
  field: '데이터분석',
  skill: 'Excel',
  startDate: '2021-03-13',
  thumbnail: 'https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg',
};

const communityMock: ICommunity = {
  id: 0,
  tags: ['조회수TOP', '취업고민'],
  title: ' 합격 메일 답장 어떻게 할까요?',
  content: '고칠 부분이 있는지 봐주시면 감사하겠습니다!',
  comments: [
    {
      profile: 'https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg',
      content: '안녕하세요. 먼저 면접까지...',
      nickname: '멘토1234',
    },
    {
      profile: 'https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg',
      content: '안녕하세요. 먼저 면접까지...',
      nickname: '멘토1234',
    },
  ],
};

const Home = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const [popularCamps, setPopularCamps] = useState<ICamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);
  const [communities, setCommunities] = useState<ICommunity[]>([]);

  useEffect(() => {
    // TODO: 실서버 데이터로 변경
    setPopularCamps([campMock, campMock, campMock, campMock]);
    setSaleCamps([campMock, campMock, campMock, campMock]);
    setCommunities([
      communityMock,
      communityMock,
      communityMock,
      communityMock,
    ]);
  }, []);

  return (
    <Container>
      <Navbar type={'home'} />
      <HeaderSection />
      <main>
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
      <Footer />
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
