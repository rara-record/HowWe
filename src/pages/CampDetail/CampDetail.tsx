import { Link } from 'react-router-dom';
import { Navbar } from 'components';

const CampDetail = () => {
  return (
    <>
      <Navbar />
      <Link to="/camp/apply">
        <div>신청하기</div>
      </Link>
    </>
  );
};

export default CampDetail;
