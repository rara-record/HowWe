import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CampDetail = () => {
  return (
    <Container>
      <div>상세페이지</div>

      <button>
        <Link to="/camp/apply">더잘하는개발자되기</Link>
      </button>
    </Container>
  );
};

export default CampDetail;

const Container = styled.div``;
