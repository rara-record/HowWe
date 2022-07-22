import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Global/Navbar';
import Footer from 'components/Global/Footer';

const MainLayout = () => {
  return (
    <Container>
      <header>
        <Navbar navType={'main'} />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  > header {
    width: 100%;
    position: fixed;
    z-index: 100;
  }
`;

export default MainLayout;
