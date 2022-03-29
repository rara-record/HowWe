import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <aside></aside>
    </Container>
  );
};

export default Sidebar;

const Container = styled.section`
  border: 1px solid #888;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  width: 400px;

  aside {
  }
`;
