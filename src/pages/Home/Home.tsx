import { Header, Footer, CampCard } from 'components';
import { ICamp } from 'types/type';

// TODO: 실서버 데이터로 변경
const camp: ICamp = {
  id: 0,
  name: '업무 단순화 & 자동화로 엑셀을 실무에 더 적극 활용하기',
  type: '인기',
  status: '모집중',
  field: '데이터분석',
  skill: 'Excel',
  startDate: '2021-03-13',
  thumbnail: 'https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg',
};

// TODO: props 전달하면서, campCard에 props정의를 해주지 않았더니 IntrinsicAttributes 에러가 났다.
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>인기 부트 캠프</div>
          <div>
            <CampCard camp={camp} />
          </div>
        </section>

        <section>
          <div>특가 할인 캠프</div>
          <div>
            <CampCard camp={camp} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
