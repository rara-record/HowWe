import styled from 'styled-components';

import fonts from 'styles/fonts';
import colors from 'styles/colors';

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  ${fonts.Caption};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    border-radius: 4px;
    padding: 4px 6px;
  }

  span:nth-child(odd) {
    color: ${colors.white};
    background-color: ${colors.primary1};
  }
  span:nth-child(even) {
    color: ${colors.gray1};
    background-color: ${colors.gray5};
  }
`;
