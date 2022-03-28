import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainLayout = () => {
  return (
    <Container className="main">
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.header``;

export default MainLayout;
