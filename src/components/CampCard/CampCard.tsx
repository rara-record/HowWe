import { Link } from 'react-router-dom';

const CampCard = () => {
  return (
    <>
      <Link to="/camp/1">
        <div>Camp 1</div>
      </Link>
      <Link to="/camp/2">
        <div>Camp 2</div>
      </Link>
      <Link to="/camp/3">
        <div>Camp 3</div>
      </Link>
    </>
  );
};

export default CampCard;
