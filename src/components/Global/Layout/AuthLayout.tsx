import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Container>
      <div className="row">
        <WrapperScreen>{children}</WrapperScreen>
      </div>
    </Container>
  );
};

export default AuthLayout;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(250, 250, 250, 0.9);

  .row {
    height: 100%;
    background-color: #fff;
    border-radius: 0.5rem;
  }
`;

const WrapperScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 572px;
  padding: 0 4rem;
  margin: 4rem 0;
`;
