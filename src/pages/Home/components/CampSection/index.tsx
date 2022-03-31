import { useMediaQuery } from 'react-responsive';
import { ICamp } from 'types/Camp';
import { maxWidth } from 'styles/mixin';

import styled from 'styled-components';
import fonts from 'styles/fonts';
import CampCard from 'components/CampCard';

interface Props {
  title: string;
  camps: ICamp[]; // TODO: 배열 타입 설정을 안하고, map으로 돌리려고 해서 에러가 남
  isHeadField?: boolean;
}

function CampSection({ title, camps, isHeadField = false }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className={`${isMobile ? 'm-card' : 'd-card'}`}>
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
  min-height: 300px;

  .section-title {
    ${fonts.H1};
    padding-bottom: 12px;
  }

  .d-card {
    display: flex;
    gap: 20px;
  }

  .m-card {
    width: 100%;
  }
`;
