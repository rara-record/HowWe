import { CampCard } from 'components';
import styled from 'styled-components';

import fonts from 'styles/fonts';
import { maxWidth } from 'styles/mixin';

import { ICamp } from 'types/type';

interface Props {
  title: string;
  camps: ICamp[]; // TODO: 배열 설정을 안하고, map으로 돌리려고 해서 에러가 남
  isHeadField?: boolean;
}

function CampSection({ title, camps, isHeadField = false }: Props) {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="cards">
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} isHeadField={isHeadField} />
        ))}
      </div>
    </Container>
  );
}

export default CampSection;

const Container = styled.section`
  ${maxWidth}
  padding: 0 16px 40px;

  .section-title {
    ${fonts.H1};
    padding-bottom: 8px;
  }

  .cards {
    display: flex;
    gap: 20px;
  }
`;
