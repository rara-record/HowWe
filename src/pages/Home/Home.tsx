import { Navbar, Footer } from 'components';
import { HeaderSection, CampSection, CommunitySection } from './components';
import { ICamp, ICommunity } from 'types/type';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
      content: '와우',
      nickname: '멘토1234',
    },
    {
      profile: 'https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg',
      content: '와우',
      nickname: '멘토1234',
    },
  ],
};

const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);
  const [communities, setCommunities] = useState<ICommunity[]>([]);

  useEffect(() => {
    // TODO: 실서버 데이터로 변경
    setPopularCamps([campMock, campMock, campMock]);
    setSaleCamps([campMock, campMock, campMock]);
  }, []);

  return (
    <Container>
      <Navbar />
      <HeaderSection />
      <main>
        <CampSection title="인기 부트 캠프" camps={popularCamps} />
        <CampSection title="특가 할인 캠프" camps={saleCamps} isHeadField />
        <CommunitySection title="커뮤니티" communities={communityMock} />
      </main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  main {
    height: 200vh;
  }
`;

export default Home;
