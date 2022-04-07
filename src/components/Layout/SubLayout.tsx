import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const SubLayout = () => {
  return (
    <Container>
      <header>
        <Navbar navType={'sub'} />
      </header>
      <div className="fake-header"></div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  header {
    width: 100%;
    position: fixed;
    z-index: 100;
  }

  .fake-header {
    height: 72px;
  }
`;

export default SubLayout;
