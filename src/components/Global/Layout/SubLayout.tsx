import styled, { css } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Global/Navbar';
import Footer from 'components/Global/Footer';
import { useCallback, useState } from 'react';

const SubLayout = () => {
  const [height, setHeight] = useState<number>(0);

  const HeaderHeightCallbackRef = useCallback(node => {
    node && setHeight(node.offsetHeight);
  }, []);

  return (
    <Container mainHeight={height}>
      <header ref={HeaderHeightCallbackRef}>
        <Navbar navType={'sub'} />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
};

const Container = styled.div<{ mainHeight: number }>`
  position: relative;

  header {
    width: 100%;
    position: fixed;
    z-index: 100;
  }

  main {
    ${props =>
      props.mainHeight &&
      css`
        padding-top: ${props.mainHeight}px;
      `}

    min-height: 100vh;
  }
`;

export default SubLayout;
