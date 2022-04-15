import styled from 'styled-components';
import colors from 'styles/colors';
import fonts from 'styles/fonts';

const HomeBanner = ({ text }: { text: string }) => {
  return (
    <Container>
      <div className="inner">{text}</div>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.section`
  padding: 0 16px;

  .inner {
    padding: 36px 42px;
    ${fonts.H1};
    color: ${colors.white};
    background-color: ${colors.primary1};
  }
`;
