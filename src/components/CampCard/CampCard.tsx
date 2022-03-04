import { Link } from 'react-router-dom';

const CampCard = () => {
  return (
    <>
      <article className="camp-card">
        <Link to="/camp/1">
          <div>Camp 1</div>
        </Link>
      </article>
      <article className="camp-card">
        <Link to="/camp/2">
          <div>Camp 2</div>
        </Link>
      </article>
      <article className="camp-card">
        <Link to="/camp/3">
          <div>Camp 3</div>
        </Link>
      </article>
      <article className="camp-card">
        <Link to="/camp/4">
          <div>Camp 4</div>
        </Link>
      </article>
    </>
  );
};

export default CampCard;
