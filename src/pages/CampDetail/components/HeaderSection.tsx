import styled, { css } from 'styled-components';
import { ICampDetail } from 'types/CampDetail';
import { useMediaQuery } from 'react-responsive';

import fonts from 'styles/fonts';
import { Tag } from 'components';

interface IProps {
  targetCamp: ICampDetail;
}

const HeaderSection = ({ targetCamp }: IProps) => {
  const { name, desc, headerImage } = targetCamp;
  const { headerColor } = targetCamp.theme[0];

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container isMobile={isMobile} headerColor={headerColor}>
      <div className="inner">
        <TitieBox isMobile={isMobile}>
          <Tag color="white" size="medium" outline>
            2기모집
          </Tag>
          <h1>{name}</h1>
          <h2>{desc}</h2>
        </TitieBox>

        <ImageBox isMobile={isMobile}>
          <img src={headerImage} alt="camp-detail-visual-img" />
        </ImageBox>
      </div>
    </Container>
  );
};

export default HeaderSection;

const Container = styled.section<{ isMobile: boolean; headerColor: string }>`
  overflow: hidden;

  ${props =>
    props.headerColor &&
    css`
      background-color: ${props.headerColor};
    `}

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
`;

const TitieBox = styled.div<{ isMobile: boolean }>`
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
`;

const ImageBox = styled.figure<{ isMobile: boolean }>`
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
`;
