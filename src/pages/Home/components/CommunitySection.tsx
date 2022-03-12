import { CommunityCard } from 'components';
import { ICommunity } from 'types/type';

import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';

interface Props {
  title: string;
  communities: ICommunity;
}

const CommunitySection = ({ title, communities }: Props) => {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="cards">
        <CommunityCard community={communities} />
      </div>
    </Container>
  );
};

export default CommunitySection;

const Container = styled.section`
  ${maxWidth}
`;
