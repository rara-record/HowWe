import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <Container>
      <header>
        <Navbar navType={'main'} />
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  header {
    position: fixed;
    width: 100%;
    z-index: 100;
  }
`;

export default MainLayout;
