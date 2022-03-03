import { CampCard } from 'components';

const Camp = () => {
  return (
    <section className="camp">
      <div className="inner">
        <div className="popular-camp">
          <h2 className="title">인기 부트 캠프</h2>
          <CampCard />
        </div>
        <div className="sale-camp">
          <h2 className="title">특가 할인 캠프</h2>
          <CampCard />
        </div>
      </div>
    </section>
  );
};

export default Camp;
