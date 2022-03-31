import styled from 'styled-components';
import colors from 'styles/colors';
import fonts from 'styles/fonts';

const HomeBanner = ({ text }: { text: string }) => {
  return <Container>{text}</Container>;
};

export default HomeBanner;

const Container = styled.section`
  padding: 36px 42px;
  background-color: ${colors.primary1};
  color: ${colors.white};
  ${fonts.H1};
`;
