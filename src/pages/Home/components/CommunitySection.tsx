import { CommunityCard } from 'components';
import { ICommunity } from 'types/type';
import { useMediaQuery } from 'react-responsive';
import { maxWidth } from 'styles/mixin';

import styled from 'styled-components';
import fonts from 'styles/fonts';

interface Props {
  title: string;
  communities: ICommunity[];
}

const CommunitySection = ({ title, communities }: Props) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return isDesktop ? (
    <Container>
      <div className="section-title">{title}</div>
      <div className="cards">
        {communities.map((community, index) => (
          <CommunityCard key={index} community={community} />
        ))}
      </div>
    </Container>
  ) : null;
};

export default CommunitySection;

const Container = styled.section`
  ${maxWidth}
  padding: 0px 16px;

  .section-title {
    ${fonts.H1};
    padding-bottom: 16px;
  }
  .cards {
    display: flex;
    gap: 20px;
  }
`;
