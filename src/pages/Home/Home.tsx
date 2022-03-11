import { Navbar, Footer } from 'components';
import { HeaderSection, CampSection } from './components';
import { ICamp } from 'types/type';
import styled from 'styled-components';

// TODO: 실서버 데이터로 변경
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

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HeaderSection />
      <main>
        <CampSection title="인기 부트 캠프" camps={campMock} />
        <CampSection title="특가 할인 캠프" camps={campMock} isHeadField />
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
