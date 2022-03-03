import { CommunityCard } from 'components';

const Community = () => {
  return (
    <section className="community">
      <div className="inner">
        <h1 className="title">커뮤니티</h1>
        <div className="contents">
          <CommunityCard />
        </div>
      </div>
    </section>
  );
};

export default Community;
