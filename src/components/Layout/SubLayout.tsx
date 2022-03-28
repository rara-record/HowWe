import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';

const SubLayout = () => {
  return (
    <Container>
      <header>
        <Navbar navType={'sub'} />
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200vh;

  header {
    position: fixed;
    width: 100%;
    z-index: 100;
  }
`;

export default SubLayout;
