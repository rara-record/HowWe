import { Link } from 'react-router-dom';

const CommunityCard = () => {
  return (
    <>
      <article className="community-card">
        <Link to="/community/1">
          <div>community 1</div>
        </Link>
      </article>
      <article className="community-card">
        <Link to="/community/2">
          <div>community 2</div>
        </Link>
      </article>
      <article className="community-card">
        <Link to="/community/3">
          <div>community 3</div>
        </Link>
      </article>
      <article className="community-card">
        <Link to="/community/4">
          <div>community 4</div>
        </Link>
      </article>
    </>
  );
};

export default CommunityCard;
