import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SubLayout = () => {
  return (
    <Container className="sub">
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.header``;

export default SubLayout;
