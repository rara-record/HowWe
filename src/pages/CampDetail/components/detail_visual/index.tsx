import styled, { css } from 'styled-components';
import { ICampDetail } from 'types/CampDetail';
import { useMediaQuery } from 'react-responsive';

import Tags from 'components/Tags';
import fonts from 'styles/fonts';

interface IProps {
  targetCamp: ICampDetail;
}

const DetailVisual = ({ targetCamp }: IProps) => {
  const { name, desc, headerImage } = targetCamp;
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container isMobile={isMobile}>
      <div className="inner">
        <div className="camp-detail-visual-title">
          <Tags tags={['2기모집']} />
          <h1>{name}</h1>
          <h2>{desc}</h2>
        </div>

        <figure className="camp-detail-visual-img">
          <img src={headerImage} alt="camp-detail-visual-img" />
        </figure>
      </div>
    </Container>
  );
};

export default DetailVisual;

const Container = styled.section<{ isMobile: boolean }>`
  background-color: #0084ad;
  overflow: hidden;

  ${props =>
    props.isMobile &&
    css`
      flex-direction: column;
      padding: 0;
    `}

  .inner {
    display: flex;
    justify-content: space-between;
    max-height: 340px;

    ${props =>
      props.isMobile &&
      css`
        padding: 0;
      `}
  }

  .camp-detail-visual-title {
    flex: 1;
    align-self: flex-end;

    ${props =>
      props.isMobile &&
      css`
        display: none;
      `}

    h1 {
      ${fonts.H1};
      font-size: 32px;
      word-break: keep-all;
      margin: 12px 0 16px;
      color: white;
    }

    h2 {
      ${fonts.H4}
      font-weight: normal;
      margin-bottom: 32px;
      color: #f3f4f5;
    }
  }

  .camp-detail-visual-img {
    flex: 1;
    overflow: hidden;

    img {
      width: 100%;
      margin-top: 40px;
      object-fit: cover;
      border-radius: 4px;

      ${props =>
        props.isMobile &&
        css`
          margin-top: 0;
        `}
    }
  }
`;
