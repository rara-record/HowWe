import styled from 'styled-components';
import { ICampDetail } from 'types/CampDetail';
import Tags from 'components/Tags';
import fonts from 'styles/fonts';
import { maxWidth } from 'styles/mixin';

interface IProps {
  targetCamp: ICampDetail;
}

const DetailVisual = ({ targetCamp }: IProps) => {
  const { name, desc, headerImage } = targetCamp;

  return (
    <Container>
      <div className="camp-detail-visual-title">
        <Tags tags={['2기모집']} />
        <h1>{name}</h1>
        <h2>{desc}</h2>
      </div>

      <figure className="camp-detail-visual-img">
        <img src={headerImage} alt="camp-detail-visual-img" />
      </figure>
    </Container>
  );
};

export default DetailVisual;

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 340px;
  padding: 0 16px;
  z-index: 1;
  ${maxWidth};

  .camp-detail-visual-title {
    flex: 1;
    align-self: flex-end;

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
    }
  }
`;
