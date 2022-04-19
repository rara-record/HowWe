import { Padding } from 'components';
import { maxWidth } from 'styles/mixin';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  imgs: string[];
}

const ImageSection = ({ imgs }: IProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container isMobile={isMobile}>
      {imgs.map((img, index) => (
        <article key={index}>
          <img src={img} alt="camp-detail-img" />
          <Padding height={'60px'} />
        </article>
      ))}
    </Container>
  );
};

export default ImageSection;

const Container = styled.section<{ isMobile: boolean }>`
  ${maxWidth}
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;

  article {
    ${props =>
      !props.isMobile &&
      css`
        flex: 0 0 66.6666%;
      `}
  }
`;
