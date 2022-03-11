import { CampCard } from 'components';
import styled from 'styled-components';

import fonts from 'styles/fonts';
import { maxWidth } from 'styles/mixin';

import { ICamp } from 'types/type';

interface Props {
  title: string;
  camps: ICamp;
  isHeadField?: boolean;
}

function CampSection({ title, camps, isHeadField = false }: Props) {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div>
        <CampCard camp={camps} isHeadField={isHeadField} />
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
`;
