import { Link } from 'react-router-dom';
import { Navbar } from 'components';

const CampDetail = () => {
  return (
    <>
      <Navbar />
      <div>상세페이지</div>

      <button>
        <Link to="/camp/apply">더잘하는개발자되기</Link>
      </button>
    </>
  );
};

export default CampDetail;
